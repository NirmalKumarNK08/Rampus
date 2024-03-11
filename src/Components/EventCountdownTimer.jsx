import React, { useState, useEffect } from 'react';

const EventCountdownTimer = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
      const eventDate = new Date('2024-03-30T00:00:00');

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        setCountdown('The event starts!!');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(
          <div className='flex gap-5 text-center time'>
            <div className='flex flex-col'>{days} : <span style={{ marginRight: "2em", fontSize: 'medium' }}>days</span></div>
            <div className='flex flex-col'>{hours} : <span style={{ marginRight: "2em", fontSize: 'medium' }}>hours</span></div>
            <div className='flex flex-col'>{minutes} : <span style={{ marginRight: "2em", fontSize: 'medium' }}>mins</span></div>
            <div className='flex flex-col'>{seconds} <span style={{ fontSize: 'medium' }}>secs</span></div>
          </div>
        );
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return <div className='mt-1 -z-10 md:font-extrabold md:text-3xl bold opacity-80 rounded-xl p-1'>{countdown}</div>;
};

export default EventCountdownTimer;
