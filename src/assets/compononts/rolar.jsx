import React, { useEffect, useState } from 'react';
import Flavourfullplate from './flavourfullplate';


function Rolar() {
  const [style, setStyle] = useState({ opacity: 0, transform: 'translateY(50px)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        const opacity = Math.min((scrollPosition - threshold) / 300, 1);
        const translateY = Math.max(50 - (scrollPosition - threshold) / 5, 0);
        setStyle({ opacity, transform: `translateY(${translateY}px)` });
      } else {
        setStyle({ opacity: 0, transform: 'translateY(50px)' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div data-scroll data-scroll-speed=".1" className='rolar_m'>
      <div className='rolar_1'>
        Bringing Flavorful
        <p> Traditions to Your Plate</p>
       
        <Flavourfullplate></Flavourfullplate>
      </div>
      <div className='rolar_2' style={style}>
        <img src="./plate.png" alt="Delicious Plate" />
      </div>
    </div>
  );
}

export default Rolar;
