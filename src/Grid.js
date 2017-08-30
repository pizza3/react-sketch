import React,{Component} from 'react';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Grid extends Component{
  constructor(props){
    super(props);
    this.state={
      ctx:null,
      canvas:null,
      fillStroke:'#f3f3f3'
    }
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount(){
     this.updateCanvas();
  }

  updateCanvas(){
    const canvas = document.getElementById('grid');
    const ctx = this.refs.grid.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const width = canvas.width;
    const height = canvas.height;
    canvasDpiScaler(canvas,ctx);
    this.setState({
      ctx:ctx
    });

    ctx.strokeStyle=this.state.fillStroke;
    for(let i=20;i<=width;i+=20){
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for(let j=20;j<=height;j+=20){
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(width,j);
      ctx.stroke();
    }
}

  render(){
    return(
      <canvas className='grid' ref='grid' id='grid'></canvas>
    );
  }
}

export default Grid;
