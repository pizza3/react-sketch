import React ,{Component} from 'react';
import styled from 'styled-components';

class Navbar extends Component{

  render(){
    const Navigation = styled.div`
      position: absolute;
      width: 100%;
      height: 50px;
      background: #000;
      z-index: 30;
    `
    return(
      <Navigation id='nav'/>
    )
  }
}

export default Navbar;
