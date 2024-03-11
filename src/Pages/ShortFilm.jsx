import React from 'react'

const ShortFilm = () => {
  const card = 'md:w-1/4 bg-black bg-opacity-90 gap-2 rounded-xl py-8 px-6 text-white flex flex-col justify-center items-center';
  return (
    <div className='w-full h-auto flex flex-col mt-2 sm:mt-0 md:justify-start items-center'>
      <h1 className='text-3xl mt-20 md:mt-10 gradient-text text-center font-extrabold'>MEME CREATION</h1>
      <div className='h-auto bg-white text-black bg-opacity-75 rounded-xl shadowContainer w-5/6 mb-20 mt-5 flex flex-col items-center justify-center p-3 pb-8'>
        {/* <img src="./codeofbattle.gif" alt="codeofbattle" className='h-44 w-44'/> */}
        <h1 className='font-bold mt-5 mb-2 underline text-2xl md:text-3xl'>RULES & REGULATIONS</h1>
        <div className='px-5 text-lg flex flex-col gap-2'>
          <div>
            <p className='font-bold text-xl'>ELIGIBILITY:</p>
          </div>
          <p>{"->"} Participants can submit individual or group entries. </p>
          <p>{"->"} Each participant or group can submit only one entry. </p>
          <p>{"->"} All submissions must be original work created by the participants.</p>
          <div>
            <p className='font-bold mt-5 text-xl'>SUBMISSION GUIDELINES:</p>
          </div>
          <p>{"->"} Entries must be short films with a maximum duration of 15 mins max.</p>
          <p>{"->"} Films can be of any genre (e.g., drama, comedy, documentary, animation).</p>
          <p>{"->"} Submissions must be made in digital format (preferred formats include
                mp4, .mov, or .avi). A copy of it should be stored in a pen drive and submitted to the respective heads.</p>
          <p>{"->"} Each submission must include a title, credits (including the names of participants and their roles), and a brief synopsis (not exceeding 150 words).</p>
          <div>
            <p className='font-bold mt-5 text-xl'>CONTENT GUIDELINES:</p>
          </div>
          <p>{"->"} Submissions must adhere to the college's code of conduct and must not contain any material that is offensive, defamatory or violates any laws.</p>
          <p>{"->"} Participants are responsible for obtaining all necessary permissions for any copyrighted material used in their films, including music, images, and video clips.</p>
          <p>{"->"} Any language used in the film must be appropriate for a college audience.</p>
          <div>
            <p className='font-bold mt-5 text-xl'>JUDGING CRITERIA:</p>
          </div>
          <p>{"->"} Entries will be judged based on creativity, originality, technical proficiency, storytelling, and overall impact.</p>
          <p>{"->"} The decision of the judging panel will be final and binding.</p>
          <div>
            <p className='font-bold mt-5 text-xl'>INTELLECTUAL PROPERTY:</p>
          </div>
          <p>{"->"} Participants retain ownership of their films but grant the college the right to screen winning entries during the festival and for promotional purposes related to the festival.</p>
          <p>{"->"} The college reserves the right to disqualify any entry that infringes upon the intellectual property rights of others.</p>
        </div>
        <h1 className='font-bold text-2xl md:text-3xl text-center underline mt-8'>EVENT COORDINATORS</h1>
        <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-xl font-bold'>Mohit Isai</p>
               <p className='text-sm'>9942266076</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ShortFilm