import React, { useEffect, useState } from 'react';
import './Contact.css';
import ParticlesContactScreen from '../ParticlesFloating/ParticlesContactScreen';
import ProjectCarousel from '../ProjectsWindow/ProjectCarousel';
import ZoomInOutCircle, { ZoomInOutCircleProps } from '../Transitions/ZoomInOutCircle/ZoomInOutCircle';
import ContactUsForm from './ContactUsForm/ContactUsForm';

function Contact(props?: ZoomInOutCircleProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set a timer to hide it after a certain time (e.g., 200 milliseconds)
    const timer = setTimeout(() => {
      setVisible(true);
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
    {/* <ZoomInOutCircle {...props}></ZoomInOutCircle> */}
      <div className={`projects ${visible ? 'fade-in' : ''}`}>
        {/* TODO: Make this a carousel */}
        <ContactUsForm /> 
        
        <div>
          <ParticlesContactScreen />
        </div>
      </div>
    </div>
  );
}

export default Contact;
