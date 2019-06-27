import React from 'react';

import Navbar from '../UI/Navbar/Navbar';

const layout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container pt-5 mt-3'>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
