import React ,{Component} from 'react';
import { SketchPicker } from 'react-color';


class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'#FFB000',
      displayColorPicker:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.dispPicker=this.dispPicker.bind(this);
    this.updateParent=this.updateParent.bind(this);
  }

  componentDidMount(){
    this.updateParent();
  }

  handleChange(color){
    this.setState({color:color.hex},
      this.updateParent()
    )
    // this.props.onColorChange(color.hex);


  }

  updateParent(){
    this.props.onColorChange(this.state.color)
  }

  dispPicker(){
    this.setState({
      displayColorPicker:!this.state.displayColorPicker
    })
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
        <div className='pick' onClick={this.dispPicker}  style={back}></div>
          { this.state.displayColorPicker?
          <SketchPicker onChange={ this.handleChange } color='#FFB000' />
          :null }
      </div>
    )
  }
}

export default Navbar;
