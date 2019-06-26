import React from 'react';

const backdrop = props =>
  props.show ? (
    <div className='modal-backdrop fade show' onClick={props.clicked} />
  ) : null;

export default backdrop;
