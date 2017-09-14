import React,{Component} from 'react';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Visual1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      canvas:null,
      ctx:null,
      isDrawing:false,
      points:[],
      hue:50
    }
    this.updateCanvas=this.updateCanvas.bind(this);
  }

  componentDidMount(){
  this.updateCanvas();
}

updateCanvas(){
  const canvas = document.getElementById('visual1');
  const ctx =  canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  canvasDpiScaler(canvas,ctx);
  this.setState({
    canvas:canvas,
    ctx:ctx
  })
  var r=0;
  ctx.translate(window.innerWidth/2,window.innerHeight/2);


    ctx.strokeStyle = 'rgba(0,280,200,0.1)';
    // ctx.moveTo(points[points.length-1].x,points[points.length-1].y)
    // ctx.translate(points[points.length-1].x,points[points.length-1].y);
    var ang=0.0005;
    var hue=330,hue1=200;
    function fun() {
      // ctx.globalCompositeOperation = 'screen';

      //ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(-window.innerWidth, -window.innerHeight, canvas.width*2, canvas.height*2);
    ctx.beginPath();
    ctx.rotate(0.5 * Math.PI / 180)
    // ctx.strokeStyle = 'rgba(0,280,200,0.6)';
    ctx.strokeStyle = `hsla(${hue}, 100%, 80%,0.4)`;
    hue+=0.05;
    if (hue >= 350) {
          hue=330
      }
    for(var i=0;i<Math.PI*2*8;i+=0.01){
      var k=5/8;
      var r = 600*Math.cos(k*i);
      var x=r*Math.cos(i);
      var y=r*Math.sin(i);
      ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.stroke();
    // ang+=0.01;

    ctx.beginPath();
    ctx.rotate(-0.005 * Math.PI / 180)
    // ctx.strokeStyle = 'rgba(0,280,200,0.6)';
    ctx.strokeStyle = `hsla(${hue1}, 100%, 80%,0.4)`;
    hue1+=0.05;
    if (hue1 >= 250) {
          hue1=200
      }
    for(var i=0;i<Math.PI*2*1;i+=0.01){
      var k=6/1;
      var r = 500*Math.cos(k*i);
      var x=r*Math.cos(i);
      var y=r*Math.sin(i);
      ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.rotate(-0.005 * Math.PI / 180)
    // ctx.strokeStyle = 'rgba(0,280,200,0.6)';
    ctx.strokeStyle = `hsla(${hue1}, 100%, 80%,0.2)`;
    hue1+=0.05;
    if (hue1 >= 250) {
          hue1=200
      }
    for(var i=0;i<Math.PI*2*9;i+=0.01){
      var k=2/9;
      var r = 800*Math.cos(k*i);
      var x=r*Math.cos(i);
      var y=r*Math.sin(i);
      ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.rotate(0.05 * Math.PI / 180)
    // ctx.strokeStyle = 'rgba(0,280,200,0.6)';
    ctx.strokeStyle = `hsla(${hue1}, 100%, 80%,0.2)`;

    hue1+=0.05;
    if (hue1 >= 250) {
          hue1=200
      }
    for(var i=0;i<Math.PI*2*4;i+=0.01){
      var k=7/4;
      var r = 800*Math.cos(k*i);
      var x=r*Math.cos(i);
      var y=r*Math.sin(i);
      ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.stroke();

    requestAnimationFrame(fun);
  }
  requestAnimationFrame(fun);

}



  render(){
    return(
      <canvas id='visual1' className='visual1'>

      </canvas>
    )
  }
}


export default Visual1;
