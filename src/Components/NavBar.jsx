import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiCaptainHatProfile } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

const NavBar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const links = "flex items-center gap-3 cursor-pointer"
  return (
    <div>
      <div className='m-w-full relative z-30 h-1 md:h-auto flex justify-center'>
         <a href='/'>
            <img src="./logo.png" alt="logo" className='md:h-16 md:w-38 h-14 w-36 mt-4 absolute left-2'/>
         </a>
         <RiMenu3Fill onClick={() => setMenuOpen(true)} className={`fixed z-10 ${menuOpen ? "hidden" : "flex"} h-12 rounded-full w-12 p-2 bg-black bg-opacity-70 transition-all duration-300 ease-in-out right-5 sm:right-5 mt-7 text-3xl cursor-pointer`}/>
         <MdClose onClick={() => setMenuOpen(false)} className={`fixed z-10 ${!menuOpen ? "hidden" : "flex"} h-12 rounded-full w-12 p-2 bg-black bg-opacity-70 transition-all duration-300 ease-in-out right-5 sm:right-5 mt-7 text-3xl cursor-pointer`}/>
         <div className={`fixed top-0 right-0 ${menuOpen ? "flex" : "hidden"} transition-all duration-500 ease-in-out flex flex-col pt-24 px-8 w-52 gap-7 text-lg h-full bg-gray-700`}>
            <a onClick={() => setMenuOpen(false)} className={links} href="/"><IoHome /> Home</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/sponsors"><FaHandshake /> Sponsors</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/team"><RiTeamFill /> Team</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/house"><GiCaptainHatProfile /> House</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/events"><MdEmojiEvents /> Events</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/about"><FaExclamationCircle /> About</a>
            <a onClick={() => setMenuOpen(false)} className={links} href="/contact"><MdConnectWithoutContact /> Contact</a>
         </div>
      </div>
      <div className='w-full h-auto flex px-5 items-center justify-center flex-col'>
         <p className='text-xl sm:text-2xl text-center mt-20 md:mt-14 flex gradient-text'>
            SRM INSTITUTE OF SCIENCE AND TECHNOLOGY <br />
            FACULTY OF SCIENCE AND HUMANITIES <br />
         </p>
         <img src="campusLife.jpeg" alt="" className='w-60 mt-2'/>
      </div>
    </div>
  )
}

export default NavBar