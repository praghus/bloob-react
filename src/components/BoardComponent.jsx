'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactInterval from 'react-interval';
import Hammer from 'react-hammerjs';
import Board from './../models/Board';
import TileComponent from './TileComponent';
import BallComponent from './BallComponent';

export default class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.dirs  = { 0: 'left', 1: 'up', 2: 'right', 3: 'down'};
    this.state = { board: new Board };
  }

  restartGame() {
    const { board } = this.state;
    this.setState({ board: board.restart() });
  }

  handleKeyDown(event) {
    event.preventDefault();
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      this.move(this.dirs[direction]);
    }
  }

  handlePan(event){
    event.preventDefault();
    if(event && event.additionalEvent){
      this.move(event.additionalEvent);
    }
  }

  move(direction){
    const { board } = this.state;
    const { ball } = this.state.board;
    console.log(direction);
    switch (direction) {
      case 'panleft'  : case 'left' : ball.moveTo(ball.x - ball.steps, ball.y); break;
      case 'panup'    : case 'up'   : ball.moveTo(ball.x, ball.y - ball.steps); break;
      case 'panright' : case 'right': ball.moveTo(ball.x + ball.steps, ball.y); break;
      case 'pandown'  : case 'down' : ball.moveTo(ball.x, ball.y + ball.steps); break;
    }
    if(ball.z === 1) {
      this.setState({board: board});
    }
  }

  tick(){
    const { board } = this.state;
    const { ball } = board;
    ball.moved();
    if(ball.z === -1){
      const t = board.getTile(ball.x, ball.y);
      if (t.value > 0) {
        switch (t.value){
          case 7:  ball.moveTo(ball.x, ball.y - 2); break;
          case 8:  ball.moveTo(ball.x - 2, ball.y); break;
          case 9:  ball.moveTo(ball.x, ball.y + 2); break;
          case 10: ball.moveTo(ball.x + 2, ball.y); break;
          case 11: ball.steps = 2; break;
          case 12: ball.moveTo(ball.x + 1, ball.y -1); break;
          case 13: ball.moveTo(ball.x + 1, ball.y +1); break;
          case 14: ball.moveTo(ball.x - 1, ball.y +1); break;
          case 15: ball.moveTo(ball.x - 1, ball.y -1); break;
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

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), false);
  }

  render() {
    const { board } = this.state;
    const tiles = board.tiles.filter(
      (tile) => tile.value != 0
    ).map(
      (tile) => <TileComponent key={tile.id} tile={tile} />
    );
    return (
      <Hammer onPanEnd={this.handlePan.bind(this)} tabIndex='1'>
        <div className='board'>
          {tiles}
          <BallComponent key='ball' ball={board.ball} />
          <ReactInterval timeout={500} enabled={true} callback={() => this.tick()} />
        </div>
      </Hammer>
    );
  }
}
