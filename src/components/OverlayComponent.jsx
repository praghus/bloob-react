import React from 'react';

export default class OverlayComponent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { onRestart, onLevelUp, board } = this.props;
    let contents = '';
    let button = '';
    if (board.hasWon()) {
      contents = 'Good Job!';
      button = <button onClick={onLevelUp}>Next level</button>;
    } else if (board.hasLost()) {
      contents = 'Game Over';
      button = <button onClick={onRestart}>Try again</button>;
    } else {
      return null;
    }
    return (
      <div className='overlay'>
        <p className='message'>{contents}</p>
        {button}
      </div>
    )
  }
};