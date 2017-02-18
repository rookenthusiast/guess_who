import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = function(){
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <IndexRoute component={About}/>
      </Route>
    </Router>,
    <h1> App Started </h1>,
    document.getElementById('app')
  );
}
