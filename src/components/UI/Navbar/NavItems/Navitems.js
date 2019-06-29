import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink className='nav-link' exact to='/'>
          Burger Builder <span className='sr-only'>(current)</span>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/orders'>
          Orders
        </NavLink>
      </li>
    </ul>
  </div>
);

export default navitems;
