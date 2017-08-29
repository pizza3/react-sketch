import React ,{Component} from 'react';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'#FFB000',
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      color:newProps.colorvalue
    });
  }

  render(){
    let back={
      'backgroundColor':this.state.color
    }

    return(
      <div className='navigation'id='nav'>
        <div className='logo' id='logo'>
          SCRAP
        </div>
        <div className='rainbow'></div>
        <div className='pick' onClick={this.props.action}  style={back}></div>
        <div className='grid-btn' onClick={this.props.dispGrid}></div>
      </div>
    )
  }
}

export default Navbar;
