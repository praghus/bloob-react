'use strict';

import Tile from './tile.jsx';
import Ball from './ball.jsx';
import Levels from './levels.jsx';

export default class Board {
  constructor() {
    this.cols = 0;
    this.rows = 0;
    this.level = 0;
    this.tiles = [];
    this.cells = [];
    this.ball = {};
    this.won = false;
    this.levels = Levels;
    this.loadLevelData();
  }

  loadLevelData() {
    let p = this.levels[this.level].player;
    let map = this.levels[this.level].map;
    this.rows = map.length;
    this.ball = new Ball(p.x, p.y);
    for (let [y, row] of map.entries()) {
      this.cells.push([]);
      this.cols = row.length;
      for (let [x, col] of row.entries()) {
        this.cells[y].push(this.addTile(x, y, col));
      }
    }
  }

  getTile(x,y){
    return this.cells[y][x];
  }

  move (direction) {
    console.log(direction);
    switch (direction){
      case 0: this.ball.x-=1; break;
      case 1: this.ball.y-=1; break;
      case 2: this.ball.x+=1; break;
      case 3: this.ball.y+=1; break;
    }
    let t = this.getTile(this.ball.x, this.ball.y);
    console.log(t.hit());
    return this;
  }

  hasWon (){
    return false;
  }

  addTile(x, y, col) {
    var res = new Tile(x, y, col);
    Tile.apply(res, arguments);
    this.tiles.push(res);
    return res;
  }

  nextLevel() {
    this.level++;
    this.loadLevelData();
  }
}
