import React from 'react';
import useStore from './store';
import { Handle, Position } from 'reactflow';

function OutputNode({ id, data }) {
  return (
    <div style={{ backgroundColor: data.color, borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ padding: 20 }}>
        <h3>{data.show}</h3>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default OutputNode;
