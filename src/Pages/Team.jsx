import React from 'react'

const Team = () => {
  const cardStyle = 'flex flex-col text-center w-full cursor-pointer items-center justify-center gap-1 h-60 bg-white bg-opacity-70 text-black rounded-xl px-5 py-2';
  return (
    <div className='w-full pb-10 flex flex-col items-center justify-center'>
      <h1 className='text-3xl gradient-text mt-10'>CORE COMMITTEE</h1>
      <div className='w-full mx-10 h-auto gap-5 px-5 mt-5 grid sm:grid-cols-2 lg:grid-cols-4'>
        <div className={cardStyle}>
          <img src="lavan.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>LAVAN S</h1>
          <p className='font-bold text-md'>(President)</p>
        </div>
        <div className={cardStyle}>
          <img src="Joshua.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>JOSHUA</h1>
          <p className='font-bold text-md'>(Vice President)</p>
        </div>
        <div className={cardStyle}>
          <img src="mahendra.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>MAHENDRA</h1>
          <p className='font-bold text-md'>(Secretary)</p>
        </div>
        <div className={cardStyle}>
          <img src="sushmitha.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>SUSHMITHA</h1>
          <p className='font-bold text-md'>(Joint Secretary)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>CHAIRPERSON</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="maneesh.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>MANEESH</h1>
          <p className='font-bold text-md'>(Chairperson)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>PROGRAM DIRECTOR</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="prabha.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>PRABHAKAR</h1>
          <p className='font-bold text-md'>(Program Director)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>EXECUTIVE HEAD</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="abinash.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>ABINASH RAJ</h1>
          <p className='font-bold text-md'>(Chief Executive Head)</p>
        </div>
      </div>
      
      <h1 className='text-3xl gradient-text mt-10'>HOSPITALITY COMMITTEE</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="kabilan.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>KABILAN</h1>
          <p className='font-bold text-md'>(Hospitality Head)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>DISCIPLINE COMMITTEE</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="saran.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>SARAN VIJAYAN D</h1>
          <p className='font-bold text-md'>(Disciplinary Head)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>DIGITAL COMMITTEE</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="Syed.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>SYED AFREED</h1>
          <p className='font-bold text-md'>(Digital Head)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>CREATIVE COMMITTEE</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="kuldeep.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>KULDEEP</h1>
          <p className='font-bold text-md'>(Creative Head)</p>
        </div>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>PUBLIC RELATIONS OFFICER</h1>
      <div className='lg:w-2/6 md:w-3/6 w-full mx-10 h-auto gap-5 px-5 mt-5 grid'>
        <div className={cardStyle}>
          <img src="naveen.jpg" alt="" className='h-36 rounded-full w-36'/>
          <h1 className='font-bold text-2xl'>NAVEEN</h1>
          <p className='font-bold text-md'>(P.R.O)</p>
        </div>
      </div>
    </div>
  )
}

export default Team