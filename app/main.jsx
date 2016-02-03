'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import BoardElement from './views/board-element.jsx';

require("./styles/style.scss");

ReactDOM.render(<BoardElement />, document.getElementById('boardDiv'));
