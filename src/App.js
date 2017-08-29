import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Sketch from './Sketch.js'
import Grid from './Grid.js'
import { SketchPicker } from 'react-color';
import Raven from 'raven-js';

Raven.config('https://dd96fa0593f0410e98119edc5d677e8c@sentry.io/209342').install()
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      colorPass:'#FFB000',
      open:false,
      grid:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.openState=this.openState.bind(this);
    this.openGrid=this.openGrid.bind(this);
  }

  handleChange(color){
    this.setState({
      colorPass:color.hex
    });
  }

  openState(){
    this.setState({
      open:!this.state.open
    });
  }

  openGrid(){
    this.setState({
      grid:!this.state.grid
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar colorvalue={this.state.colorPass} action={this.openState} dispGrid={this.openGrid}/>
        { this.state.open?
          <SketchPicker color='#FFB000' onChange={ this.handleChange }  />:null }
        {this.state.grid?
          <Grid/>:null}
        <Sketch colorvalue={this.state.colorPass} />
      </div>
    );
  }
}

export default App;
