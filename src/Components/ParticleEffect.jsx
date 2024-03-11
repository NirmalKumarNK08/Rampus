import React, { useEffect, useRef } from 'react';

const ParticleEffect = () => {
  const particleRef = useRef(null);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 2000 } },
          color: { value: '#fff' },
          shape: {
            type: 'edge',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 1 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 6,
            random: true,
            anim: { enable: true, speed: 10, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'top',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 3, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  
  

  return <div id="particles-js" className='w-full fixed h-full -z-10' ref={particleRef} />;
};

export default ParticleEffect;
