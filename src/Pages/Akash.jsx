import React from 'react'

const Akash = () => {
  const card = 'md:w-2/5 w-full bg-black bg-opacity-90 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex px-5 mt-5 items-center justify-center flex-col'>
      <div className='w-full md:w-4/5 akash-glow p-5 mb-10 flex gap-3 items-center justify-center rounded-3xl flex-col bg-sky-600 bg-opacity-70 mt-5 py-10'>
        <h1 className='text-4xl z-10 font-bold text-center'>AKASH</h1>
        <img src="akashLogo.jpeg" alt="" className='sm:h-44 h-36 rounded-full'/>
        <p className='px-5 md:px-20 text-lg text-center'>“Swifter,Higher and Stronger“ is the motto of the Akash House; it symbolizes unity and exuberance of the human spirit. The power to inspire oneself.</p>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl underline font-bold'>CAPTAIN</p>
               <img src="vithun.jpg" alt="" className='h-32 border-4 border-sky-700 my-2 rounded-full w-32'/>
               <p className='text-xl font-bold'>VIDHUN</p>
               <p className='text-sm'>(M.COM)</p>
            </div>
            <div className={`${card}`}>
               <p className='text-xl underline font-bold'>VICE CAPTAIN</p>
               <img src="bhavani.jpg" alt="" className='h-32 border-4 border-sky-700 my-2 rounded-full w-32'/>
               <p className='text-xl font-bold'>BHAVANI</p>
               <p className='text-sm'>(B.COM GEN.)</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Akash
