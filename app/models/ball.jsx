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
    if(!this.moving) {
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

  hasMoved () {
    return (this.fromY() != this.toY() || this.fromX() != this.toX());
  }

  fromY () {
    return this.y;
  };

  fromX () {
    return this.x;
  };

  toY () {
    return this.newY;
  };

  toX () {
    return this.newX;
  };

}
