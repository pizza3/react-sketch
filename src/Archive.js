import React,{Component} from 'react';
import firebase from './firebase.js';


class Archive extends Component{
  constructor(props){
    super(props);
    this.state={
      images:[],
      user:null
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      user:newProps.user.uid
    });
  }

  componentWillMount(){
    console.log('mount');
    let user  = this.state.user;
    const itemsRef = firebase.database().ref(`${user}`);
    itemsRef.on('value', (snapshot)=>{
      let items = snapshot.val();
      let images=[];
      for(let item in items){
        console.log(items[item].url)
        images.push({
          id:items,
          name:items[item].name,
          url:items[item].url
        })
      }
      this.setState({
        images:images
      })
    })
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
