import React from 'react';
import useStore from './store';
import { Handle, Position } from 'reactflow';
import './style.css'

function CheckNode({ id, data }) {
  const updateNumber = useStore((state) => state.updateNumber);
  const resetNode = useStore((state) => state.resetNode);
  const onChange = (evt)=>{
    // if(evt.target.value === ''){
    //   resetNode();
    //   console.log(typeof evt.target.value, evt.target.value==='');
      
    //   return;
    // }
    updateNumber(evt.target.value)
  }
  return (
    <div style={{ backgroundColor: data.color, borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ padding: 20 }} className='flex'>
        <div><h3>Check a number Odd or Even</h3></div>
        <div>
          <input type='number' onChange={onChange} />
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CheckNode;
