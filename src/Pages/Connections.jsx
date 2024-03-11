import React from 'react'

const Connections = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>CONNEXION</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Each team should consist of 4 members. </p>
          <p> {"->"} A set of images will be shown on the screen for the participants using those combinations of images and clues, particpants have to guess the answer.</p>
          <p> {"->"} There will be time limit for each round. </p>
          <p> {"->"} Three rounds will be conducted.</p>
          <p> {"->"} Use of mobile phones and Bluethooth are prohibited.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>ABARNA</p>
               <p className='text-sm'>7871408052</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>PRIYADHARSHINI</p>
               <p className='text-sm'>8807543355</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Connections