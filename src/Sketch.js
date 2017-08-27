import React,{Component} from 'react';
import styled from 'styled-components';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight-50;
    // const width = canvas.width;
    // const height = canvas.height;
    canvasDpiScaler(canvas, ctx);
    ctx.fillRect(10,10, 100, 100);

  }

  render(){
    const Sheet = styled.canvas`
      position: absolute;
      z-index: 10;
      top:50px;
    `
    return(
      <Sheet ref="canvas" id='canvas' />
    )
  }
}


export default Sketch;
