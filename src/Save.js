import React, {Component} from 'react';

class Save extends Component {
  constructor() {
    super();
    this.state={
      textInput:''
    }
    this.handleChange=this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){

  }

  handleChange(e){
    this.setState({
      textInput:e.target.value
    })
  }

  render(){
    return(
      <div id='save-modal' className='save-modal disp'>
        <div className='save-name'>SKETCH TITLE:</div>
        <input id='save-modal-name' type='text' onChange={this.props.handleChange} />
        <button className='save-button' onClick={this.props.saveCanvas}>SAVE</button>
        <progress id='progress' value="0" max="100"></progress>
      </div>
    )
  }
}

export default Save;
