import React from 'react'
import { Link } from 'react-router-dom';

const Events = () => {
   const card = 'md:w-1/4 bg-white bg-opacity-80 gap-2 rounded-xl py-8 px-6 text-black flex flex-col justify-center items-center';
  const cardStyle = 'flex flex-col transition-all duration-300 ease-in-out text-center w-full cursor-pointer items-center justify-center gap-1 h-60 bg-white bg-opacity-70 text-black rounded-xl px-5 py-2';
  return (
    <div className='w-full flex relative flex-col items-center'>
      <h1 className='text-3xl gradient-text mt-10'>OFF-STAGE EVENTS</h1>
      <div className='w-full'>
         <h1 className='font-bold text-xl md:text-2xl text-center underline mt-8'>Overall Event Coordinators</h1>
         <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Mahendra</p>
               <p className='text-lg'>9360378459</p>
            </div>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Prabhagar</p>
               <p className='text-lg'>7358441976</p>
            </div>
         </div>
      </div>
      <div className='grid md:grid-cols-2 container-element grid-cols-1 lg:grid-cols-3 place-items-center gap-5 h-auto p-10'>
         <Link to="/adzap" className={cardStyle}>
            <h1 className='font-bold text-2xl'>ADZAP</h1>
            <p className='text-center'>Express, enact, and engage with creativity in Adzap!</p>
         </Link>
         <Link to="/connections" className={cardStyle}>
            <h1 className='font-bold text-2xl'>CONNEXION</h1>
            <p className='text-center'>Connexion, where connections speak!</p>
         </Link>
         <Link to="/flameless-cooking" className={cardStyle}>
            <h1 className='font-bold text-center text-2xl'>FLAMELESS COOKING</h1>
            <p className='text-center'>Where creativity meets the flame of innovation!</p>
         </Link>
         <Link to="/incredible-srm" className={cardStyle}>
            <h1 className='font-bold text-2xl'>TALENT HUNT</h1>
            <p className='text-center'>Unleashing stars in the making!</p>
         </Link>
         <Link to="/treasure-hunt" className={cardStyle}>
            <h1 className='font-bold text-2xl'>TREASURE HUNT</h1>
            <p className='text-center'>Unravel the mysteries, claim your prize!</p>
         </Link>
         <Link to="/ipl-auctions" className={cardStyle}>
            <h1 className='font-bold text-2xl'>IPL AUCTIONS</h1>
            <p className='text-center'>Where strategies meet the big league!</p>
         </Link>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>ON-STAGE EVENTS</h1>
      <div className='w-full'>
         <h1 className='font-bold text-xl md:text-2xl text-center underline mt-8'>Overall Event Coordinators</h1>
         <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Susmitha</p>
               <p className='text-lg'>8667213629</p>
            </div>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Joshua</p>
               <p className='text-lg'>7200060423</p>
            </div>
         </div>
      </div>
      <div className='grid md:grid-cols-2 container-element grid-cols-1 lg:grid-cols-3 place-items-center gap-5 h-auto p-10'>
         <Link to="/group-dance" className={cardStyle}>
            <h1 className='font-bold text-2xl'>GROUP DANCE</h1>
            <p className='text-center'>Harmonizing movements, creating magic!</p>
         </Link>
         <Link to="/adaptune" className={cardStyle}>
            <h1 className='font-bold text-2xl'>ADAPTUNE</h1>
            <p className='text-center'>Rhythm, unity, match it with dance!</p>
         </Link>
         <Link to="/singing" className={cardStyle}>
            <h1 className='font-bold text-center text-2xl'>SINGING</h1>
            <p className='text-center'>Let your voice be the melody of the moment!</p>
         </Link>
         <Link to="/mime" className={cardStyle}>
            <h1 className='font-bold text-2xl'>MIME</h1>
            <p className='text-center'>Express without words, perform with your heart!</p>
         </Link>
         <Link to="/channel-surfing" className={cardStyle}>
            <h1 className='font-bold text-2xl'>CHANNEL SURFING</h1>
            <p className='text-center'>Performers as channels to remote-like instructions!</p>
         </Link>
         <Link to="/mr-ms-rampus" className={cardStyle}>
            <h1 className='font-bold text-2xl'>MR & MS RAMPUS</h1>
            <p className='text-center'>Strut Your Style!</p>
         </Link>
      </div>
      <div className='flex items-center px-10 justify-center'>
         <Link to="/music-band" className={cardStyle}>
            <h1 className='font-bold text-2xl'>MUSIC BAND</h1>
            <p className='text-center'>Make your instruments speak the language of harmony!</p>
         </Link>
      </div>

      <h1 className='text-3xl gradient-text mt-10'>ONLINE EVENTS</h1>
      <div className='w-full'>
         <h1 className='font-bold text-xl md:text-2xl text-center underline mt-8'>Overall Event Coordinators</h1>
         <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Kuldeep</p>
               <p className='text-lg'>9600014546</p>
            </div>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Balagopal</p>
               <p className='text-lg'>8610387253</p>
            </div>
         </div>
      </div>
      <div className='grid md:grid-cols-2 container-element grid-cols-1 lg:grid-cols-4 place-items-center gap-5 h-auto p-10'>
         <Link to="/meme-creation" className={cardStyle}>
            <h1 className='font-bold text-2xl'>MEME CREATION</h1>
            <p className='text-center'>Let your creativity speak through memes!</p>
         </Link>
         <Link to="/photography" className={cardStyle}>
            <h1 className='font-bold text-2xl'>PHOTOGRAPHY</h1>
            <p className='text-center'>Capture the world through your lens!</p>
         </Link>
         <Link to="/short-film" className={cardStyle}>
            <h1 className='font-bold text-center text-2xl'>SHORT FILM</h1>
            <p className='text-center'>Tell a story in every frame!</p>
         </Link>
         <Link to="/logo-designing" className={cardStyle}>
            <h1 className='font-bold text-2xl'>LOGO DESIGNING</h1>
            <p className='text-center'>Crafting identities, one design at a time!</p>
         </Link>
      </div>
      <div className='px-10'>
         <Link to="/reels-making" className={cardStyle}>
            <h1 className='font-bold text-2xl'>REELS MAKING</h1>
            <p className='text-center'>Bring moments to life through reels!</p>
         </Link>
      </div>
      
      <h1 className='text-3xl gradient-text mt-10'>ONLINE GAMES</h1>
      <div className='w-full'>
         <h1 className='font-bold text-xl md:text-2xl text-center underline mt-8'>Overall Event Coordinators</h1>
         <div className='flex flex-col justify-center items-center w-full md:flex-row mt-5 gap-5'>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Karthick</p>
               <p className='text-lg'>9677113775</p>
            </div>
            <div className={`${card}`}>
               <p className='text-2xl font-bold'>Maneesh</p>
               <p className='text-lg'>8939145090</p>
            </div>
         </div>
      </div>
      <div className='grid md:grid-cols-2 container-element grid-cols-1 lg:grid-cols-4 place-items-center w-full gap-5 h-auto p-10'>
         <Link to="/bgmi" className={cardStyle}>
            <h1 className='font-bold text-2xl'>BGMI</h1>
            <p className='text-center'>Aim, Shoot, Win!</p>
         </Link>
         <Link to="/fifa" className={cardStyle}>
            <h1 className='font-bold text-2xl'>FIFA</h1>
            <p className='text-center'>Score Your Victory!</p>
         </Link>
         <Link to="/valorent" className={cardStyle}>
            <h1 className='font-bold text-center text-2xl'>VALORENT</h1>
            <p className='text-center'>Battle for Glory!</p>
         </Link>
         <Link to="/stumble-guys" className={cardStyle}>
            <h1 className='font-bold text-2xl'>STUMBLE GUYS</h1>
            <p className='text-center'>Race to the Finish!</p>
         </Link>
      </div>
    </div>
  )
}

export default Events