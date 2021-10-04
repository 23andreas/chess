import { CoordinatesList } from '../types/Coordinates';
import { SquareProps } from '../types/SquareProps';
import BasePiece from './BasePiece';

export default class King extends BasePiece {
  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9812;' : '&#9818;';
    super(player, square, htmlCode);
  }

  possibleMoves(): CoordinatesList {
    const startX = this.square.x;
    const startY = this.square.y;

    return this.removeOutOfBoundsMoves([
      //horizontal
      { x: startX + 1, y: startY },
      { x: startX - 1, y: startY },

      //vertical
      { x: startX, y: startY + 1 },
      { x: startX, y: startY - 1 },

      //diagonal
      { x: startX + 1, y: startY + 1 },
      { x: startX + 1, y: startY - 1 },
      { x: startX - 1, y: startY + 1 },
      { x: startX - 1, y: startY - 1 },
    ]);
  }
}
