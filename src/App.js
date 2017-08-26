import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.js'
import Sketch from './Sketch.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Sketch/>
      </div>
    );
  }
}

export default App;
