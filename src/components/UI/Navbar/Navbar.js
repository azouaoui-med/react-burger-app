import React, { useState } from 'react';

import NavbarItems from './NavItems/Navitems';
import Toggler from './Toggler/Toggler';

const Navbar = props => {
  const [toggleNav, setToggleNav] = useState({ collapsed: false });
  const toggleNavHandler = () => {
    setToggleNav({ collapsed: !toggleNav.collapsed });
  };

  return (
    <nav className='navbar fixed-top navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          Burger
        </a>
        <Toggler toggleNav={toggleNavHandler} />
        <NavbarItems collapsed={toggleNav.collapsed} />
      </div>
    </nav>
  );
};

export default Navbar;
