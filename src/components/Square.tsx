import React from 'react';
import { SquareProps } from '../types/SquareProps';

const Square = (props: SquareProps): JSX.Element => {
  const color = (props.x + props.y) % 2 == 0 ? 'black' : 'white';

  return (
    <div
      key={`${props.x}${props.y}`}
      className={`square ${color}`}
      onClick={props.onClick}
    >
      <div
        className={
          props.selectedPieceCanMoveHere ? 'piece border-green' : 'piece'
        }
        dangerouslySetInnerHTML={{
          __html: props.piece ? props.piece.htmlCode : '',
        }}
      ></div>
    </div>
  );
};

export default Square;
