'use strict';

import React from 'react';
import classNames from 'classnames';

export default class BallElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ball = this.props.ball;
    let ballClass = 'ball position_' + ball.y + '_' + ball.x;
    return (
      <span className={ballClass}>{''}</span>
    );
  }
}
