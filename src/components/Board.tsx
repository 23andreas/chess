import React from 'react';
import Square from './Square';
import { SquareProps } from '../types/SquareProps';

export default class Board extends React.Component<{
  squares: { [key: number]: SquareProps };
}> {

  renderSquare(props: SquareProps): JSX.Element {
    return <Square {...props}/>;
  }

  renderRow(y: number): JSX.Element {
    const squares: JSX.Element[] = [];

    for (let x = 1; x <= 8; x++) {
      squares.push(this.renderSquare(this.props.squares[`${x}${y}`]));
    }

    return <div className="row" key={y}>{squares}</div>;
  }

  render(): JSX.Element {
    const rows: JSX.Element[] = [];

    //Build board from top down, starting with row 8
    for (let y = 8; y > 0; y--) {
      rows.push(this.renderRow(y));
    }

    return <div id="board">{rows}</div>;
  }
}
