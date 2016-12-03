export default class Ball {
  constructor(x, y) {
    this.id = 'ball';
    this.x = x;
    this.y = y;
    this.newX = x;
    this.newY = y;
    this.moving = false;
    this.steps = 1;
    this.z = 1;
  }

  moveTo (x, y) {
    if(x >= 0 && y >= 0 && x < 8 && y < 6) {
      this.newX = x;
      this.newY = y;
      this.steps = 1;
      this.moving = true;
    }
  }

  moved() {
    if(this.isMoving()) {
      this.x = this.newX;
      this.y = this.newY;
      this.moving = false;
      console.log('moved');
    }
  }

  isMoving() {
    return this.moving && this.z === 1;
  }
}
