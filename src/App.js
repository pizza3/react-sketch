import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Sketch from './Sketch.js'
import Grid from './Grid.js'
import { SketchPicker } from 'react-color';
import {Route, Link} from "react-router-dom";
import firebase , {auth, provider, provider2} from './firebase.js';

import Raven from 'raven-js';

Raven.config('https://dd96fa0593f0410e98119edc5d677e8c@sentry.io/209342').install()
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      colorPass:'#292929',
      open:false,
      grid:true,
      normal:true,
      rainbow:false,
      undo:false,
      redo:false,
      delete:false,
      user:null,
      save:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.openState=this.openState.bind(this);
    this.openGrid=this.openGrid.bind(this);
    this.openRainbow=this.openRainbow.bind(this);
    this.undoState=this.undoState.bind(this);
    this.redoState=this.redoState.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
    this.logoutGoogle = this.logoutGoogle.bind(this);
    this.loginFacebook = this.loginFacebook.bind(this);
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.deleteCanvas = this.deleteCanvas.bind(this);
    this.saveCanvas = this.saveCanvas.bind(this);

  }
handleChange(color) {
  this.setState({colorPass: color.hex, normal: true, rainbow: false});
}

  openState(){
    this.setState({
      open:!this.state.open,
      normal:true,
      rainbow:false
    });
  }

  openGrid(){
    this.setState({
      grid:!this.state.grid
    })
  }

  openRainbow(){
    this.setState({
      normal:false,
      rainbow:true,
      open:false
    })
  }

  undoState(){
    this.setState({
      undo:true
    });
    setTimeout(()=>{
      this.setState({
        undo:false
      });
    },300)
  }

  redoState(){
    this.setState({
      redo:true
    });
    setTimeout(()=>{
      this.setState({
        redo:false
      });
    },300)
  }

  loginGoogle(){
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

logoutGoogle(){
  auth.signOut()
  .then(() => {
    this.setState({
      user: null
    });
  });
  }

  loginFacebook(){
    auth.signInWithPopup(provider2)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
      console.log(user);
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(error);
});
  }

logoutFacebook(){
  auth.signOut()
  .then(() => {
    this.setState({
      user: null
    });
  });
  }

  saveCanvas(){
    this.setState({
      save:!this.state.save
    });
    setTimeout(()=>{
      this.setState({
        save:false
      });
    },300)
  }

  deleteCanvas(){
    this.setState({
      delete:!this.state.delete
    });
    setTimeout(()=>{
      this.setState({
        delete:false
      });
    },300)
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
    });
  }


  render() {
    return (
      <div className="App">
        {this.state.grid?
          <Grid/>:null}
        {this.state.user==null?
          <div>
            <div className='head'>SCRAP</div>
            <div className='slogan'>Create Abstract Art With Ease.</div>
            <div className='google-signin' onClick={this.loginGoogle}></div>
            {/* <div className='facebook-signin' onClick={this.loginFacebook}></div> */}
          </div>:null}
          {this.state.user?
            <div>
           <Navbar colorvalue={this.state.colorPass} user={this.state.user} userOut={this.logoutGoogle} action={this.openState} rainbow={this.openRainbow} dispGrid={this.openGrid} undo={this.undoState} redo={this.redoState} onClick={this.props.rainbow} delete={this.deleteCanvas} />
           { this.state.open?
            <SketchPicker color='#292929' onChange={this.handleChange }  />:null }
         <Sketch colorvalue={this.state.colorPass} normalVal={this.state.normal} user={this.state.user} undoVal={this.state.undo} redoVal={this.state.redo} delete={this.state.delete} save={this.state.save}/>
       </div>:null}
      </div>
    );
  }
}

export default App;
