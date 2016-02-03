'use strict';

export default class Ball {
  constructor(x, y) {
    this.id = 'ball';
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.newX = x;
    this.newY = y;
    this.moving = false;
    this.z = 1;
  }

  moveTo (x, y) {
    if(!this.moving) {
      this.oldX = this.x;
      this.oldY = this.y;
      this.newX = x;
      this.newY = y;
      this.moving = true;
    }
  }

  moved(){
    this.oldX = this.newX;
    this.oldY= this.newY;
    this.x = this.newX;
    this.y = this.newY;
    this.moving = false;
    console.log('moved');
  }

  hasMoved () {
    return (this.fromY() != this.toY() || this.fromX() != this.toX());
  }

  fromY () {
    return this.oldY;
  };

  fromX () {
    return this.oldX;
  };

  toY () {
    return this.newY;
  };

  toX () {
    return this.newX;
  };

}
