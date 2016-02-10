'use strict';

import React from 'react';
import classNames from 'classnames';

export default class TileComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tile } = this.props;
    let tileClass = 'tile tile' + tile.value + ' position_' + tile.y + '_' + tile.x;
    return (
      <span className={tileClass}>{tile.value}</span>
    );
  }
}
