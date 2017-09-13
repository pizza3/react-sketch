import React,{Component} from 'react';
// import firebase from './firebase.js';


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
      user:newProps.user,
      images:newProps.images
    })
  }

  componentWillMount(){
    // console.log('mount');
    // const itemsRef = firebase.database().ref(`${this.props.user}`);
    // itemsRef.on('value', (snapshot)=>{
    //   let items = snapshot.val();
    //   let images=[];
    //   for(let item in items){
    //     console.log(items[item].url)
    //     images.push({
    //       id:items,
    //       name:items[item].name,
    //       url:items[item].url
    //     })
    //   }
    //   this.setState({
    //     images:images
    //   })
    // })
  }

  render(){
    return(
      <div id='archive-box' className='archive-box'>
        <div className='archive-header'>
          ARCHIVE
        </div>
        {this.state.images.map((item)=>{
          return(
            <li className='img' key={item.id}>
            <img className='arc-img' src={item.url}/>
          </li>
          )
        })}
      </div>
    )
  }
}


export default Archive;
