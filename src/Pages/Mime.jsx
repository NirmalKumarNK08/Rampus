import React from 'react'

const Mime = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>MIME</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Team Event, consisting of a maximum of 6 members.</p>
          <p> {"->"} The time Duration will be 5 minutes.</p>
          <p> {"->"} The act should not contain any dialogue, lip sync, props, or music.</p>
          <p> {"->"} No act shall contain any offensive, obscene, disrespectful actions or gestures.</p>
          <p> {"->"} Background music is allowed.</p>
          <p> {"->"} No mythology and religious violence.</p>
          <p> {"->"} Judgment would be based on the uniqueness of the idea, the audience's connectivity with the theme, costumes, and proper delivery.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Subin</p>
               <p className='text-sm'>7397244880</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Nishinth</p>
               <p className='text-sm'>8124139108</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Mime