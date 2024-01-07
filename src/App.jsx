import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Score from './Score';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = xPlaying ? 'X' : 'O';

    setBoard(newBoard);
    setXPlaying(!xPlaying);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setOver(true);
      updateScore(winner);
    }
  };

  const resetBoard = () => {
    setOver(false);
    setBoard(Array(9).fill(null));
  };

  const calculateWinner = (squares) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const updateScore = (winner) => {
    setScore((prevScore) => ({
      xScore: winner === 'X' ? prevScore.xScore + 1 : prevScore.xScore,
      oScore: winner === 'O' ? prevScore.oScore + 1 : prevScore.oScore,
    }));
  };

  return (
    <div >
      <h2 className='text-center mt-20 mb-2 text-blue-600 text-2xl font-bold'>Tic-Tac-Toe</h2>
      <Score score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={over ? resetBoard : handleBoxClick} />
      <div className='flex justify-center'>
      <button onClick={resetBoard} className="py-2 px-4 text-white text-xl font-medium rounded-xl bg-blue-500">Reset</button>
      </div>
    </div>
  );
}

export default App;
