'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './../models/board.jsx';
import CellElement from './cell-element.jsx';
import TileElement from './tile-element.jsx';
import BallElement from './ball-element.jsx';

export default class BoardElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Board};
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
    this.state = {board: new Board};
  }

  handleKeyDown (event) {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      event.preventDefault();
      let direction = event.keyCode - 37;
      this.setState({board: this.state.board.move(direction)});
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  render() {
    var cells = this.state.board.cells.map(function (row, i) {
      return <div key={i}>{row.map(function (col, j) {
        return <CellElement key={j}/>;
      })}</div>;
    });
    var tiles = this.state.board.tiles.filter(function (tile) {
      return tile.value != 0;
    }).map(function (tile) {
      return <TileElement key={tile.id} tile={tile} />;
    });
    return (
      <div className='board' tabIndex='1'>
        {cells}
        {tiles}
        <BallElement key='ball' ball={this.state.board.ball} />
      </div>
    );
  }
}
