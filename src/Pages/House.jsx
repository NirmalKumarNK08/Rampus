import React from 'react'
import { Link } from 'react-router-dom'

const House = () => {
  return (
    <div className='w-full flex mt-5 pb-10 flex-col items-center justify-center h-auto px-5'>
      <h1 className='text-2xl gradient-text z-10'>HOUSES</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full h-auto'>
        <Link to='/agni' className='flex items-center justify-center flex-col'>
          <img src="agniLogo.jpeg" alt="" className='h-60 hover:scale-110 transition-all ease-in-out duration-300'/>
          <h1 className='font-bold text-3xl text-orange-400 z-10'>AGNI</h1>
        </Link>
        <Link to='/akash' className='flex items-center justify-center flex-col'>
          <img src="akashLogo.jpeg" alt="" className='h-60 hover:scale-110 transition-all ease-in-out duration-300'/>
          <h1 className='font-bold text-3xl text-sky-400 z-10'>AKASH</h1>
        </Link>
        <Link to='/prithvi' className='flex items-center justify-center flex-col'>
          <img src="prithviLogo.jpeg" alt="" className='h-60 hover:scale-110 transition-all ease-in-out duration-300'/>
          <h1 className='font-bold text-3xl text-green-500 z-10'>PRITHVI</h1>
        </Link>
        <Link to='/thrishul' className='flex items-center justify-center flex-col'>
          <img src="thrishulLogo.jpeg" alt="" className='h-60 hover:scale-110 transition-all ease-in-out duration-300'/>
          <h1 className='font-bold text-3xl text-yellow-400 z-10'>TRISHUL</h1>
        </Link>
      </div>
    </div>
  )
}

export default House