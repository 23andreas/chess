import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(color: string): JSX.Element {
    return (
      <Square 
        color={color}
      />
    );
  }

  renderRow(index: number): JSX.Element {
    const squares = [];
    
    for(let i = 0; i < 8; i++){
      const squareBgColor = (i+index) % 2 == 0 ? 'white' : 'black';
      squares.push(this.renderSquare(squareBgColor));
    }

    return (
      <div className="row">
        {squares}
      </div>
    );
  }

  render(): JSX.Element {
    const rows = [];
    for(let i = 0; i < 8; i++){
      rows.push(this.renderRow(i));
    }

    return (
      <div id="board">
        {rows}
      </div>
    );
  }
}
