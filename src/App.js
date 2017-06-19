import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Footer from './Footer'
import CompassDevelopmentBlock from './CompassDevelopmentBlock'
import Intro from './Intro'
import Cards from './Cards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CompassDevelopmentBlock />
        <Intro />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
