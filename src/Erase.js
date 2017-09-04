import React ,{Component} from 'react';

class Erase extends Component {
  constructor(props) {
    super(props);
    this.state={
      color:'#ff5c5c'
    }
  }

  render(){
    let col={
      'color':this.state.color
    }
    return(
      <div className='erase-modal'>
        <div className='erase-header'>
          ARE YOU SURE, YOU WANT TO <span style={col}>DELETE</span> THE WHOLE SKETCH.
        </div>
        <button className='erase-yes' onClick={this.props.delete}>YES</button>
        <button className='erase-no' onClick={this.props.nodelete}>NO</button>
      </div>
    )
  }
}

export default Erase;
