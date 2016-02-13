import Tile from './Tile';
import Ball from './Ball';
import Levels from '../assets/levels.json';

export default class Board {
  constructor() {
    this.level = 0;
    this.levels = Levels;
    this.loadLevelData();
  }

  loadLevelData() {
    this.tiles = [];
    this.cells = [];
    this.won = false;
    this.lost = false;
    this.tilesCount = 0;
    const {player, map} = this.levels[this.level];
    this.ball = new Ball(player.x, player.y);
    for (let [y, row] of map.entries()) {
      this.cells.push([]);
      for (let [x, v] of row.entries()) {
        this.cells[y].push(this.addTile(x, y, v));
      }
    }
  }

  noMoves(){
    return this.lost || this.won;
  }

  hasLost(){
    return this.lost;
  }

  hasWon(){
    return this.won;
  }

  getTile(x,y){
    return this.cells[y][x];
  }

  addTile(x, y, v) {
    const res = new Tile(x, y, v);
    Tile.apply(res, arguments);
    this.tiles.push(res);
    if (v > 0 &&  v !== 6) {
      this.tilesCount ++;
    }
    return res;
  }

  restart (){
    this.loadLevelData();
    return this;
  }

  nextLevel() {
    this.level++;
    this.loadLevelData();
    return this;
  }
}
