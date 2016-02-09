'use strict';

import React from 'react';
import { render } from 'react-dom';
import BoardComponent from './components/BoardComponent';

require('./styles/main.scss');
require('file?name=../[name].[ext]!../index.html');
require('file?name=../assets/[name].[ext]!./assets/sprites.png');
require('file?name=../assets/[name].[ext]!./assets/clear-sans.ttf');
render(<BoardComponent />, document.getElementById('boardDiv'));
