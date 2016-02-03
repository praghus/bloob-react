'use strict';

export default class Ball {
  constructor(x, y) {
    this.id = 'ball';
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.z = 0;
  }

  moveTo (x, y) {
    this.oldY = this.y;
    this.oldX = this.x;
    this.y = y;
    this.x = x;
  }

  hasMoved () {
    return (this.fromY() != -1 && (this.fromY() != this.toY() || this.fromX() != this.toX()));
  }

  fromY () {
    return this.oldY;
  };

  fromX () {
    return this.oldX;
  };

  toY () {
    return this.y;
  };

  toX () {
    return this.x;
  };

}
