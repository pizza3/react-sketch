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
      grid:false,
      normal:true,
      rainbow:false,
      undo:false,
      redo:false,
    }
    this.handleChange=this.handleChange.bind(this);
    this.openState=this.openState.bind(this);
    this.openGrid=this.openGrid.bind(this);
    this.openRainbow=this.openRainbow.bind(this);
    this.undoState=this.undoState.bind(this);
    this.redoState=this.redoState.bind(this);

  }

  handleChange(color){
    this.setState({
      colorPass:color.hex,
      normal:true,
      rainbow:false
    });
  }

  openState(){
    this.setState({
      open:!this.state.open,
      normal:true,
      rainbow:false
    });
  }

  openGrid(){
    this.setState({
      grid:!this.state.grid
    })
  }

  openRainbow(){
    this.setState({
      normal:false,
      rainbow:true,
      open:false
    })
  }

  undoState(){
    this.setState({
      undo:true
    });
    setTimeout(()=>{
      this.setState({
        undo:false
      });
    },300)
  }

  redoState(){
    this.setState({
      redo:true
    });
    setTimeout(()=>{
      this.setState({
        redo:false
      });
    },300)
  }

  render() {
    return (
      <div className="App">
        <Navbar colorvalue={this.state.colorPass} action={this.openState} rainbow={this.openRainbow} dispGrid={this.openGrid} undo={this.undoState} redo={this.redoState} onClick={this.props.rainbow}/>
        { this.state.open?
          <SketchPicker color='#FFB000' onChange={this.handleChange }  />:null }
        {this.state.grid?
          <Grid/>:null}
        <Sketch colorvalue={this.state.colorPass} normalVal={this.state.normal} undoVal={this.state.undo} redoVal={this.state.redo}/>
      </div>
    );
  }
}

export default App;
