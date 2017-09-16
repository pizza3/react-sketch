import React, {Component} from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render(){

    return(
      <div className='vid-cover'>
      <div className='frame-box'>
        <iframe src="https://streamable.com/s/gsya3/amrtco" frameborder="0" width="100%" height="100%" allowfullscreen className='frame'>
        </iframe>
      </div>
    </div>
    )
  }
}

export default Video;
