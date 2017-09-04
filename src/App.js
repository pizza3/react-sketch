import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Sketch from './Sketch.js';
import Grid from './Grid.js';
import Setting from './Setting.js';
import Archive from './Archive.js';
import Erase from './Erase.js';
import { SketchPicker } from 'react-color';
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
      stroke:false,
      strokeNo:"0",
      setting:false,
      archive:false,
      strokeName:['Stroke1', 'Stroke2', 'Stroke3', 'Stroke4'],
      undo:false,
      redo:false,
      delete:false,
      user:null,
      save:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleStroke = this.handleStroke.bind(this);
    this.openState = this.openState.bind(this);
    this.openGrid = this.openGrid.bind(this);
    this.openRainbow = this.openRainbow.bind(this);
    this.openStroke = this.openStroke.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.openSetting = this.openSetting.bind(this);
    this.undoState = this.undoState.bind(this);
    this.redoState = this.redoState.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
    this.logoutGoogle = this.logoutGoogle.bind(this);
    this.loginFacebook = this.loginFacebook.bind(this);
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.deleteCanvas = this.deleteCanvas.bind(this);
    this.saveCanvas = this.saveCanvas.bind(this);
    this.openArchive=this.openArchive.bind(this);

  }
handleChange(color) {
  this.setState({colorPass: color.hex, normal: true, rainbow: false});
}

handleStroke(event){
  this.setState({
    strokeNo:event.target.getAttribute("data-no")
  })
  console.log(event.target.getAttribute('data-no'));
}

  openState(){
    this.setState({
      open:!this.state.open,
      normal:true,
      stroke:false,
      rainbow:false
    });
  }

  openGrid(){
    this.setState({
      grid:!this.state.grid,
    })
  }

  downloadImage(){
    document.getElementById("downloader").download = "sketch.png";
    document.getElementById("downloader").href = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');

  }

  openSetting(){
    this.setState({
      setting:!this.state.setting
    });
    if(this.state.setting){
      document.getElementById('setting-box').className+= ' openSetting';
    }
    else {
      document.getElementById('setting-box').classList.remove('openSetting');
    }
  }

  openArchive(){
    this.setState({
      archive:!this.state.archive
    });
    if(this.state.archive){
      document.getElementById('archive-box').className+= ' openArchive';
    }
    else {
      document.getElementById('archive-box').classList.remove('openArchive');
    }
  }

  openRainbow(){
    this.setState({
      normal:false,
      rainbow:true,
      open:false
    })
  }

  openStroke(){
    this.setState({
      stroke:!this.state.stroke,
      open:false
    });
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
    let user  = this.state.user.uid;
      // var url=window.URL.createObjectURL(blob, {autoRevoke: true});
      let file = document.getElementById('canvas').toDataURL("image/png");
      let storageRef= firebase.storage().ref('sketch/'+user+'/'+'image')
      let task = storageRef.putString(file);
      task.on('state_changed',
      function progress(snapshot) {
      },
      function error(err) {
      },
      function complete() {

      })
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
          <Setting/>
          <Erase/>
          {/* <Archive user={this.state.user}/> */}
        {this.state.user==null?
          <div>
            <div className='head'>SCRAP</div>
            <div className='slogan'>Create Abstract Art With Ease.</div>
            <div className='google-signin' onClick={this.loginGoogle}></div>
            {/* <div className='facebook-signin' onClick={this.loginFacebook}></div> */}
          </div>:null}
          {this.state.user?
            <div>
           <Navbar colorvalue={this.state.colorPass} strokevalue={this.state.strokeName[this.state.strokeNo]} user={this.state.user} userOut={this.logoutGoogle} action={this.openState} save={this.saveCanvas} download={this.downloadImage}
             openSet={this.openSetting} openArc={this.openArchive} rainbow={this.openRainbow} chngStroke={this.openStroke} dispGrid={this.openGrid} undo={this.undoState} redo={this.redoState} onClick={this.props.rainbow} delete={this.deleteCanvas} />
           { this.state.open?
            <SketchPicker color='#292929' onChange={this.handleChange }  />:null }
            {this.state.stroke?
            <div className='strokePicker'>
              <ul>
                <li data-no='0'  onClick={this.handleStroke}>
                  NORMAL
                </li>
                <li data-no='1'  onClick={this.handleStroke}>
                  NEIGHBOR BASED
                </li>
                <li data-no='2'  onClick={this.handleStroke}>
                  POINT BASED
                </li>
                <li data-no='3'  onClick={this.handleStroke}>
                  FUR
                </li>
              </ul>
            </div>:null}
         <Sketch colorvalue={this.state.colorPass} strokevalue={this.state.strokeNo} normalVal={this.state.normal} user={this.state.user} undoVal={this.state.undo} redoVal={this.state.redo} delete={this.state.delete} save={this.state.save}/>
       </div>:null}
      </div>
    );
  }
}

export default App;
