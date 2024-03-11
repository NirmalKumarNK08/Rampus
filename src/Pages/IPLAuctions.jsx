import React from 'react'

const IPLAuctions = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>IPL AUCTIONS</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p className='mt-5'> {"->"} Each team must consist of 2-3 participants</p>
          <p> {"->"} The competition comprises two levels: First level/Quiz: The participating teams’ knowledge in the field of the Indian premier league will be put to the test, out of which only 10 teams will be selected. Second level/Auction: The qualifying teams are challenged to form mock IPL teams using an allocated budget limit.The team making will be with bidding of the total teams.</p>
          <p> {"->"} Additional rules may be imposed at the judges’ discretion.</p>
          <p> {"->"} Participants are informed that this event takes around 3-4 hours. In order to ensure maximum efficiency, please make sure you do not sign up for events that collide with IPL auction.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>SANTHOSH</p>
               <p className='text-sm'>8608344782</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default IPLAuctions