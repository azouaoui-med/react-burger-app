import React from 'react';

const buildControl = props => (
  <div className='d-flex m-1'>
    <div className='flex-fill'>{props.label}</div>
    <div>
      <button
        className='btn btn-warning mr-2'
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className='btn btn-success' onClick={props.added}>
        More
      </button>
    </div>
  </div>
);

export default buildControl;
