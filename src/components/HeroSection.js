
import React, { useEffect, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import CheckNode from './CheckNode.js';
import { shallow } from 'zustand/shallow';
import { useCookies } from 'react-cookie';
import useStore from './store';
import OutputNode from './OutputNode';


import 'reactflow/dist/style.css';

const selector = (state) => ({
  number: state.number,
});
const nodeTypes = { checkNode: CheckNode, outputNode: OutputNode };

function HeroSection() {

  const {number} = useStore(selector, shallow);
  
  let initialNodes = [
    {
      id: '1',
      type: 'checkNode',
      data: { color: '#4FD1C5' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      type: 'outputNode',
      data: { color: '#F6E05E', show: 'Number % 2 = Remainder' },
      position: { x: 400, y: 200 },
    },
    {
      id: '3',
      type: 'outputNode',
      data: { color: '#B794F4', show: 'Result'},
      position: { x: 650, y: 350 },
    },
  ];
  let initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
  ];

  const [cookies, setCookies] = useCookies(['nodesCookie', 'edgesCookie']);
  if(cookies.nodesCookie !== undefined)
    initialNodes = cookies.nodesCookie
  if(cookies.edgesCookie !== undefined)
    initialEdges = cookies.edgesCookie;


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  useEffect(() => {
    function updateCookies(){
      setCookies('nodesCookie', nodes);
      setCookies('edgesCookie', edges);
    }
    updateCookies();
  }, [nodes, edges, setCookies])

  useEffect(() => {
    if(number === 0 || number === ''){
      initialNodes[1].data.show = 'Number % 2 = Remainder';
      initialNodes[2].data.show = 'Result';
    }
    else{
      initialNodes[1].data.show = number + ' % 2 = ' + (number%2);
      initialNodes[2].data.show = 'Result: ' + (number%2===0 ? 'Even': 'Odd');
    }
    setNodes(initialNodes);
  }, [number])

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (

    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'beige' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default HeroSection;