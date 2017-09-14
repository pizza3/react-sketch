import React, {Component} from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render(){
    let sty1={
  'width':'100%',
  'height':'0px',
  'position':'relative',
  'padding-bottom':'53.720%'

}

let sty2={
  'width':'100%',
  'height':'100%',
  'position':'absolute',
  'left':'0px',
  'top':'0px',
  'overflow':'hidden'
}
    return(
      <div style={sty1}>
        <iframe src="https://streamable.com/s/wbdqy/crsfco?autoplay=1&muted=1" frameborder="0" width="100%" height="100%" allowfullscreen style={sty2}>
        </iframe>
      </div>
    )
  }
}

export default Video;
