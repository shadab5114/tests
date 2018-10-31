import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Layout from './hoc/Layout';
//import logo from './logo.svg';
import './App.css';

import Products from './Containers/Products/Products';
import Orders from './Containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
            <Switch>
                <Route path = '/products' exact component = {Products}/>
                <Route path = '/cart' exact component = {Orders}/>
                <Route path = '/' exact component = {Products}/>
            </Switch>
       </Layout>
      </div>
    );
  }
}

export default App;
