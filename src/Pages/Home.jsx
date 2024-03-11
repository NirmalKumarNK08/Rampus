import React from 'react'
import EventCountdownTimer from '../Components/EventCountdownTimer';

const Home = () => {
  return (
    <div className='w-full h-auto pb-10 flex flex-col items-center justify-center'>
      <div className='text-md mt-2'>
        <p>PRESENTS YOU</p>
      </div>
      <div className='w-full h-auto flex flex-col mt-0 items-center justify-center'>
        <img src="rampusLogoNew.png" alt="Logo" className='h-auto sm:h-56 md:h-64 lg:h-72'/>
        <h1 className='font-bold text-2xl mt-7'>DATE: 30-03-2024</h1>
      </div>
      <div className='w-full h-auto mt-2 flex items-center justify-center'>
        <EventCountdownTimer />
      </div>
      <a target='a_blank' className='bg-blue-800 registerAnimation p-5 mt-7 text-xl transition-all duration-300 ease-in-out hover:bg-blue-900 font-bold rounded-3xl' href="https://forms.gle/5gDhQcr8unDFQp3z6">REGISTER NOW</a>
    </div>
  )
}

export default Home