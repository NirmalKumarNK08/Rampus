import React from 'react'

const Thrishul = () => {
  const card = 'md:w-2/5 w-full bg-black bg-opacity-90 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex px-5 mt-5 items-center justify-center flex-col'>
      <div className='w-full thrishul-glow md:w-4/5 p-5 mb-10 flex gap-3 items-center justify-center rounded-3xl flex-col bg-yellow-500 bg-opacity-70 mt-5 py-10'>
        <h1 className='text-4xl z-10 font-bold text-center'>THRISHUL</h1>
        <img src="thrishulLogo.jpeg" alt="" className='sm:h-44 h-36 rounded-full'/>
        <p className='px-5 md:px-20 text-lg text-center'>The Trishul, which signifies three aspects of consciousness is represented aptly in their motto “Will, wisdom and action”.</p>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl underline font-bold'>CAPTAIN</p>
               <img src="monica1.jpg" alt="" className='h-32 border-4 border-yellow-500 my-2 rounded-full w-32'/>
               <p className='text-xl font-bold'>MONICA</p>
               <p className='text-sm'>(M.COM)</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl underline font-bold'>VICE CAPTAIN</p>
               <img src="dinesh.jpg" alt="" className='h-32 border-4 border-yellow-500 my-2 rounded-full w-32'/>
               <p className='text-xl font-bold'>R DINESH KUMAR</p>
               <p className='text-sm'>(BCA)</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Thrishul
