import React from 'react'

const FlamelessCooking = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>FLAMELESS COOKING</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} The participants can participate either in a team of two or individually.</p>
          <p> {"->"} All the ingredients used in the dish are to be listed and presented alongside the dish.</p>
          <p> {"->"} Plates, spoons, and any utensils are to be brought by the participants themselves, only a table will be provided.</p>
          <p> {"->"} Participants shouldn't bring any pre-cooked, pre-cut or pre-made ingredients.</p>
          <p> {"->"} The dishes are to be made on the spot.</p>
          <p> {"->"} All dishes are to be pure vegetarian and no cold-cut meats are to be included.</p>
          <p> {"->"} Participants will be judged on hygiene, presentation, and taste.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>RAMYA PRIYA</p>
               <p className='text-sm'>9789030240</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>SANTHIYA</p>
               <p className='text-sm'>9176471786</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default FlamelessCooking