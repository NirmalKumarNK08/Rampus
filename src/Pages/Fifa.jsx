import React from 'react'

const Fifa = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>FIFA</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
         <div>
            <p className='font-bold mt-5 text-xl'>GAMEPLAY:</p>
         </div>
          <p>{"->"} Half Duration: 5 minute halves | Golden Goal Overtime, then shootout
            <p>{"->"} Tournament will be single elimination with the tournament draw randomly selected.
          </p>
          <p> {"->"} All games will be played on Playstation 5 consoles.</p>
          </p>
         <div>
            <p className='font-bold mt-5 text-xl'>GAME SETTINGS:</p>
         </div>
          <p>{"->"} All settings will be pre-set by intramural Staff and setting are open to change by staff.</p>
          <p> {"->"} If a glitch or freeze occurs in the system game will be restartted with the same setting and game situation.</p>
        </div>
        <div>
            <p className='font-bold mt-5 text-xl'>TEAMS:</p>
         </div>
          <p>{"->"} Team should be present 15 mins before their scheduled time.</p>
          <p> {"->"} Participants should be on the same team all tournament long.</p>
          <p> {"->"} Home team will be chosen by stone, paper & scissors.</p>
          <p> {"->"} Mercy Rule: If eithe player gains a lead of 6 or more goals in a game, the game is ended with the 
              player  leading declared the winner. This rule will not be in effect during semi-finals and championship round.
          </p>
          <div>
              <p className='font-bold mt-5 text-xl'>SPORTMANSHIPS:</p>
           </div>
              <p>{"->"} The Intramural Program encourages fair and honourable play bettwe its parrticipants and spectators. If there is an issue of fairness or sportsmanship during your match, contact a memberoof the intramural staaff and explain the situation.
              </p>
            </div>
            <div>
              <p className='font-bold mt-5 text-xl'>SPORTMANSHIPS:</p>
            </div>
            <p>{"->"} Participants who do not show up on start time of their scheduled match have forfeited their opportunity to participate.
            </p>
            <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
            <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
                <div className={`${card}`}>
                  <p className='text-xl font-bold'>Kishore</p>
                  <p className='text-sm'>7395984539</p>
                </div>
            </div>
          </div>
  )
}

export default Fifa
