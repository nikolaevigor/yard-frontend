import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Complexes from './Complexes'
import Complex from './Complex'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route path="/complex" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
