import React from 'react';

const toggler = props => (
  <button
    className='navbar-toggler'
    type='button'
    aria-label='Toggle navigation'
    onClick={props.toggleNav}
  >
    <span className='navbar-toggler-icon' />
  </button>
);

export default toggler;
