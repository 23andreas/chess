import React from 'react';
import Board from './components/Board';

export default class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <Board/>
      </div>
    );
  }
}
