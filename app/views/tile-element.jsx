'use strict';

import React from 'react';
import classNames from 'classnames';

export default class TileElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tile = this.props.tile;
    let tileClass = 'tile tile' + tile.value + ' position_' + tile.y + '_' + tile.x;
    return (
      <span className={tileClass}>{tile.value}</span>
    );
  }
}
