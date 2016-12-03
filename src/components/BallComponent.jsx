import React from 'react';
import classNames from 'classnames';

export default class BallComponent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { fall, ball } = this.props;
    let ballClass = 'ball position_' + ball.newY + '_' + ball.newX;
    if(fall()){
      ballClass += ' fall';
    }
    else {
      ballClass += ball.z === 1 ? ' up' : ' down';
    }
    return (
      <div className={ballClass} />
    );
  }
}
