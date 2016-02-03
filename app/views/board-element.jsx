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
      let b = this.state.board;
      if (!b.ball.moving) {
        switch (direction) {
          case 0:
            b.ball.moveTo(b.ball.x - 1, b.ball.y);
            break;
          case 1:
            b.ball.moveTo(b.ball.x, b.ball.y - 1);
            break;
          case 2:
            b.ball.moveTo(b.ball.x + 1, b.ball.y);
            break;
          case 3:
            b.ball.moveTo(b.ball.x, b.ball.y + 1);
            break;
        }
        this.setState({board: b});
        this.timer = setTimeout(function () {
          this.timer = null;
          this.state.board.ball.moved();
          let t = this.state.board.getTile(this.state.board.ball.x, this.state.board.ball.y);
          console.log(t.hit());
          this.setState({board: this.state.board});
        }.bind(this), 1000);
      }
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
