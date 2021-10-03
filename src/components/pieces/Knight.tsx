import { SquareProps } from '../../types/SquareProps';
import BasePiece from './BasePiece';

export default class Knight extends BasePiece {
  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9816;' : '&#9822;';
    super(player, square, htmlCode);
  }

  possibleMoves(): Array<{ x: number; y: number }> {
    const startX = this.square.x;
    const startY = this.square.y;

    const possibleMoves = [
      { x: startX + 2, y: startY + 1 },
      { x: startX + 2, y: startY - 1 },

      { x: startX + 1, y: startY + 2 },
      { x: startX + 1, y: startY - 2 },

      { x: startX - 1, y: startY + 2 },
      { x: startX - 1, y: startY - 2 },

      { x: startX - 2, y: startY + 1 },
      { x: startX - 2, y: startY - 1 },
    ];

    return this.removeOutOfBoundsMoves(possibleMoves);
  }
}
