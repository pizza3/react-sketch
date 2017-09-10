import React, {Component} from 'react';

class Setting extends Component{
  constructor(props){
    super(props);
    this.state={
      val:null
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      val:newProps.val
    })
  }

  // handleStrokeWidth(e){
  //   this.props.onSelectStroke()
  // }
  //
  // handleStrokeOpacity(){
  //   this.props.onSelectOpacity()
  // }



  render(){
    return(
      <div id='setting-box' className='setting-box'>
        <div className='setting-header'>SETTING</div>
        <div className='setting-stroke1'>NORMAL</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke1' type='number' min="1" max="60" value={this.props.val.stroke1strokeWidth} onChange={this.props.handleStroke}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke1' step="0.1" min="0" max="1" value={this.props.val.stroke1strokeOpacity} onChange={this.props.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="360" value={this.props.val.stroke1strokeHue} onChange={this.props.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="360" value={this.props.val.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.props.val.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.props.val.stroke1strokeOpacity} />
        </div>
        <div className='setting-stroke1'>NEIGHBOR BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke2' type='number' min="1" max="60" value={this.props.val.stroke2strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke2' step="0.1" min="0" max="1" value={this.props.val.stroke2strokeOpacity} onChange={this.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.props.val.stroke2strokeOpacity} onChange={this.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.props.val.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.props.val.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.props.val.stroke2strokeOpacity} />
        </div>
        <div className='setting-stroke1'>POINT BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke3' type='number' min="1" max="60" value={this.props.val.stroke3strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke3' step="0.1" min="0" max="1" value={this.props.val.stroke3strokeOpacity} onChange={this.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.props.val.stroke3strokeOpacity} onChange={this.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.props.val.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.props.val.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.props.val.stroke3strokeOpacity} />
        </div>
        <div className='setting-stroke1'>FUR</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke4' type='number' min="1" max="60" value={this.props.val.stroke4strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke4' step="0.1" min="0" max="1" value={this.props.val.stroke4strokeOpacity} onChange={this.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="360" value={this.props.val.stroke4strokeOpacity} onChange={this.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="360" value={this.props.val.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.props.val.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.props.val.stroke4strokeOpacity} />
        </div>
      </div>
    )
  }
}


export default Setting;
