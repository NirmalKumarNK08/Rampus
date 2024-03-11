import React from 'react'

const Singing = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>SINGING</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Time allotted for each performance is 2-3 minutes.</p>
          <p> {"->"} Participants will not be allowed to refer to the lyrics while singing.</p>
          <p> {"->"} The participants will be judged on the song selection, voice quality, clarity, rhythm and their appeal to the audience (rules and regulations for singing).</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Harini</p>
               <p className='text-sm'>8778983080</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Savita</p>
               <p className='text-sm'>9042309195</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Singing