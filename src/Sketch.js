import React,{Component} from 'react';
import canvasDpiScaler from 'canvas-dpi-scaler';
import firebase from './firebase.js';

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state={
      isDrawing:false,
      strokeColor:'#292929',
      normal:true,
      ctx:null,
      canvas:null,
      width:null,
      height:null,
      hue:0,
      cPushArray:[],
      cStep:-1,
      undo:false,
      redo:false,
      delete:false,
      save:false,
      user:null
    }
    this.updateCanvas = this.updateCanvas.bind(this);
    this.sketchUp = this.sketchUp.bind(this);
    this.sketchDown = this.sketchDown.bind(this);
    this.sketchLeave = this.sketchLeave.bind(this);
    this.sketchMove = this.sketchMove.bind(this);
    this.undoCanvas = this.undoCanvas.bind(this);
    this.redoCanvas = this.redoCanvas.bind(this);
    this.uploadSketch = this.uploadSketch.bind(this);
  }

  componentDidMount(){
     this.updateCanvas();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      strokeColor:newProps.colorvalue,
      normal:newProps.normalVal,
      user:newProps.user,
      delete:newProps.delete,
      save:newProps.save
      // undo:newProps.undoVal

    });
    if(newProps.undoVal){
      this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
      this.undoCanvas();
    }
    else if (newProps.redoVal) {
      this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
      this.redoCanvas();
    }
    else if (newProps.delete) {
      this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
    }
    else if (newProps.save) {
      this.uploadSketch();
    }
  }

  updateCanvas(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-50;
    const width = canvas.width;
    const height = canvas.height;
    canvasDpiScaler(canvas,ctx);
    this.setState({
      ctx:ctx,
      canvas:canvas,
      width:width,
      height:height
    });
  }

  sketchDown(e){
    this.setState({isDrawing:true});
    this.state.ctx.lineWidth = 40;
    this.state.ctx.shadowBlur = 10;
    this.state.ctx.lineJoin = 'round';
    this.state.ctx.lineCap = 'round';
    this.state.ctx.beginPath();
    if(this.state.normal){
      this.state.ctx.strokeStyle=this.state.strokeColor;
    }
    else {
      this.state.ctx.strokeStyle='#BADA55';
    }
  }

  sketchMove(e){
    if (this.state.isDrawing) {
      if(this.state.normal){
      this.state.ctx.lineTo(e.clientX , e.clientY - 50);
      this.state.ctx.stroke();
      this.state.ctx.beginPath();
      this.state.ctx.arc(e.clientX , e.clientY - 50, this.state.ctx.lineWidth * 2, 0, Math.PI * 2);
      this.state.ctx.fillStyle = this.state.color;
      this.state.ctx.beginPath();
      this.state.ctx.moveTo(e.clientX , e.clientY - 50);
    }

    else{
      this.state.ctx.strokeStyle = `hsl(${this.state.hue}, 100%, 50%)`;
      this.state.ctx.lineTo(e.clientX , e.clientY - 50);
      this.state.ctx.stroke();
      this.state.ctx.beginPath();
      this.state.ctx.arc(e.clientX , e.clientY - 50, this.state.ctx.lineWidth * 2, 0, Math.PI * 2);
      this.state.ctx.fillStyle = this.state.color;
      this.state.ctx.beginPath();
      this.state.ctx.moveTo(e.clientX , e.clientY - 50);
      this.setState({
        hue:this.state.hue+1
      });
      if (this.state.hue >= 360) {
        this.setState({
          hue:0});
        }
      }
    }
  }

  sketchUp(){
    this.setState({isDrawing:false});
    this.setState({
      cStep:this.state.cStep+1
    });
    if(this.state.cStep<this.state.cPushArray.length){
    }
    let newArr =  this.state.cPushArray.slice();
    newArr.push(this.state.canvas.toDataURL());
    this.setState({
      cPushArray:newArr
    });
  }

  sketchLeave(){
    this.setState({isDrawing:false});
  }

  undoCanvas(){
    if(this.state.cStep>0){
      this.setState({
        cStep:this.state.cStep-1
      });
      let canvasPic = new Image();
      canvasPic.src= this.state.cPushArray[this.state.cStep];
      canvasPic.onload=()=> {
      this.state.ctx.drawImage(canvasPic,0,0,this.state.canvas.width/2, this.state.canvas.height/2);
    }
  }
}

redoCanvas(){
  if(this.state.cStep<this.state.cPushArray.length-1){
    this.setState({
      cStep:this.state.cStep+1
    });
    let canvasPic = new Image();
    canvasPic.src= this.state.cPushArray[this.state.cStep];
    canvasPic.onload=()=> {
      this.state.ctx.drawImage(canvasPic,0,0,this.state.canvas.width/2, this.state.canvas.height/2);
    }
  }
}


uploadSketch(){
  
}

  render(){
    return(
      <canvas className='sheet' ref='canvas' id='canvas' onMouseDown={this.sketchDown} onTouchStart={this.sketchDown}
        onTouchMove={this.sketchMove}
      onMouseMove={this.sketchMove} onMouseLeave={this.sketchLeave} onMouseUp={this.sketchUp}>
      </canvas>
    )
  }
}


export default Sketch;
