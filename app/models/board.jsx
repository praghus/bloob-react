'use strict';

import Tile from './tile.jsx';
import Ball from './ball.jsx';
import Levels from './levels.jsx';

export default class Board {
  constructor() {
    this.level = 0;
    this.tiles = [];
    this.cells = [];
    this.ball = {};
    this.won = false;
    this.levels = Levels;
    this.loadLevelData();
  }

  loadLevelData() {
    this.tiles = [];
    this.cells = [];
    let p = this.levels[this.level].player;
    let map = this.levels[this.level].map;
    this.ball = new Ball(p.x, p.y);
    for (let [y, row] of map.entries()) {
      this.cells.push([]);
      for (let [x, col] of row.entries()) {
        this.cells[y].push(this.addTile(x, y, col));
      }
    }
  }

  restart (){
    this.loadLevelData();
    return this;
  }

  getTile(x,y){
    return this.cells[y][x];
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
