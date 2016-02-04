'use strict';

export default class Ball {
  constructor(x, y) {
    this.id = 'ball';
    this.x = x;
    this.y = y;
    this.newX = x;
    this.newY = y;
    this.moving = false;
    this.z = 1;
  }

  moveTo (x, y) {
    if(!this.moving && x >= 0 && y >= 0 && x < 8 && y < 6) {
      this.newX = x;
      this.newY = y;
      this.moving = true;
    }
  }

  moved(){
    this.x = this.newX;
    this.y = this.newY;
    this.moving = false;
    console.log('moved');
  }

  isMoving() {
    return this.moving && this.z === 1;
  }
}
