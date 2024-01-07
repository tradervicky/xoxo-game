import React from 'react';

const Box = ({ value, onClick }) => {
  
  const color = value === 'X' ? 'text-red-600' : 'text-blue-600';

  return (
    <div
      className={`bg-slate-200 w-20 h-20 rounded-xl shadow-md shadow-zinc-600 flex justify-center cursor-pointer`}
      onClick={onClick}
    >
      <h1 className={`font-bold text-6xl py-2 ${color}`}>{value}</h1>
    </div>
  );
};

export default Box;
