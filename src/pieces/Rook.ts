import { CoordinatesList } from '../types/Coordinates';
import { SquareProps } from '../types/SquareProps';
import BasePiece from './BasePiece';

export default class Rook extends BasePiece {
  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9814;' : '&#9820;';
    super(player, square, htmlCode);
  }

  possibleMoves(): CoordinatesList {
    const possibleMoves = this.getVerticalMoves().concat(
      this.getHorizontalMoves()
    );

    return this.removeOutOfBoundsMoves(possibleMoves);
  }
}
