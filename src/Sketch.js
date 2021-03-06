import React,{Component} from 'react';
import canvasDpiScaler from 'canvas-dpi-scaler';

class Sketch extends Component{
  constructor(props){
    super(props);
    this.state={
      isDrawing:false,
      strokeColor:'#292929',
      strokeNo: "0",
      normal:true,
      ctx:null,
      canvas:null,
      width:null,
      height:null,
      hue:200,
      points:[],
      cPushArray:[],
      cStep:-1,
      undo:false,
      redo:false,
      undobtn:false,
      redobtn:false,
      delete:false,
      save:false,
      user:null,
      val:null
    }
    this.updateCanvas = this.updateCanvas.bind(this);
    this.sketchUp = this.sketchUp.bind(this);
    this.sketchDown = this.sketchDown.bind(this);
    this.sketchLeave = this.sketchLeave.bind(this);
    this.sketchMove = this.sketchMove.bind(this);
    this.undoCanvas = this.undoCanvas.bind(this);
    this.redoCanvas = this.redoCanvas.bind(this);
  }

  componentDidMount(){
     this.updateCanvas();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      strokeColor:newProps.colorvalue,
      strokeNo:newProps.strokevalue,
      normal:newProps.normalVal,
      user:newProps.user,
      delete:newProps.delete,
      save:newProps.save,
      val:newProps.val
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
    switch (this.state.strokeNo) {
      case "0":
      this.setState({isDrawing:true})
      this.state.ctx.lineWidth = this.props.val.stroke1strokeWidth;
      this.state.ctx.shadowBlur = 10;
      this.state.ctx.lineJoin = 'round';
      this.state.ctx.lineCap = 'round';
      this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+','+this.props.val.stroke1strokeOpacity+')';
      this.state.ctx.beginPath();
      break;
      case "1":
      this.state.ctx.lineWidth = this.props.val.stroke2strokeWidth;
      // this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',1)';
      this.state.ctx.lineJoin = this.state.ctx.lineCap = 'round';
      this.setState({
      isDrawing:!this.state.isDrawing,
      points:this.state.points.concat({x: e.clientX, y: e.clientY })
    })
      break;
      case "2":
      this.state.ctx.lineWidth = this.props.val.stroke3strokeWidth;
      this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',1)';
      this.state.ctx.lineJoin = this.state.ctx.lineCap = 'round';
      this.setState({
      isDrawing:!this.state.isDrawing,
      points:this.state.points.concat({x: e.clientX, y: e.clientY })
    })
      break;
      case "3":
      this.state.ctx.lineWidth = this.props.val.stroke4strokeWidth;
      this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',1)';
      this.state.ctx.lineJoin = this.state.ctx.lineCap = 'round';
      this.setState({
      isDrawing:!this.state.isDrawing,
      points:this.state.points.concat({x: e.clientX, y: e.clientY })
      })
      break;
      default:

    }


  }

