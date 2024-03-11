import React from 'react'

const GroupDance = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>GROUP DANCE</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Each team may have 5-12 members, including coordinators.</p>
          <p> {"->"} The choice of songs is open to the participants.</p>
          <p> {"->"} The time limit is 5-6 minutes for each performance. Negative marking for exceeding the time limit.</p>
          <p> {"->"} The participants are requested to bring two CDs or a pen drive to avoid technical disturbance. and they are also requested to submit one CD or pen drive with the coordinator of the event.</p> 
          <p> {"->"} Dance performance should not convey any indecent gestures.</p>
          <p> {"->"} The participants will be judged based on their rhythm, formation, synchronization, expressions, costumes, makeup, setup, and overall effects</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>MANONMANI</p>
               <p className='text-sm'>7418852590</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>MONICA</p>
               <p className='text-sm'>8939745613</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default GroupDance