import React,{Component} from 'react';
import firebase , {auth, provider, provider2} from './firebase.js';


class Archive extends Component{
  constructor(){
    super();
    this.state={
      images:[],
      user:null
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      user:newProps.user
    });
  }

  componentDidMount(){
    var storageRef = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

    // Create a reference to the file we want to download
    let user =this.state.user.uid
    var starsRef = storageRef.child('sketch/'+user+'/'+'image');

    // Get the download URL
    starsRef.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
    }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;



        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;

      }
    });
  }

  render(){
    return(
      <div id='archive-box' className='archive-box'>
        <div className='archive-header'>
          ARCHIVE
        </div>
      </div>
    )
  }
}


export default Archive;
