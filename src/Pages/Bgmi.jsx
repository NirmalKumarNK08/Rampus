import React from 'react'

const Bgmi = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>BGMI</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p>{"->"} Emulators are not allowed in any gamemode organized. The player will be disqualified if found using any kind of emulator.</p>
          <p>{"->"} Any game modifying tools except GFX tool is not allowed.</p>
          <p>{"->"} Players can play on android/ios tablets/phones only.</p>
          <p>{"->"} Use of any hack leads to disqualification.</p>
          <p>{"->"} Participants are requested to remain ready at least 15 minutes prior to the start of any match, Late entries would not be allowed.</p>
         <div>
            <p className='font-bold mt-5 text-xl'>EVENT GUIDELINES:</p>
         </div>
          <p>{"->"} Players will participate as a 4 man-squad.</p>
          <p>{"->"} Maps selected will be notified to the participants before the match.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
          <div className={`${card}`}>
               <p className='text-xl font-bold'>Dhanraj</p>
               <p className='text-sm'>6383567979</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Bgmi
