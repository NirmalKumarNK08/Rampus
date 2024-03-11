import React from 'react'

const Adzap = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>ADZAP</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Per team 4-8 members.</p>
          <p> {"->"} Topics will be given on the spot and 20 minutes will be permitted for preparation.</p>
          <p> {"->"} Every team has to present a '5-minute pitch' on the stage. </p>
          <p> {"->"} In case participants exceed the time limit, judges may be free to disqualify the team.</p>
          <p> {"->"} Teams can choose different forms of expression like Role play, short skits, jingles or any 
          other initiatives that will be encouraged.</p>
          <p> {"->"} Teams are allowed to bring the properties they require.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>VAISHALI</p>
               <p className='text-sm'>9940457005</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Madhu gayathri</p>
               <p className='text-sm'>9150980404</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Adzap