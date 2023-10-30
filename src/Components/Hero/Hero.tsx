import React from 'react';
import './Hero.css';
import loop6 from './loop6.mp4'
function Hero() 
 {
  return (
    <div className="hero-container">
        <div className="hero-vid">
            <video autoPlay muted loop>
                <source src={loop6} type="video/mp4" />
            </video>
        </div>
        <div className="hero-text">
            <h1>SIDDHARTH GAUTAM</h1>
            <h5>WEB DEVELOPER</h5>
        </div>
    </div>
  );
};

export default Hero;
