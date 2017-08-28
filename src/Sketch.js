import React,{Component} from 'react';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state={
      isDrawing:false,
      strokeColor:'#FFB000',
      ctx:null,
      canvas:null

    }
    this.updateCanvas = this.updateCanvas.bind(this);
    this.sketchUp = this.sketchUp.bind(this);
    this.sketchDown = this.sketchDown.bind(this);
    this.sketchLeave = this.sketchLeave.bind(this);
    this.sketchMove = this.sketchMove.bind(this);

  }

  componentDidMount(){
    // this.makeCanvas();
     this.updateCanvas();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      strokeColor:newProps.colorvalue
    });
    //this.updateCanvas();
  }



  updateCanvas(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // let isDrawing=false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-50;
    // const width = canvas.width;
    // const height = canvas.height;
    canvasDpiScaler(canvas,ctx);
    this.setState({
      ctx:ctx,
      canvas:canvas
    });
  }

  sketchDown(e){
    this.setState({isDrawing:true});
    this.state.ctx.lineWidth = 60;
    this.state.ctx.shadowBlur = 10;
    this.state.ctx.lineJoin = 'round';
    this.state.ctx.lineCap = 'round';
    this.state.ctx.beginPath();
    this.state.ctx.strokeStyle=this.state.strokeColor;
  }

  sketchMove(e){
      if (this.state.isDrawing) {
        this.state.ctx.lineTo(e.clientX , e.clientY - 50);
        this.state.ctx.stroke();
        this.state.ctx.beginPath();
        this.state.ctx.arc(e.clientX , e.clientY - 50, this.state.ctx.lineWidth * 2, 0, Math.PI * 2);
        this.state.ctx.fillStyle = this.state.color;
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(e.clientX , e.clientY - 50);
      }
  }

  sketchUp(){
    this.setState({isDrawing:false});
  }

  sketchLeave(){
    this.setState({isDrawing:false});
  }

  render(){
    return(
      <canvas className='sheet' ref='canvas' id='canvas' onMouseDown={this.sketchDown} onMouseMove={this.sketchMove} onMouseLeave={this.sketchLeave} onMouseUp={this.sketchUp}></canvas>
    )
  }
}


export default Sketch;
