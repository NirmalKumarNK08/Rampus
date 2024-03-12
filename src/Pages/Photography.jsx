import React from 'react'

const Photography = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>PHOTOGRAPHY</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl text-center md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p>{"->"} It is an individual event.</p>
          <p>{"->"} Every participants can submit one entry only.</p>
          <p>{"->"} Theme: <b>Street life</b></p>
          <p>{"->"} Categories: <br />
            <div className='ml-5'>
              -Smartphone <br />
              -DSLR <br />
              -Drone photography
            </div>
          </p>
          <p>{"->"} Submit the Photograph with  a suitable caption.</p>
          <p>{"->"} Get your work in print.</p>
          <p>{"->"} The given photo should contain watermark(date and time).</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Bharath</p>
               <p className='text-sm'>7200310543</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Photography