import React from 'react';

const navitems = props => (
  <div
    className={
      props.collapsed
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse'
    }
  >
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <a className='nav-link' href='!#'>
          Burger Builder <span className='sr-only'>(current)</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='!#'>
          Checkout
        </a>
      </li>
    </ul>
  </div>
);

export default navitems;
