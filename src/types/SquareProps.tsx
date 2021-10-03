import BasePiece from '../pieces/BasePiece';

export type SquareProps = {
  x: number,
  y: number,
  selectedPieceCanMoveHere: boolean,
  piece: BasePiece | null,
  onClick: (squareIndex) => void, 
}