import React from 'react'

const ChannelSurfing = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>CHANNEL SURFING</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Each team must have a minimum of 6 and a maximum of 8 members.</p>
          <p> {"->"} The performance time is 5 minutes, and the time limit must be strictly followed. No extra time will be given.</p>
          <p> {"->"} The judge will give a cue to change the channel on spot.</p>
          <p> {"->"} The performance has to be changed immediately after that.</p>
          <p> {"->"} A list of channels will be provided beforehand, but the judges may choose to give their own channels during the event.</p>
          <p> {"->"} No time will be given for preparation.</p>
          <p> {"->"} Props can be used.</p>
          <p> {"->"} Points will be awarded on the basis of innovation, depiction of the situation, team work and expressions.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Joshiitha</p>
               <p className='text-sm'>8678979102</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Lavena</p>
               <p className='text-sm'>8939291618</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ChannelSurfing