import React from 'react'

const ReelsMaking = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>REELS MAKING</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p>{"->"} The reel must be an original creation. You can only be inspired by existing trends online. Plagiarized content lead to disqualification.</p>
          <p>{"->"} Any offensive, name-calling, derogatory remarks, and/or regional slang towards any person or community should not be used.</p>
          <p>{"->"} The video should not exceed 60 Seconds.</p>
          <p>{"->"} Individual, as well as group entries (not more than 3 people), are allowed.</p>
          <p>{"->"} Please use one medium of language for the reels. The submissions can be in any language.</p>
          <p>{"->"} Each Participant will accept only one entry, and a second entry will lead to disqualification.</p>
          <p>{"->"} As per Reel format, the video should be made vertically and not horizontally.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Tanya</p>
               <p className='text-sm'>9884327724</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ReelsMaking