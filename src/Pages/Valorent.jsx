import React from 'react'

const Valorent = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>VALORENT</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
         <div className='mt-5'>
            <p className='font-bold mt-5 text-xl'>GAME ACCOUNTS:</p>
         </div>
          <p>{"->"} A player can have only on valorant account active on their account.
            You are not allowed to share or use another person's game account. Your account is for your use alone.
          </p>
         <div>
            <p className='font-bold mt-5 text-xl'>TEAMS AND ROSTERS:</p>
         </div>
          <p>{"->"} Each team's roster must consist of atleast 3 players.
          </p>
          <p>{"->"} Each team's roster will be allowed to have 3 main players and 1 substitute. Once the tournament starts, you cannot replace any player.
          A substitute player may only be added before the tournament start.</p>
          <p>{"->"} This player cannot be part of any other team's roster which is participating or has participated in the same tournament.</p>
           <p>{"->"} Match must be played in the following format: 3v3</p>
            <p>{"->"} A player is allowed to represent only one Team.</p>
          <p>{"->"} Teams should be present 15 mins before their scheduled time.</p>
          <div>
            <p className='font-bold mt-5 text-xl'>GAME SETTINGS:</p>
         </div>
          <p>{"->"} All settings will be pre-set by intramural Staff and setting are open to change by staff.</p>
          <p> {"->"} If a glitch or freeze occurs in the system game will be restartted with the same setting and game situation.</p>
        </div>
        <div>
            <p className='font-bold mt-5 text-xl'>GAMEPLAY SETTINGS:</p>
         </div>
          <p>{"->"} MAPS: Bind | Haven | Split | Ascent | Icebox | Breeze | Fracture</p>
          <p> {"->"} SERVER SETUP: 
                Map will be decided through lot by the intramural staaff. And attact or defence will be decided throught stone, paper & scissors.
            Mode: Standard.
          </p>
          
          <div>
              <p className='font-bold mt-5 text-xl'>CHEATING:</p>
           </div>
              <p>{"->"} 
                It is forbidden to cheat, modify the game files, exploit bugs, and/or use any third-party application which would give an unfair advantage against other users. All cheats are completely forbidden to use under any circumstance while playing the tournament Using any cheat will result in bans and disqualifications.
              </p>
            </div>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Narain</p>
               <p className='text-sm'>9025673439</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Valorent
