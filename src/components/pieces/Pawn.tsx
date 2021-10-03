import { SquareProps } from '../../types/SquareProps';
import BasePiece from './BasePiece';

export default class Pawn extends BasePiece {
  isFirstMove: boolean;

  constructor(player: string, square: SquareProps) {
    const htmlCode: string = player === 'white' ? '&#9817;' : '&#9823;';
    super(player, square, htmlCode);

    this.isFirstMove = true;
  }

  move(toSquare: SquareProps) {
    super.move(toSquare);
    this.isFirstMove = false;
  }

  possibleMoves(): Array<{ x: number; y: number }> {
    const startX = this.square.x;
    const startY = this.square.y;

    const possibleMoves = [
      {
        x: startX,
        y: this.player === 'white' ? startY + 1 : startY - 1,
      },
    ];

    if (this.isFirstMove) {
      possibleMoves.push({
        x: startX,
        y: this.player === 'white' ? startY + 2 : startY - 2,
      });
    }
    return this.removeOutOfBoundsMoves(possibleMoves);
  }
}
