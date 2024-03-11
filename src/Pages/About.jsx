import React from 'react'

const About = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center pb-10 px-5'>
      <div className="w-full md:w-3/4 bg-white bg-opacity-70 mt-10 text-black py-5 rounded-3xl h-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold gradient-tex">RAMPUS 4.0</h1>
        <p className="md:px-20 text-center px-5 md:text-lg">
          Since Rampus is conducted solely on the basis of competition and celebrating victories coming after the students are divided into 4 teams which all compete on the stage to provide unlimited entertainment and thrill.
        </p>
        {/* <h1 className='font-bold text-2xl mt-5'>COMMON RULES</h1>
        <div className='w-full h-auto'>
          <p>{"-> "} If a team is not present during the conduction ofevents, the team will be disqualified, andcoordinators are not responsible.</p>
          <p>{"-> "} Participants from any department are allowed to team up(only from S & H)</p>
          <p>{"-> "} </p>
        </div> */}
      </div>
      <div className="w-full md:w-3/4 bg-white bg-opacity-70 text-black py-5 rounded-3xl mt-10 h-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold gradient-tex">RAMPUS 3.0</h1>
        <p className="md:px-20 text-center px-5 md:text-lg">
          Rampus 3.0 held on 2023, was an immense success, with 3000 floating audience, influencers and walk-in guests. There was a complete media coverage of the event by advertising our sponsors. Both the days of Rampus was fun filled with various talents and participants.
        </p>
      </div>
      <div className="w-full md:w-3/4 bg-white bg-opacity-70 text-black py-5 rounded-3xl mt-10 h-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold gradient-tex">RAMPUS 2020</h1>
        <p className="md:px-20 text-center px-5 md:text-lg">
          Rampus 2020 was a humongous success that garnered the view and attention of multiple category of audience among the students, sponsorship agents and even among the other college students. Visibility of Rampus is undoubted, as the sponsors benefited greatly. Most importantly students of SRM who had both participated and even as audience had a great time enjoying the event, which was the ultimate aim of Rampus.
        </p>
      </div>
    </div>
  )
}

export default About