import React from 'react'

function Score({score, xPlaying}) {
    const {xScore, oScore} = score;
  return (
    <div className=' flex w-[300px] justify-between text-xl font-bold gap-2  px-4 py-4 rounded-xl bg-slate-950  mb-0 border mx-auto'>
        <span className='text-red-700'>X - {xScore}</span>
        <span className='text-blue-600'>O - {oScore}</span>
    </div>
  )
}

export default Score