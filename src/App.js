import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Sketch from './Sketch.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color:''
    }
    this.handleColor=this.handleColor.bind(this);
  }

  handleColor(colorValue){
    this.setState({
      color:colorValue
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar onColorChange={this.handleColor}/>
        <Sketch/>
      </div>
    );
  }
}

export default App;
