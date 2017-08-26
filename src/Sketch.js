import React,{Component} from 'react';
import styled from 'styled-components';

class Sketch extends Component{
  constructor(){
    super();
    this.state={

    }
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    const canvas = document.getElementById('canvas');
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
  }

  render(){
    const Sheet = styled.canvas`
      position: absolute;
      width: 100%;
      height: 100vh;
      z-index: 10;
    `
    return(
      <Sheet ref="canvas" id='canvas' />
    )
  }
}


export default Sketch;
