import React from 'react';
import Board from './components/Board';
import getInitialSquares from './builders/SquareBuilder';
import { SquareProps } from './types/SquareProps';

interface GameStateInterface {
  currentPlayer: string;
  selectedSquare: SquareProps | null;
  squares: { [key: number]: SquareProps };
}

export default class Game extends React.Component<unknown, GameStateInterface> {
  constructor(props: unknown) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.render = this.render.bind(this);

    this.state = {
      currentPlayer: 'white',
      selectedSquare: null,
      squares: getInitialSquares(this.handleClick),
    };
  }

  componentDidUpdate(prevProps: unknown, prevState: GameStateInterface): void {
    if (prevState.selectedSquare !== this.state.selectedSquare) {
      const squares = this.state.squares;
      const selectedSquare = this.state.selectedSquare;

      for (const key in squares) {
        squares[key].selectedPieceCanMoveHere = false;
      }

      if (selectedSquare !== null && selectedSquare.piece !== null) {
        const possibleMoves = selectedSquare.piece.possibleMoves();

        for (const coordinates of possibleMoves) {
          squares[`${coordinates.x}${coordinates.y}`].selectedPieceCanMoveHere =
            true;
        }
      }

      this.setState({
        squares: squares,
      });
    }
  }

  handleMove(fromSquare: SquareProps, toSquare: SquareProps): void {
    if(toSquare.selectedPieceCanMoveHere === true){
      if(fromSquare.piece !== null){
        fromSquare.piece.move(toSquare);
      }
    }
  }

  handleClick(squareIndex: number): void {
    const squares = this.state.squares;
    const selectedSquare = squares[squareIndex];

    if (this.state.selectedSquare !== null) {
      if(this.state.selectedSquare.piece !== null){
        this.handleMove(this.state.selectedSquare, selectedSquare);
      }
      this.setState({ selectedSquare: null });
    } else {
      this.setState({
        selectedSquare: selectedSquare,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Board squares={this.state.squares} />
      </div>
    );
  }
}
