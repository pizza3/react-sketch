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
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="360" value={this.props.val.stroke1strokeHuelimit} onChange={this.props.handleHuelimit} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.props.val.stroke1strokeSaturation} onChange={this.props.handleSaturation} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.props.val.stroke1strokeLightening} onChange={this.props.handleLightening} />
        </div>
        <div className='setting-stroke1'>NEIGHBOR BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke2' type='number' min="1" max="60" value={this.props.val.stroke2strokeWidth} onChange={this.props.handleStroke}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke2' step="0.1" min="0" max="1" value={this.props.val.stroke2strokeOpacity} onChange={this.props.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.props.val.stroke2strokeOpacity} onChange={this.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.props.val.stroke2strokeHuelimit} onChange={this.props.handleHuelimit} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.props.val.stroke2strokeSaturation} onChange={this.props.handleSaturation} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.props.val.stroke2strokeLightening} onChange={this.props.handleLightening} />
        </div>
        <div className='option'>
        <div className='strokeDistance'>DISTANCE</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="100" max="1000000" value={this.props.val.stroke2strokeDistance} onChange={this.props.handleDistance} />
        </div>
        <div className='setting-stroke1'>POINT BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke3' type='number' min="1" max="60" value={this.props.val.stroke3strokeWidth} onChange={this.props.handleStroke}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke3' step="0.1" min="0" max="1" value={this.props.val.stroke3strokeOpacity} onChange={this.props.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.props.val.stroke3strokeOpacity} onChange={this.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.props.val.stroke3strokeHuelimit} onChange={this.props.handleHuelimit} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.props.val.stroke3strokeSaturation} onChange={this.props.handleSaturation} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.props.val.stroke3strokeLightening} onChange={this.props.handleLightening} />
        </div>
        <div className='setting-stroke1'>FUR</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke4' type='number' min="1" max="60" value={this.props.val.stroke4strokeWidth} onChange={this.props.handleStroke}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke4' step="0.1" min="0" max="1" value={this.props.val.stroke4strokeOpacity} onChange={this.handleOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="0" max="360" value={this.props.val.stroke4strokeHue} onChange={this.props.handleHue}/>
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="0" max="360" value={this.props.val.stroke4strokeHuelimit} onChange={this.props.handleHuelimit} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.props.val.stroke4strokeSaturation} onChange={this.props.handleSaturation} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.props.val.stroke4strokeLightening} onChange={this.props.handleLightening} />
        </div>
        <div className='option'>
        <div className='strokeDistance'>DISTANCE</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="100" max="1000000" value={this.props.val.stroke4strokeDistance} onChange={this.props.handleDistance} />
        </div>
        <div className='option'>
        <div className='strokeDistance'>POINT DISTANCE</div>
        <input id='opacity' type='number' data-name='stroke4' step="0.1" min="0.5" max="50.0" value={this.props.val.stroke4strokePointDistance} onChange={this.props.handlePointDistance} />
        </div>
      </div>
    )
  }
}


export default Setting;
