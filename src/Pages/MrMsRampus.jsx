import React from 'react'

const MrMsRampus = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>MR & MR RAMPUS</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} It is a team event consists of one boy and a girl.</p>
          <p> {"->"} Duration-5 mins.</p>
          <p> {"->"} One team per department.</p>
          <p> {"->"} All students must carry their ID cards.</p>
          <p> {"->"} Vulgarity in any form will not be tolerated.</p>
          <p> {"->"} Students must strictly adhere to the dress codes, wearing attire below the knee, no sleeveless allowed.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Akshaya</p>
               <p className='text-sm'>9952477552</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Shyam Ratheesh</p>
               <p className='text-sm'>6369030852</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default MrMsRampus