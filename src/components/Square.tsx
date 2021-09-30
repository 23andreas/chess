import React from 'react';

interface SquareProps {
  color: string
}

const Square = ({ color }: SquareProps): JSX.Element => {
  return (
    <div className={`square ${color}`}>
      
    </div>
  );
};

export default Square;