  sketchMove(e){
    if (this.state.isDrawing) {
      switch (this.state.strokeNo) {
      case "0":
        if(this.state.normal){
          this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+','+this.props.val.stroke1strokeOpacity+')';
          this.state.ctx.lineTo(e.clientX , e.clientY - 50);
          this.state.ctx.stroke();
          this.state.ctx.beginPath();
          this.state.ctx.arc(e.clientX , e.clientY - 50, this.state.ctx.lineWidth * 2, 0, Math.PI * 2);
          this.state.ctx.fillStyle = this.state.color;
          this.state.ctx.beginPath();
          this.state.ctx.moveTo(e.clientX , e.clientY - 50);
        }

      else{

        this.state.ctx.strokeStyle = `hsl(${this.state.hue}, ${this.props.val.stroke1strokeSaturation}%, ${this.props.val.stroke1strokeLightening}%)`;
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
        if (this.state.hue >= this.props.val.stroke1strokeHuelimit) {
          this.setState({
            hue:0
          });
          }
        }
        break;

        case "1":
        if(this.state.normal){
          this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+','+this.props.val.stroke2strokeOpacity+')';
          this.state.points.push({ x: e.clientX, y: e.clientY-50 });
          this.state.ctx.beginPath();
          this.state.ctx.moveTo(this.state.points[this.state.points.length - 2].x, this.state.points[this.state.points.length - 2].y);
          this.state.ctx.lineTo(this.state.points[this.state.points.length - 1].x, this.state.points[this.state.points.length - 1].y);
          this.state.ctx.stroke();
          for (let i = 0, len = this.state.points.length; i < len; i++) {
            var dx = this.state.points[i].x - this.state.points[this.state.points.length-1].x;
            var dy = this.state.points[i].y - this.state.points[this.state.points.length-1].y;
            var d = dx * dx + dy * dy;

            if (d < this.props.val.stroke2strokeDistance) {

              this.state.ctx.beginPath();
              this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',0.1)';

              this.state.ctx.moveTo( this.state.points[this.state.points.length-1].x + (dx * 0.2), this.state.points[this.state.points.length-1].y + (dy * 0.2));
              this.state.ctx.lineTo( this.state.points[i].x - (dx * 0.2), this.state.points[i].y - (dy * 0.2));
              this.state.ctx.stroke();
            }
          }
        }
        else {
          this.state.points.push({ x: e.clientX, y: e.clientY-50 });
          this.state.ctx.beginPath();
          this.state.ctx.moveTo(this.state.points[this.state.points.length - 2].x, this.state.points[this.state.points.length - 2].y);
          this.state.ctx.lineTo(this.state.points[this.state.points.length - 1].x, this.state.points[this.state.points.length - 1].y);
          this.state.ctx.stroke();
          for (let i = 0, len = this.state.points.length; i < len; i++) {
            var dx1 = this.state.points[i].x - this.state.points[this.state.points.length-1].x;
            var dy1 = this.state.points[i].y - this.state.points[this.state.points.length-1].y;
            var d1 = dx1 * dx1 + dy1 * dy1;
            if (d1 < this.props.val.stroke2strokeDistance) {
              this.state.ctx.beginPath();
              this.state.ctx.strokeStyle = `hsla(${this.state.hue}, ${this.props.val.stroke2strokeSaturation}%, ${this.props.val.stroke2strokeLightening}%,0.1)`;
              this.setState({
                hue:this.state.hue+1
              });
            if (this.state.hue >= this.props.val.stroke2strokeHuelimit) {
              this.setState({
                hue:0
              });
            }
            this.state.ctx.moveTo( this.state.points[this.state.points.length-1].x + (dx1 * 0.2), this.state.points[this.state.points.length-1].y + (dy1 * 0.2));
            this.state.ctx.lineTo( this.state.points[i].x - (dx1 * 0.2), this.state.points[i].y - (dy1 * 0.2));
            this.state.ctx.stroke();
          }
        }
      }

          break;

        case "2":
        if(this.state.normal){
        this.state.points.push({ x: e.clientX, y: e.clientY-50 });
        this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',0.1)';
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(this.state.points[0].x, this.state.points[0].y);
        for (var i = 1; i < this.state.points.length; i++) {
          this.state.ctx.lineTo(this.state.points[i].x, this.state.points[i].y);
          var nearPoint = this.state.points[i-this.props.val.stroke3strokeNearpoint];
          if (nearPoint) {
            this.state.ctx.moveTo(nearPoint.x, nearPoint.y);
            this.state.ctx.lineTo(this.state.points[i].x, this.state.points[i].y);
          }
        }
        this.state.ctx.stroke();
      }
      else {
        this.state.points.push({ x: e.clientX, y: e.clientY-50 });
        // this.state.ctx.strokeStyle = 'rgba(0,280,200,0.1)';
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(this.state.points[0].x, this.state.points[0].y);
        for (var i = 1; i < this.state.points.length; i++) {
          this.state.ctx.lineTo(this.state.points[i].x, this.state.points[i].y);
          var nearPoint = this.state.points[i-this.props.val.stroke3strokeNearpoint];
          if (nearPoint) {
            this.state.ctx.moveTo(nearPoint.x, nearPoint.y);
            this.state.ctx.lineTo(this.state.points[i].x, this.state.points[i].y);
          }
        }
        this.state.ctx.strokeStyle = `hsla(${this.state.hue}, ${this.props.val.stroke3strokeSaturation}%, ${this.props.val.stroke3strokeLightening}%,0.1)`;
        this.setState({
          hue:this.state.hue+1
        });
        if (this.state.hue >= this.props.val.stroke3strokeHuelimit) {
          this.setState({
            hue:0
          });
          }
        this.state.ctx.stroke();
      }

          break;

        case "3":
        if(this.state.normal){
        this.state.points.push({ x: e.clientX, y: e.clientY-50 });
        this.state.ctx.beginPath();
        this.state.ctx.strokeStyle = 'rgba('+this.state.strokeColor.r+','+this.state.strokeColor.g+','+this.state.strokeColor.b+',0.1)';
        this.state.ctx.moveTo(this.state.points[this.state.points.length - 2].x, this.state.points[this.state.points.length - 2].y);
        this.state.ctx.lineTo(this.state.points[this.state.points.length - 1].x, this.state.points[this.state.points.length - 1].y);
        this.state.ctx.stroke();
        for (var i = 0, len = this.state.points.length; i < len; i++) {
        var  dx = this.state.points[i].x - this.state.points[this.state.points.length-1].x;
        var  dy = this.state.points[i].y - this.state.points[this.state.points.length-1].y;
        var  d = dx * dx + dy * dy;
          if (d < this.props.val.stroke4strokeDistance && Math.random() > d / this.props.val.stroke4strokeDistance) {
            this.state.ctx.beginPath();
            this.state.ctx.moveTo( this.state.points[this.state.points.length-1].x + (dx * 0.5), this.state.points[this.state.points.length-1].y + (dy * 0.5));
            this.state.ctx.lineTo( this.state.points[this.state.points.length-1].x - (dx * 0.5), this.state.points[this.state.points.length-1].y - (dy * 0.5));
            this.state.ctx.stroke();
          }
        }
      }

      else {
        this.setState({
          hue:this.props.val.stroke4strokeHue
        });
        this.state.points.push({ x: e.clientX, y: e.clientY-50 });
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(this.state.points[this.state.points.length - 2].x, this.state.points[this.state.points.length - 2].y);
        this.state.ctx.lineTo(this.state.points[this.state.points.length - 1].x, this.state.points[this.state.points.length - 1].y);
        this.state.ctx.stroke();
        for (var i = 0, len = this.state.points.length; i < len; i++) {
          dx = this.state.points[i].x - this.state.points[this.state.points.length-1].x;
          dy = this.state.points[i].y - this.state.points[this.state.points.length-1].y;
          d = dx * dx + dy * dy;
          if (d < this.props.val.stroke4strokeDistance && Math.random() > d / this.props.val.stroke4strokeDistance) {
            this.state.ctx.beginPath();
            this.state.ctx.moveTo( this.state.points[this.state.points.length-1].x + (dx * 0.5), this.state.points[this.state.points.length-1].y + (dy * 0.5));
            this.state.ctx.lineTo( this.state.points[this.state.points.length-1].x - (dx * 0.5), this.state.points[this.state.points.length-1].y - (dy * 0.5));
            this.state.ctx.stroke();
          }
        }
        var hue=this.props.val.stroke4strokeHue;
        this.state.ctx.strokeStyle = `hsla(${hue}, ${this.props.val.stroke4strokeSaturation}%, ${this.props.val.stroke4strokeLightening}%,0.1)`;
        // this.setState({
        //   hue:this.state.hue+1
        // });
        hue++;
        if (hue >= this.props.val.stroke4strokeHuelimit) {
          // this.setState({
          //   hue:this.props.val.stroke4strokeHue
          // });
          hue=this.props.val.stroke4strokeHue;
          }
      }

          break;
        default:

      }

    }
  }

