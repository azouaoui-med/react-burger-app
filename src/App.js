import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/orders' component={Orders} />
          <Route path='/' component={BurgerBuilder} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
