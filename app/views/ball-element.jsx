'use strict';

import React from 'react';
import classNames from 'classnames';

export default class BallElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ball} = this.props;
    let ballClass = 'ball position_' + ball.newY + '_' + ball.newX;

    if (ball.z === 1) {
      ballClass += ' up';
      //ballClass +=' y_from_' + ball.fromY() + '_to_' + ball.toY();
      //ballClass +=' x_from_' + ball.fromX() + '_to_' + ball.toX();
    } else {
      ballClass += ' down';
    }

    return (
      <span className={ballClass}>{''}</span>
    );
  }
}
