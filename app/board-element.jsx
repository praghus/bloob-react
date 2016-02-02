'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';
import CellElement from './cell-element.jsx';
import TileElement from './tile-element.jsx';

export default class BoardElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {board: new Board};
        console.log(this.state);
        this.restartGame = this.restartGame.bind(this);
    }
    restartGame () {
        this.setState({board: new Board});
    }
    render() {
        var cells = this.state.board.cells.map(function (row, i) {
            return <div key={i}>{row.map(function (col, j) {return <CellElement key={j} />; })}</div>;
        });
        var tiles = this.state.board.tiles.filter(function (tile) {
            return tile.value != 0;
        }).map(function (tile, j) {
            return <TileElement key={tile.id} tile={tile} />;
        });
        return (
            <div className='board' tabIndex="1">
                {cells}
                {tiles}
            </div>
        );
    }
}
