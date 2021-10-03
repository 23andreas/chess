import { SquareProps } from '../../types/SquareProps';
import BasePiece from './BasePiece';

export default class Bishop extends BasePiece {
  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9815;' : '&#9821;';
    super(player, square, htmlCode);
  }

  possibleMoves(): Array<{ x: number; y: number }> {
    return this.removeOutOfBoundsMoves(this.getDiagonalMoves());
  }
}
