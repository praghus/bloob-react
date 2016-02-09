'use strict';

import React from 'react';
import classNames from 'classnames';

export default class BallComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ball} = this.props;
    let ballClass = 'ball position_' + ball.newY + '_' + ball.newX;
    ballClass += ball.z === 1 ? ' up' : ' down';
    return (
      <span className={ballClass}>{''}</span>
    );
  }
}
