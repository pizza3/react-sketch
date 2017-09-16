import React,{Component} from 'react';
import firebase from './firebase.js';


class Archive extends Component{
  constructor(props){
    super(props);
    this.state={
      images:[],
      user:null
    }
    this.handleShow=this.handleShow.bind(this);
    this.handleCan=this.handleCan.bind(this);
    this.handleDel=this.handleDel.bind(this);
  }

  handleShow(i){
    document.getElementById('img-del'+i).classList.remove('img-del-hide')
  }

  handleCan(i){
    document.getElementById('img-del'+i).className+=' img-del-hide'
  }

  handleDel(i){
    document.getElementById('img'+i).className+=' hide-img';
    setTimeout(()=>{
      document.getElementById('img'+i).className+=' hide-img-height';
    },400);
    setTimeout(()=>{
      var id = this.state.images[i].id;
      var name = this.state.images[i].name;
      const itemRef = firebase.database().ref(`/${this.state.user}/${id}`);
      itemRef.remove();
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var desertRef = storageRef.child(`sketch/${this.state.user}/${name}`);
      desertRef.delete().then(function() {
        // File deleted successfully
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      });
    },800);

  }

  componentWillReceiveProps(newProps){
    this.setState({
      user:newProps.user,
      images:newProps.images
    })
  }
  
  render(){
    let index={
      'width': '35px',
      'position': 'absolute',
      'height': '35px',
      'zIndex': '100',
      'fontWeight':'100',
      'letterSpacing':'2px'
    }

    return(
      <div id='archive-box' className='archive-box'>
        <div className='archive-header'>
          ARCHIVE
        </div>
        {this.state.images.map((item,i)=>{
          return(
            <div id={'img'+i} className='img' key={item.id}>
            <div id={'img-del'+i}  className='img-del img-del-hide'>
              <div className='arc-filter'></div>
              <span className='img-del-txt'>ARE YOU SURE</span>
              <button className='img-del-yes' onClick={this.handleDel.bind(null,i)}>Yes</button>
              <button className='img-del-cancle' onClick={this.handleCan.bind(null,i)}>Cancle</button>
            </div>
            <img className='arc-img' src={item.url}/>
            <div className='edit-arc' onClick={this.props.delete}>
              <span className="hint--right hint--rounded" aria-label="Coming Soon" style={index} ></span>
              <svg id='edit' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
            </svg>
            </div>
            <a href={item.url} id="downloader" download="image.png" >
            <div className='download-arc' >
              <span className="hint--right hint--rounded" aria-label="Download" style={index} ></span>
              <svg id='download' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="2" x2="12" y2="16"></line>
            </svg>
            </div>
          </a>
            <div  className='delete-arc' data-name={'img-del'+i} onClick={this.handleShow.bind(null,i)}>
              <span className="hint--right hint--rounded" aria-label="Delete" style={index} ></span>
              <svg id='trash' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17">
              </line>
            </svg>
            </div>
          </div>
          )
        })}
      </div>
    )
  }
}


export default Archive;
