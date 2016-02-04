'use strict';

export default class Tile {
  constructor(x, y, v) {
    this.id = 't_' + y + '_' + x;
    this.x = x;
    this.y = y;
    this.value = v;
  }

  hit(){
    if (this.value > 0 && this.value < 6){
      this.value--;
    } else if (this.value > 6){
      this.value = 0;
    }
    return this;
  }
}
