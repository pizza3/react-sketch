import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Sketch from './Sketch.js';
import Grid from './Grid.js';
import Video from './Video.js';
import Setting from './Setting.js';
import Archive from './Archive.js';
import Erase from './Erase.js';
import Save from './Save.js';
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
      textInput:'',
      setting:false,
      archive:false,
      strokeName:['NORMAL', 'NEIGHBOR BASED', 'POINT BASED', 'FUR'],
      undo:false,
      redo:false,
      delete:false,
      user:null,
      id:null,
      save:false,
      showerasemodal:false,
      showsavemodal:false,
      images:[],
      stroke1strokeWidth:10,
      stroke1strokeOpacity:1,
      stroke1strokeHue:200,
      stroke1strokeSaturation:100,
      stroke1strokeLightening:50,
      stroke1strokeHuelimit:360,
      stroke2strokeWidth:1,
      stroke2strokeOpacity:0.2,
      stroke2strokeHue:1,
      stroke2strokeSaturation:100,
      stroke2strokeLightening:50,
      stroke2strokeHuelimit:360,
      stroke2strokeDistance:1000,
      stroke3strokeWidth:1,
      stroke3strokeOpacity:1,
      stroke3strokeHue:1,
      stroke3strokeSaturation:100,
      stroke3strokeLightening:50,
      stroke3strokeHuelimit:360,
      stroke3strokeNearpoint:5,
      stroke4strokeWidth:1,
      stroke4strokeOpacity:1,
      stroke4strokeHue:1,
      stroke4strokeSaturation:100,
      stroke4strokeLightening:50,
      stroke4strokeHuelimit:360,
      stroke4strokeDistance:1000,
      stroke4strokePointDistance:0.5,
    }
    this.handleChange = this.handleChange.bind(this);
    this.namehandleChange = this.namehandleChange.bind(this);
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
    this.openArchive = this.openArchive.bind(this);
    this.showerasemodal = this.showerasemodal.bind(this);
    this.showsavemodal = this.showsavemodal.bind(this);
    this.handleStrokeWidth = this.handleStrokeWidth.bind(this);
    this.handleStrokeOpacity = this.handleStrokeOpacity.bind(this);
    this.handleStrokeSaturation = this.handleStrokeSaturation.bind(this);
    this.handleStrokeLightening = this.handleStrokeLightening.bind(this);
    this.handleStrokeHuelimit = this.handleStrokeHuelimit.bind(this);
    this.handleStrokeDistance = this.handleStrokeDistance.bind(this);
    this.handleStrokePointDistance = this.handleStrokePointDistance.bind(this);
    this.handleStrokeNearpoint=this.handleStrokeNearpoint.bind(this);
  }


handleChange(color) {
  this.setState({colorPass: color.rgb, normal: true, rainbow: false});
}

handleStroke(event){
  this.setState({
    strokeNo:event.target.getAttribute("data-no")
  })
  console.log(event.target.getAttribute('data-no'));
}



handleStrokeWidth(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeWidth']:event.target.value
  });
}

handleStrokeOpacity(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeOpacity']:event.target.value
  });
}

handleStrokeHue(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeHue']:event.target.value
  });
}

handleStrokeSaturation(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeSaturation']:event.target.value
  });
}

handleStrokeLightening(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeLightening']:event.target.value
  });
}

handleStrokeHuelimit(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeHuelimit']:event.target.value
  });
}

handleStrokeDistance(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeDistance']:event.target.value
  });
}

handleStrokePointDistance(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokePointDistance']:event.target.value
  });
}

