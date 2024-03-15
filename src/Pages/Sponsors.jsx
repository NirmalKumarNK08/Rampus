import React from 'react'

const Sponsors = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-4 items-center'>
      <h1 className='mt-10 gradient-text text-2xl text-center md:text-3xl'>OUR VALUED SPONSORS</h1>
      <div className='w-full grid md:grid-cols-2 gap-10 md:gap-5 place-content-center place-items-center p-5 px-2 md:px-20 h-auto'>
        <div>
          <img src="srmaxis.jpg" alt="" />
        </div>
        <div>
          <img src="buddha.jpg" alt="" />
        </div>
        <div>
          <img src="hero.jpg" alt="" className='h-36'/>
        </div>
        <div>
          <img src="pacman.jpg" alt="" className='h-36'/>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
