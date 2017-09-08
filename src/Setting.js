import React, {Component} from 'react';

class Setting extends Component{
  constructor(props){
    super(props);
    this.state={
      stroke1strokeWidth:1,
      stroke1strokeWidth:1,
      stroke1strokeOpacity:1,
      stroke1strokeHue:1,
      stroke2strokeWidth:1,
      stroke2strokeWidth:1,
      stroke2strokeOpacity:1,
      stroke2strokeHue:1,
      stroke3strokeWidth:1,
      stroke3strokeWidth:1,
      stroke3strokeOpacity:1,
      stroke3strokeHue:1,
      stroke4strokeWidth:1,
      stroke4strokeWidth:1,
      stroke4strokeOpacity:1,
      stroke4strokeHue:1,
    }
    this.handleStrokeWidth = this.handleStrokeWidth.bind(this);
  }

  handleStrokeWidth(e){
    let stroke=e.target.getAttribute('data-name');
    this.setState({
      [stroke+'strokeWidth']:e.target.value
    });
    this.props.onSelectStroke()
  }



  render(){
    return(
      <div id='setting-box' className='setting-box'>
        <div className='setting-header'>SETTING</div>
        <div className='setting-stroke1'>NORMAL</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke1' type='number' min="1" max="60" value={this.state.stroke1strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke1' step="0.1" min="0" max="1" value={this.state.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="360" value={this.state.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="360" value={this.state.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.state.stroke1strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke1' step="1" min="1" max="100" value={this.state.stroke1strokeOpacity} />
        </div>
        <div className='setting-stroke1'>NEIGHBOR BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke2' type='number' min="1" max="60" value={this.state.stroke2strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke2' step="0.1" min="0" max="1" value={this.state.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.state.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="360" value={this.state.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.state.stroke2strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke2' step="1" min="1" max="100" value={this.state.stroke2strokeOpacity} />
        </div>
        <div className='setting-stroke1'>POINT BASED</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke3' type='number' min="1" max="60" value={this.state.stroke3strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke3' step="0.1" min="0" max="1" value={this.state.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.state.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="360" value={this.state.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.state.stroke3strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke3' step="1" min="1" max="100" value={this.state.stroke3strokeOpacity} />
        </div>
        <div className='setting-stroke1'>FUR</div>
        <div className='option'>
        <div className='strokeWidth'>STROKE WIDTH</div>
        <input id='number' data-name='stroke4' type='number' min="1" max="60" value={this.state.stroke4strokeWidth} onChange={this.handleStrokeWidth}  />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE OPACITY</div>
        <input id='opacity' type='number' data-name='stroke4' step="0.1" min="0" max="1" value={this.state.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE HUE</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="360" value={this.state.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>HUE LIMIT</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="360" value={this.state.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE SATURATION</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.state.stroke4strokeOpacity} />
        </div>
        <div className='option'>
        <div className='strokeOpacity'>STROKE LIGHTENING</div>
        <input id='opacity' type='number' data-name='stroke4' step="1" min="1" max="100" value={this.state.stroke4strokeOpacity} />
        </div>
      </div>
    )
  }
}


export default Setting;
