import React, { useEffect, useState } from 'react';
import './Projects.css';
import ParticlesFloating from '../ParticlesFloating/ParticlesFloating';
import ProjectCarousel from '../ProjectsWindow/ProjectCarousel';
import ZoomInOutCircle, { ZoomInOutCircleProps } from '../Transitions/ZoomInOutCircle/ZoomInOutCircle';

function Projects(props?: ZoomInOutCircleProps) {
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
    <ZoomInOutCircle {...props}></ZoomInOutCircle>
      <div className={`projects ${visible ? 'fade-in' : ''}`}>
        {/* TODO: Make this a carousel */}
        <ProjectCarousel /> 
        
        <div>
          <ParticlesFloating />
        </div>
      </div>
    </div>
  );
}

export default Projects;
