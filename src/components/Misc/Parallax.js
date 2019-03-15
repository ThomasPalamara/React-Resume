import React, { useEffect } from 'react';
import london1 from 'img/london1.png';
import london2 from 'img/london2.png';
import london3 from 'img/london3.png';
import london4 from 'img/london4.png';
import londonBase from 'img/londonbase.png';

const Parallax = () => {
  useEffect(() => {
    function onscroll() {
      document.querySelector('.parallax').style.setProperty('--y', `${window.scrollY}px`);
    }

    window.addEventListener('scroll', onscroll, { capture: false, passive: true });
  });

  return (
    <div className="parallax">
      <img className="parallax-item moving" src={london1} alt="" />
      <img className="parallax-item moving" src={london2} alt="" />
      <img className="parallax-item moving" src={london3} alt="" />
      <img className="parallax-item moving" src={london4} alt="" />
      <img className="parallax-item" src={londonBase} alt="" />
    </div>
  );
};

export default Parallax;
