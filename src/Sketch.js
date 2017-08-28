import React,{Component} from 'react';
import styled from 'styled-components';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state={
      isDrawing:false,
      ctx:'',
      color:'#FFB000',
      hue:0

    }
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount(){
    this.updateCanvas();
  }

  updateCanvas(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let isDrawing=false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-50;
    // const width = canvas.width;
    // const height = canvas.height;
    canvasDpiScaler(canvas,ctx);
    ctx.strokeStyle=this.state.color;
    canvas.onmousedown=function(e){
      isDrawing=true;
      ctx.lineWidth = 60;
      ctx.shadowBlur = 10;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.beginPath();
    }
    canvas.onmousemove=(e)=>{
      if (isDrawing) {
        ctx.lineTo(e.clientX , e.clientY - 50);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX , e.clientY - 50, ctx.lineWidth * 2, 0, Math.PI * 2);
        ctx.fillStyle = this.state.color;
        ctx.beginPath();
        ctx.moveTo(e.clientX , e.clientY - 50);
      }
    }
    canvas.onmouseup=()=>{
      isDrawing=false;
    }

    canvas.onmouseleave=()=>{
      isDrawing=false;
    }
  }

  render(){
    const Sheet = styled.canvas`
      position: absolute;
      z-index: 10;
      top:50px;
      width: 100%;
      height: 100vh;
      cursor: cell;
    `
    return(
      <Sheet ref="canvas" id='canvas' />
    )
  }
}


export default Sketch;
