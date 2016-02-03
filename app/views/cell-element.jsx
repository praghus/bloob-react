'use strict';

import React from 'react';

export default class CellElement extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <span className='cell'>{''}</span>
    );
  }
}
