import React from 'react';
import ReactDOM from 'react-dom';
import BoardElement from './board-element.jsx';

var css = require("./styles/style.scss");

ReactDOM.render(<BoardElement />, document.getElementById('boardDiv'));
