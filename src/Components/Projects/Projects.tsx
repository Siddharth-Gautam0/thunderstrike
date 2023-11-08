import React, { useEffect, useState } from 'react';
import './Projects.css';
import ParticlesFloating from '../ParticlesFloating/ParticlesFloating';
import ProjectCarousel from '../ProjectsWindow/ProjectCarousel';

function BlackOverlay() {
  return <div className="black-overlay" />;
}

function Projects() {
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
