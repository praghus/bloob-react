'use strict';

import Tile from './tile.jsx';
import Levels from './levels.jsx';

export default class Board {
  constructor() {
    this.cols = 0;
    this.rows = 0;
    this.tiles = [];
    this.cells = [];
    this.level = 0;
    this.won = false;
    this.levels = Levels;
    this.loadLevelData();
  }

  loadLevelData() {
    let map = this.levels[this.level].map;
    this.rows = map.length;
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
