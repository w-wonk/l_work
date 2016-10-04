import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/main.jsx";
import NueralNetwork from './components/neural_network.jsx';

import {Router, Route, Link, browserHistory, Redirect} from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Redirect from = "/" to = "/vk"/>
    <Route path="/vk" component={Main}/>
    <Route path="/neural_network" component={NueralNetwork}/>
    <Route path="*" component={Main}/>
  </Router>
  , document.getElementById("content")
);