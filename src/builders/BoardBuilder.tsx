import Bishop from '../components/pieces/Bishop';
import King from '../components/pieces/King';
import Knight from '../components/pieces/Knight';
import Pawn from '../components/pieces/Pawn';
import Queen from '../components/pieces/Queen';
import Rook from '../components/pieces/Rook';
import { SquareProps } from '../types/SquareProps';

type SquaresList = { [key: number]: SquareProps };

function getSquares(onClickHandler) {
  const squares: SquaresList = [];
  for (let y = 8; y > 0; y--) {
    for (let x = 1; x <= 8; x++) {
      squares[`${x}${y}`] = {
        x: x,
        y: y,
        selectedPieceCanMoveHere: false,
        piece: null,
        onClick: () => onClickHandler(parseInt(`${x}${y}`)),
      };
    }
  }

  return squares;
}

function placePiecesFor(color: string, squares: SquaresList): SquaresList {
  squares = placePawns(squares, color);
  squares = placeRooks(squares, color);
  squares = placeKnights(squares, color);
  squares = placeBishops(squares, color);
  squares = placeKing(squares, color);
  squares = placeQueen(squares, color);
  return squares;
}

function placePawns(squares: SquaresList, color: string): SquaresList {
  const y = color === 'white' ? 2 : 7;

  for (let x = 1; x <= 8; x++) {
    const squareIndex = parseInt(`${x}${y}`);
    squares[squareIndex].piece = new Pawn(color, squares[squareIndex]);
  }

  return squares;
}

function placeRooks(squares: SquaresList, color: string): SquaresList {
  const y = color == 'white' ? 1 : 8;

  squares[`1${y}`].piece = new Rook(color, squares[`1${y}`]);
  squares[`8${y}`].piece = new Rook(color, squares[`8${y}`]);

  return squares;
}

function placeKnights(squares: SquaresList, color: string): SquaresList {
  const y = color == 'white' ? 1 : 8;

  squares[`2${y}`].piece = new Knight(color, squares[`2${y}`]);
  squares[`7${y}`].piece = new Knight(color, squares[`7${y}`]);

  return squares;
}

function placeBishops(squares: SquaresList, color: string): SquaresList {
  const y = color == 'white' ? 1 : 8;

  squares[`3${y}`].piece = new Bishop(color, squares[`3${y}`]);
  squares[`6${y}`].piece = new Bishop(color, squares[`6${y}`]);

  return squares;
}

function placeKing(squares: SquaresList, color: string): SquaresList {
  const y = color == 'white' ? 1 : 8;
  const x = color == 'white' ? 5 : 4;
  squares[`${x}${y}`].piece = new King(color, squares[`${x}${y}`]);

  return squares;
}

function placeQueen(squares: SquaresList, color: string): SquaresList {
  const y = color == 'white' ? 1 : 8;
  const x = color == 'white' ? 4 : 5;

  squares[`${x}${y}`].piece = new Queen(color, squares[`${x}${y}`]);

  return squares;
}

export default function getInitalSquaresState(
  onClickHandler: (squareIndex: number) => void
): { [key: number]: SquareProps } {
  let squares = getSquares(onClickHandler);
  squares = placePiecesFor('white', squares);
  squares = placePiecesFor('black', squares);

  return squares;
}
