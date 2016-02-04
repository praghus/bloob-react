'use strict';

import React from 'react';
import { render } from 'react-dom';
import BoardElement from './views/board-element.jsx';

require("./style.scss");

render(<BoardElement />, document.getElementById('boardDiv'));
