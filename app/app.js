import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/main.jsx";
import NueralNetwork from './components/neural_network.jsx';

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/neural_network" component={NueralNetwork}/>
    </Router>
    , document.getElementById("content")
);