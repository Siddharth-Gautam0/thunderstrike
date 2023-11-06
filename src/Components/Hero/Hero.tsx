import { useState, useEffect } from 'react';
import './Hero.css';
import loop6 from './loop6.mp4'
import loop8 from './loop8.mp4'
import TextTransition, { presets } from 'react-text-transition';
import ZoomableCircle, { ZoomableCircleProps } from '../Transitions/ZoomableCircle/ZoomableCircle';

export type HeroProps = ZoomableCircleProps & {
  //other props
}

function Hero(props?: HeroProps) 
 {
  const H5_TEXTS = ['WEB DEVELOPER', 'WRiTER', 'THiNKER'];
  const [h5Index, setH5Index] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setH5Index((index) => index + 1),
      2500
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
    <ZoomableCircle onCircleWidthExceedsScreenWidth={props?.onCircleWidthExceedsScreenWidth} /> 
      <div className="hero-vid">
          <video autoPlay muted loop>
              <source src={loop8} type="video/mp4" />
          </video>
      </div>
      <div className="hero-text">
          <div>
              <h1>
                  SIDDHARTH GAUTAM
              </h1>
          </div>
          <div>
              <h5>
              <TextTransition className='text-align'>{H5_TEXTS[h5Index % H5_TEXTS.length]}</TextTransition>
              </h5>
          </div>
          
      </div>
    </>
  );
};

export default Hero;
