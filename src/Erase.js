import React ,{Component} from 'react';

class Erase extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div className='erase-modal'>
        <div className='erase-header'>
          Are you sure you want to delete the whole sketch.
        </div>
        
      </div>
    )
  }
}

export default Erase;
