import React, {Component} from 'react';

class Save extends Component {
  constructor() {
    super();
    this.state={
      textInput:''
    }
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange(e){
    this.setState({
      textInput:e.target.value
    })
  }

  render(){
    return(
      <div id='save-modal' className='save-modal disp'>
        <div id='save-header' className='save-header'>
        <div className='save-name'>SKETCH TITLE:</div>
        <input id='save-modal-name' type='text' onChange={this.props.handleChange} />
        <button className='save-button' onClick={this.props.saveCanvas}>SAVE</button>
        <button className='save-close' onClick={this.props.closeSave}>CANCLE</button>
      </div>
      <div id='progress-header' className='progress-header hide-header'>
        <div className='progress-name'>PROGRESS:</div>
      <div  className='progress'>
        <div id='bar' className='bar'></div>
      </div>
    </div>
        {/* <progress id='progress' value="0" max="100"></progress> */}
      </div>
    )
  }
}

export default Save;
