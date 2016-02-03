'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';
import Board from './../models/board.jsx';
import TileElement from './tile-element.jsx';
import BallElement from './ball-element.jsx';

export default class BoardElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board
    };
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
      const {board} = this.state;
      const direction = event.keyCode - 37;
      switch (direction) {
        case 0:
          board.ball.moveTo(board.ball.x - 1, board.ball.y);
          break;
        case 1:
          board.ball.moveTo(board.ball.x, board.ball.y - 1);
          break;
        case 2:
          board.ball.moveTo(board.ball.x + 1, board.ball.y);
          break;
        case 3:
          board.ball.moveTo(board.ball.x, board.ball.y + 1);
          break;
      }
      this.setState({board: board});

    }
  }

  tick (){
    const {board} = this.state;
    if(board.ball.isMoving()) {
      board.ball.moved();
    }

    if(board.ball.z === -1){
       const t = board.getTile(board.ball.x, board.ball.y);
       t.hit();
    }
    board.ball.z = board.ball.z === 1 ? -1 : 1;
    this.setState({board: board});
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  render() {
    const {board} = this.state;
    var tiles = board.tiles.filter(function (tile) {
      return tile.value != 0;
    }).map(function (tile) {
      return <TileElement key={tile.id} tile={tile} />;
    });
    return (
      <div className='board' tabIndex='1'>
        {tiles}
        <BallElement key='ball' ball={board.ball} />
        <ReactInterval timeout={500} enabled={true} callback={() => this.tick()} />
      </div>
    );
  }
}
