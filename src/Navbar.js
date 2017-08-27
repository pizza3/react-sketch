import React ,{Component} from 'react';
import styled from 'styled-components';

class Navbar extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    const Navigation = styled.div`
      position: absolute;
      width: 100%;
      height: 50px;
      background: #fff;
      border: 1px solid #000;
      border-left: none;
      border-top: none;
      border-right: none;
      border-width: 1px;
      z-index: 30;
    `
    const Logo = styled.div`
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      font-weight:900;
      margin-left: 10px;
      position: relative;
      float: left;
    `

    const Rainbow = styled.div`
      position: relative;
      float: left;
      width: 35px;
      height: 35px;
      border: 1px solid #000;
      border-radius: 50%;
      margin-left: 30px;
      margin-top: 7px;
      background-image: url('https://i.pinimg.com/236x/73/52/ce/7352ce2eaaaa18f142a08ea57261cb34--visual-identity-unicorn.jpg');
      background-position: center;
      background-size: cover;
      cursor: pointer;
    `

    const Picker = styled.input `
      position: relative;
      float: left;
      width: 35px;
      height: 35px;
      border: 1px solid #000;
      border-radius: 50%;
      margin-left: 10px;
      margin-top: 7px;
      -webkit-appearance: none;
      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      &::-webkit-color-swatch {
        border: none;
      }
      &:focus {
        outline:none;
      }
      cursor: pointer;
    `
    return(
      <Navigation id='nav'>
        <Logo id='logo'>
          SCRAP
        </Logo>
        <Rainbow>
        </Rainbow>
        <Picker type='color'>
        </Picker>
      </Navigation>
    )
  }
}

export default Navbar;