  sketchUp(){
    this.setState({isDrawing:false,
    points:[]});
    this.state.ctx.strokeStyle = this.state.strokeStyle;
    this.setState({
      cStep:this.state.cStep+1
    },function () {
      if(this.state.cStep>=0){
        document.getElementById('hide-undo1').className+=' hide-filter';

      }
      else if (this.state.cStep!==this.state.cPushArray.length-1) {
        document.getElementById('hide-redo').className+=' hide-filter';
      }
      }

  );
    if(this.state.cStep<this.state.cPushArray.length){
    }
    let newArr =  this.state.cPushArray.slice();
    newArr.push(this.state.canvas.toDataURL());
    this.setState({
      cPushArray:newArr
    });
  }

  sketchLeave(){
    this.setState({isDrawing:false,
    points:[]});
  }

  undoCanvas(){
    if(this.state.cStep>=0){
      document.getElementById('hide-redo').className+=' hide-filter';
      this.setState({
        cStep:this.state.cStep-1
      },
      function () {

        let canvasPic = new Image();
        canvasPic.src= this.state.cPushArray[this.state.cStep];
        canvasPic.onload=()=> {
          this.state.ctx.drawImage(canvasPic,0,0,this.state.canvas.width/2, this.state.canvas.height/2);
        }
        if(this.state.cStep===-1){
          document.getElementById('hide-undo1').classList.remove('hide-filter');

        }
      }
    );
    }
  }

redoCanvas(){
  if(this.state.cStep<=this.state.cPushArray.length-1){
    document.getElementById('hide-undo1').className+=' hide-filter';
    this.setState({
      cStep:this.state.cStep+1
    },
  function () {
    let canvasPic = new Image();
    canvasPic.src= this.state.cPushArray[this.state.cStep];
    canvasPic.onload=()=> {
      this.state.ctx.drawImage(canvasPic,0,0,this.state.canvas.width/2, this.state.canvas.height/2);
    }
    if(this.state.cStep===this.state.cPushArray.length-1){
      document.getElementById('hide-redo').classList.remove('hide-filter');
    }
  });

  }
}


  render(){
    return(
      <canvas className='sheet' ref='canvas' id='canvas' onMouseDown={this.sketchDown} onTouchStart={this.sketchDown}
      onTouchMove={this.sketchMove} onMouseMove={this.sketchMove} onMouseLeave={this.sketchLeave} onMouseUp={this.sketchUp}>
      </canvas>
    )
  }
}


export default Sketch;
