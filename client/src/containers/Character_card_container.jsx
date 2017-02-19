import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card.jsx'
import CharacterInfo from '../models/characterApi.js'

class CharacterCardContainer extends React.Component {

  constructor(props){
    super(props);
    this.characterInfo = new CharacterInfo();
    const characterImages = this.getImages();
    console.log(this.getImages())
    this.state = {characterImages: characterImages}
  }

  getImages(){
    const characters = this.characterInfo.characters;
    const characterImages = [] ;
    for (var key in characters){
      // console.log(characters[key].image)
        characterImages.push(characters[key].image);
    }
    return characterImages;
  }

  render(){


    
    return (
      <div className = "character-container">
      <Card images= {this.state.characterImages[0]}/>
      <Card images= {this.state.characterImages[1]}/>
      <Card images= {this.state.characterImages[2]}/>
      <Card images= {this.state.characterImages[3]}/>
      <Card images= {this.state.characterImages[4]}/>
      <Card images= {this.state.characterImages[5]}/>
      <Card images= {this.state.characterImages[6]}/>
      <Card images= {this.state.characterImages[7]}/>
      <Card images= {this.state.characterImages[8]}/>
      <Card images= {this.state.characterImages[9]}/>
      <Card images= {this.state.characterImages[10]}/>
      <Card images= {this.state.characterImages[11]}/>
      <Card images= {this.state.characterImages[12]}/>
      <Card images= {this.state.characterImages[13]}/>
      <Card images= {this.state.characterImages[14]}/>
      <Card images= {this.state.characterImages[15]}/>
    </div>
    )
  }
}


export default CharacterCardContainer;