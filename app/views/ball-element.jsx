'use strict';

import React from 'react';
import classNames from 'classnames';

export default class BallElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ball} = this.props;
    let ballClass = 'ball position_' + ball.y + '_' + ball.x;

    if (ball.hasMoved()) {
      ballClass +=' y_from_' + ball.fromY() + '_to_' + ball.toY();
      ballClass +=' x_from_' + ball.fromX() + '_to_' + ball.toX();
      //classArray.push('isMoving');
    } else {
      ballClass += ' jumping';
    }

    return (
      <span className={ballClass}>{''}</span>
    );
  }
}
