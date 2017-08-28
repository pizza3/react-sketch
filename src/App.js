import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Sketch from './Sketch.js'
import Raven from 'raven-js';
Raven.config('https://dd96fa0593f0410e98119edc5d677e8c@sentry.io/209342').install()
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      colorPass:'#FFB000'
    }
    this.handleColor=this.handleColor.bind(this);
  }

  handleColor(colorValue){
    this.setState({
      colorPass:colorValue
    });
  }
  render() {

    return (
      <div className="App">
        <Navbar onColorChange={this.handleColor}/>
        <Sketch colorvalue={this.state.colorPass}/>
      </div>
    );
  }
}

export default App;
