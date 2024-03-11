import React from 'react'

const Fifa = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>FIFA</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Players will participate as a team of 2.</p>
          <p> {"->"} No warm-up or practice Games are permitted once the first tourmament match has begun.</p>
          <p> {"->"} Players may not use any custom teams or players for this competition.</p>
         <div>
            <p className='font-bold mt-5 text-xl'>PAUSING:</p>
         </div>
          <p>{"->"} A player may utilize the pause feature for no     
              longer than a minute. When the ball has gone out
              of play, or penalty has been called, the player 
              WITH POSSESSION may elect to pause the game.
          </p>
         <div>
            <p className='font-bold mt-5 text-xl'>OVERTIME:</p>
         </div>
          <p>{"->"} In the event of an overtime use classic mode. 
          It at the end of classic mode over time (which goes until the 120th minute) 
          the game is still tied, you then restart the match now playing golden goal 
          rules under the normal default ruleset (first team to score wins). 
          Continue restarting the match until one team scores and wins according 
          to golden goal rules.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Kishore</p>
               <p className='text-sm'>7395984539</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Fifa