import React from 'react'

const LogoDesigning = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>LOGO DESIGNING</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <p>{"->"} The design of the Logo must be an original work of creation.</p>
          <p>{"->"} Every participant can submit one entry only.</p>
          <p>{"->"} All technical details, including file formats, can be mentioned in the specification details itself.</p>
          <p>{"->"} Late submissions will not be considered.</p>
          <p>{"->"} The logo may include any colours.</p>
          <p>{"->"} The logo may be created with pencils, crayons, markers, and paint, or may be created with a computer drawing program.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Pranathi</p>
               <p className='text-sm'>8015394741</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LogoDesigning