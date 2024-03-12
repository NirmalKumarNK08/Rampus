import React from 'react'

const Contact = () => {
  const card = 'md:w-1/4 bg-white bg-opacity-80 gap-1 rounded-xl py-8 px-6 text-black flex flex-col justify-center items-center';
  return (
    <div className='text-3xl w-full h-auto flex flex-col items-center justify-between'>
      <h1 className='text-3xl gradient-text mt-10'>CONTACT US</h1>
      <div className='w-full'>
         {/* <h1 className='font-bold text-xl md:text-2xl text-center underline mt-8'>Overall Event Coordinators</h1> */}
         <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl text-center underline mb-5 font-bold'>Chief Executive Head</p>
               <p className='text-2xl font-bold'>Abinash Raj</p>
               <p className='text-lg'>(II - B.com ISM)</p>
               <p className='text-lg'>8681973247</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl text-center underline mb-5 font-bold'>Executive Member</p>
               <p className='text-2xl font-bold'>Teja Sree</p>
               <p className='text-lg'>(I - B.com CS)</p>
               <p className='text-lg'>9176177957</p>
            </div>
         </div>
      </div>
      <div className='w-full h-auto flex gap-10 justify-center items-center mt-10'>
        {/* <h1 className='text-orange-400'>AGNI</h1>
        <h1 className='text-sky-400'>AKASH</h1>
        <h1 className='text-green-500'>PRITHVI</h1>
        <h1 className='text-yellow-400'>TRISHUL</h1> */}
      </div>
      <div className='w-full h-auto flex relative flex-col mt-10 md:flex-row py-5 pb-14 md:items-center justify-between px-5 text-lg bg-slate-800'>
        <div>
          <div className='flex gap-2 items-center'>
            <img src="./location.gif" alt="location" className='h-10 w-10' />
            <h1 className='gradient-text text-xl'>Location</h1>
          </div>
          <p className='ml-12 mt-2'> 
            <a target="_blank" href="https://www.google.com/maps/place/SRM+Institute+Of+Science+And+Technology/@13.0322541,80.1807376,15z/data=!4m6!3m5!1s0x3a5266d11f9ca625:0xf77d1733be7b5b74!8m2!3d13.0322541!4d80.1807376!16s%2Fg%2F1tdvsr4b?entry=ttu">
              SRM Institute of Science and Technology Ramapuram Campus <br />
              Bharathi Salai, Ramapuram, Chennai - 600 089.
            </a>
          </p>
        </div>
        <div>
          <a target="_blank" href='https://www.instagram.com/srmcampuslife_fsh?igsh=MTEwdzNpcXR2dGhzdA==' className='flex items-center gap-2'>
            <img src="./insta.gif" alt="insta" className='h-12 w-12'/>
            <h1 className='gradient-text'>Follow Us</h1>
          </a>
        </div>
        <div className='flex items-center creation justify-center absolute bottom-3'>
          <a target="a_blank" href="https://www.instagram.com/n_k_0_8_?igsh=Z2Y0amZpems1dHln" className='bg-black bg-opacity-70 p-1 px-3 rounded-xl'>Created By <span className='text-blue-700 underline'>Nirmal Kumar</span></a>
        </div>
      </div>
    </div>
  )
}

export default Contact