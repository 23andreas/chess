import { SquareProps } from '../../types/SquareProps';

export default class BasePiece {
  player: string;
  htmlCode: string;
  square: SquareProps;

  constructor(player: string, square: SquareProps, htmlCode: string) {
    this.player = player;
    this.htmlCode = htmlCode;
    this.square = square;
  }

  move(toSquare: SquareProps) {
    this.square.piece = null;
    this.square = toSquare;
    this.square.piece = this;
  }

  possibleMoves(): Array<{ x: number; y: number }> {
    return [];
  }

  getVerticalMoves(): Array<{ x: number; y: number }> {
    const startX = this.square.x;
    const startY = this.square.y;
    const verticalMoves: Array<{ x: number; y: number }> = [];

    //UP
    for (let up = 1; up + startY <= 8; up++) {
      verticalMoves.push({
        x: startX,
        y: startY + up,
      });
    }

    //Down
    for (let down = 1; startY - down > 0; down++) {
      verticalMoves.push({
        x: startX,
        y: startY - down,
      });
    }

    return verticalMoves;
  }

  getHorizontalMoves(): Array<{ x: number; y: number }> {
    const startX = this.square.x;
    const startY = this.square.y;
    const horizontalMoves: Array<{ x: number; y: number }> = [];

    //LEFT
    for (let left = 1; left < startX; left++) {
      horizontalMoves.push({
        x: startX - left,
        y: startY,
      });
    }

    //RIGHT
    for (let right = 1; startX + right <= 8; right++) {
      horizontalMoves.push({
        x: startX + right,
        y: startY,
      });
    }

    return horizontalMoves;
  }

  getDiagonalMoves(): Array<{ x: number; y: number }> {
    const startX = this.square.x;
    const startY = this.square.y;
    const diagonalMoves: Array<{ x: number; y: number }> = [];

    // Add left side diagonal moves
    for (let left = 1; left < startX; left++) {
      diagonalMoves.push({
        x: startX - left,
        y: startY - left,
      });

      diagonalMoves.push({
        x: startX - left,
        y: startY + left,
      });
    }

    // Add right side diagonal moves
    for (let right = 0; right + startX <= 8; right++) {
      diagonalMoves.push({
        x: startX + right,
        y: startY + right,
      });

      diagonalMoves.push({
        x: startX + right,
        y: startY - right,
      });
    }

    return diagonalMoves;
  }

  removeOutOfBoundsMoves(coordinates: Array<{ x: number; y: number }>) {
    return coordinates.filter((value) => {
      // Remove coordinates outside board
      if (value.x < 1 || value.x > 8 || value.y < 1 || value.y > 8) {
        return false;
      }

      // Remove coordinates for current square
      if (value.x == this.square.x && value.y == this.square.y) {
        return false;
      }

      return true;
    });
  }
}
