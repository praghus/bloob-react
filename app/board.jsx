import Tile from './tile.jsx';
import Levels from './levels.jsx';

class Board  {
  constructor () {
    this.cols = 0;
    this.rows = 0;
    this.tiles = [];
    this.cells = [];
    this.level = 0;
    this.won = false;
    this.levels = new Levels;
    this.loadLevelData();
  }
  loadLevelData () {
    let map = this.levels.data[this.level].map;
    this.rows = map.length;
    for (let [y, row] of map.entries()) {
      this.cells.push([]);
      this.cols = row.length;
      for (let [x, col] of row.entries()) {
        this.cells[y].push(this.addTile(x, y, col));
      }
    }
  }
  addTile (x, y, col) {
    var res = new Tile;
    Tile.apply(res, arguments);
    this.tiles.push(res);
    return res;
  }
  nextLevel () {
    this.level++;
  }
}
export default Board;