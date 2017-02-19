import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About.jsx';
import Main from './components/Main.jsx'
import CharacterCardContainer from './containers/Character_card_container.jsx'

window.onload = function(){
  ReactDOM.render(<div>
    <h1> App Started </h1>
    <CharacterCardContainer />
    <About />
    <Main />

    </div>,
    document.getElementById('app')
  );
}