handleStrokeNearpoint(event){
  let stroke=event.target.getAttribute('data-name');
  this.setState({
    [stroke+'strokeNearpoint']:event.target.value
  });
}


  openState(){
    this.setState({
      open:!this.state.open,
      normal:true,
      stroke:false,
      rainbow:false
    });
    document.getElementById('pick-span').className+=' active';
    document.getElementById('rainbow-span').classList.remove('active')
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
    },
    function () {
      if(this.state.setting){
        if(this.state.archive){
          document.getElementById('archive-box').classList.remove('openArchive');
          setTimeout(()=>{
            this.setState({
              archive:false
            });
            document.getElementById('setting-box').className+= ' openSetting';
          },600)
        }
        else {
          document.getElementById('setting-box').className+= ' openSetting';
        }
      }
      else {
        document.getElementById('setting-box').classList.remove('openSetting');
      }
    }
  );
  }

  openArchive(){
    this.setState({
      archive:!this.state.archive
    },
    function () {
      if(this.state.archive){
        if (this.state.setting) {
          document.getElementById('setting-box').classList.remove('openSetting');
            this.setState({
              setting:false
            });
        setTimeout(()=>{
          document.getElementById('archive-box').className+= ' openArchive';
        },600)
      }
        else {
          document.getElementById('archive-box').className+= ' openArchive';
        }
      }
      else {
        document.getElementById('archive-box').classList.remove('openArchive');
      }
    }
  );

  }

  openRainbow(){
    this.setState({
      normal:false,
      rainbow:true,
      open:false
    })
    document.getElementById('rainbow-span').className+=' active';
    document.getElementById('pick-span').classList.remove('active')
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
    },100)
  }

  redoState(){
    this.setState({
      redo:true
    });
    setTimeout(()=>{
      this.setState({
        redo:false
      });
    },100)
  }

  loginGoogle(){
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user:user,
        id:user.uid
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
    document.getElementById('save-header').className+=' hide-header';
    setTimeout(()=>{
      document.getElementById('progress-header').classList.remove('hide-header');
    },500);
    setTimeout(()=>{
    let user  = this.state.user.uid;
      // var url=window.URL.createObjectURL(blob, {autoRevoke: true});
      let file = document.getElementById('canvas').toDataURL("image/png");
      let inp = this.state.textInput
      let storageRef= firebase.storage().ref('sketch/'+user+'/'+inp)
      let task = storageRef.putString(file,'data_url');
      task.on('state_changed',
      function progress(snapshot) {
        let per = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        document.getElementById('bar').style.width=per+"%";
      },
      function error(err) {
      },
      function complete() {
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
          const itemsRef = firebase.database().ref(user);
          const item = {
            name:inp,
            url: url
          }
          itemsRef.push(item);
        });
        setTimeout(()=>{
        document.getElementById('save-modal').className+=' disp';
        document.getElementById('filter').className+=' hide-filter';
        setTimeout(()=>{
          document.getElementById('bar').style.width=0+"%";
          document.getElementById("save-modal-name").value= ' ';
          document.getElementById('progress-header').className+=' hide-header';
          document.getElementById('save-header').classList.remove('hide-header');

        },200)
      },500);
      });

    },1000);

    }

  deleteCanvas(){
    this.setState({
      delete:!this.state.delete,
      showerasemodal:false
    },
    function () {
      if(this.state.showerasemodal){
        document.getElementById('erase-modal').classList.remove('disp');
        document.getElementById('filter').classList.remove('hide-filter')
      }
      else {
        document.getElementById('erase-modal').className+=' disp';
        document.getElementById('filter').className+=' hide-filter';
      }
    }
  );
    setTimeout(()=>{
      this.setState({
        delete:false
      });
    },300)
  }

  showerasemodal(){
    this.setState({
      showerasemodal:!this.state.showerasemodal
    } ,
    function () {
      if(this.state.showerasemodal){
        document.getElementById('erase-modal').classList.remove('disp');
        document.getElementById('filter').classList.remove('hide-filter')
      }
      else {
        document.getElementById('erase-modal').className+=' disp';
        document.getElementById('filter').className+=' hide-filter';
      }
    })
}


  showsavemodal(){
    this.setState({
      showsavemodal:!this.state.showsavemodal
    } ,
    function () {
      if(this.state.showsavemodal){
        document.getElementById('save-modal').classList.remove('disp');
        document.getElementById('filter').classList.remove('hide-filter')
      }
      else {
        document.getElementById('save-modal').className+=' disp';
        document.getElementById('filter').className+=' hide-filter';
      }
    }
  )
  }

  namehandleChange(e){
    this.setState({
      textInput:e.target.value
    })
  }


  componentWillMount(){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user:user,
          id:user.uid
        },()=>{
          const itemsRef = firebase.database().ref(this.state.id);
          itemsRef.on('value', (snapshot)=>{
            let items = snapshot.val();
            let images=[];
            for(let item in items){
              images.push({
                id:item,
                name:items[item].name,
                url:items[item].url
              })
            }
              this.setState({
              images:images
            })
          })
        });
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
            <div className='head'>SCRAP<span className='beta'>Beta</span></div>
            <div className='slogan'>Create Abstract Art With Ease.</div>
            <Video/>
            <div className='vid-cover'></div>
            <div className='google-signin' onClick={this.loginGoogle}></div>
             {/* <div className='facebook-signin' onClick={this.loginFacebook}></div>  */}
             {/* <div className='grid-img'></div>
            <Visual1/> */}
          </div>:null}
          {this.state.user?
            <div>
              <Setting val={this.state}  handleStroke={this.handleStrokeWidth.bind(this)} handleOpacity={this.handleStrokeOpacity.bind(this)}
                handleHue={this.handleStrokeHue.bind(this)} handleSaturation={this.handleStrokeSaturation.bind(this)} handleLightening={this.handleStrokeLightening.bind(this)}
                handleHuelimit={this.handleStrokeHuelimit.bind(this)} handleDistance={this.handleStrokeDistance.bind(this)} handlePointDistance={this.handleStrokePointDistance.bind(this)}
                handleNearpoint={this.handleStrokeNearpoint.bind(this)}/>
              <Save handleChange={this.namehandleChange.bind(this)} saveCanvas={this.saveCanvas} closeSave={this.showsavemodal}/>
              <Erase delete={this.deleteCanvas} nodelete={this.showerasemodal}/>
              <Archive user={this.state.id} images={this.state.images}/>
           <Navbar colorvalue={this.state.colorPass} strokevalue={this.state.strokeName[this.state.strokeNo]} user={this.state.user} userOut={this.logoutGoogle} action={this.openState} save={this.showsavemodal} download={this.downloadImage}
             openSet={this.openSetting} openArc={this.openArchive} rainbow={this.openRainbow} chngStroke={this.openStroke} dispGrid={this.openGrid} undo={this.undoState} redo={this.redoState} onClick={this.props.rainbow} delete={this.showerasemodal} />
           { this.state.open?
            <SketchPicker color='#292929' onChange={this.handleChange }  />:
            null }
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
            </div>:
            <div className='strokePicker strokePicker-hide'></div>
          }
          <div id='filter' className='filter hide-filter'></div>
         <Sketch val={this.state} onClick={this.openRainbow} colorvalue={this.state.colorPass} strokevalue={this.state.strokeNo} normalVal={this.state.normal} user={this.state.user} undoVal={this.state.undo} redoVal={this.state.redo} delete={this.state.delete} save={this.state.save}/>
       </div>:null}
      </div>
    );
  }
}

export default App;
