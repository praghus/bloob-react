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
    this.state = {board: new Board};
  }

  restartGame() {
    const { board } = this.state;
    this.setState({board: board.restart()});
  }

  handleKeyDown (event) {
    event.preventDefault();
    const { board } = this.state;
    const { ball } = board;
    if (event.keyCode >= 37 && event.keyCode <= 40 && !ball.isMoving()) {
      const direction = event.keyCode - 37;
      switch (direction) {
        case 0: ball.moveTo(ball.x - ball.steps, ball.y); break;
        case 1: ball.moveTo(ball.x, ball.y - ball.steps); break;
        case 2: ball.moveTo(ball.x + ball.steps, ball.y); break;
        case 3: ball.moveTo(ball.x, ball.y + ball.steps); break;
      }
      if(ball.z === 1) {
        this.setState({board: board});
      }
    }
  }

  tick (){
    const { board } = this.state;
    const { ball } = board;
    if(ball.isMoving()) {
      ball.moved();
    }
    if(ball.z === -1){
      const t = board.getTile(ball.x, ball.y);
      if (t.value>0) {
        switch (t.value){
          case 7:  ball.moveTo(ball.x, ball.y - 2); break;
          case 8:  ball.moveTo(ball.x - 2, ball.y); break;
          case 9:  ball.moveTo(ball.x, ball.y + 2); break;
          case 10: ball.moveTo(ball.x + 2, ball.y); break;
          case 11: ball.steps = 2; break;
        }
        if(t.hit().value === 0){
          board.tilesCount --;
        }
        if (board.tilesCount === 0){
          board.won = true;
          board.nextLevel();
        }
      } else {
        this.restartGame();
      }
    }
    ball.z = ball.z === 1 ? -1 : 1;
    this.setState({board: board});
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  render() {
    const { board } = this.state;
    const tiles = board.tiles.filter(function (tile) {
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
