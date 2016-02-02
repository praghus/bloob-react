class Tile {
  constructor(x, y, v) {
    this.id = 't_' + y + '_' + x;
    this.x = x;
    this.y = y;
    this.value = v;
  }
}
export default Tile;