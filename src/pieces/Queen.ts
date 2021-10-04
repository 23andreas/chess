import { CoordinatesList } from '../types/Coordinates';
import { SquareProps } from '../types/SquareProps';
import BasePiece from './BasePiece';

export default class Queen extends BasePiece {
  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9813;' : '&#9819;';
    super(player, square, htmlCode);
  }

  possibleMoves(): CoordinatesList {
    let possibleMoves: CoordinatesList = [];

    possibleMoves = possibleMoves.concat(this.getDiagonalMoves());
    possibleMoves = possibleMoves.concat(this.getHorizontalMoves());
    possibleMoves = possibleMoves.concat(this.getVerticalMoves());

    return this.removeOutOfBoundsMoves(possibleMoves);
  }
}
