import React from 'react';
import Box from './Box';

function Board({ board, onClick }) {
  return (
    <div className='grid grid-cols-3 gap-2 w-[300px] h-[300px] px-4 py-4 rounded-xl bg-slate-400 mt-2 mb-2 border mx-auto'>
      {board.map((data, index) => (
        <Box key={index} value={data} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

export default Board;
