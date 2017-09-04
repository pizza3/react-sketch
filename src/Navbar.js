import React ,{Component} from 'react';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={
      color:'#292929',
      user:null
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      color:newProps.colorvalue,
      user:newProps.user.photoURL,
      stroke:newProps.strokevalue
    });
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
        <div className='rainbow' onClick={this.props.rainbow}><span id='rainbow-span' className='rainbow-span'></span></div>

        <div className='pick' onClick={this.props.action}  style={back}><span id='pick-span' className='pick-span active'></span></div>
        <div className='stroke-Box' onClick={this.props.chngStroke}>
          {this.state.stroke}
          <svg id='dropdown' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        </div>
        <div className='grid-btn' onClick={this.props.dispGrid}>
          <svg id='grid-btn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        </div>
        <div className='undo' onClick={this.props.undo}>
          <svg id='undo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        </div>
        <div className='redo' onClick={this.props.redo}>
          <svg id='redo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        </div>
        <div className='delete' onClick={this.props.delete}>
          <svg id='trash' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17">
          </line>
        </svg>
        </div>
        <div className='save' onClick={this.props.save}>
          <svg id='save' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="16 16 12 12 8 16"></polyline>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </svg>
        </div>
        <div className='archive' onClick={this.props.openArc}>
          <svg id='archive' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <polyline points="22 13 16 13 14 16 10 16 8 13 2 13"></polyline>
          <path d="M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z"></path>
        </svg>
        </div>
        <a href='#' id="downloader" onClick={this.props.download} download="image.png" >
        <div className='download' >
          <svg id='download' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path>
          <polyline points="8 12 12 16 16 12"></polyline>
          <line x1="12" y1="2" x2="12" y2="16"></line>
        </svg>
        </div>
      </a>
        <div className='profile'>
          <img src={this.state.user} />
        </div>
        <div className='logout' onClick={this.props.userOut}>
          <svg id='logout' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path>
          <polyline points="17 16 21 12 17 8"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        </div>
        <div className='setting' id='setting' onClick={this.props.openSet}>
          <svg id='setting-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
          </path>
        </svg>
        </div>
      </div>
    )
  }
}

export default Navbar;
