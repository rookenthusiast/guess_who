import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {

  constructor(props) {
    super(props); 
  }

  render(){
    return (
      <div>
      <img className="character-img"src={this.props.images} />
      </div>
      )
  }
}

export default Card;