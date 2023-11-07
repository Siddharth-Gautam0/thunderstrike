import React, { useEffect, useState } from 'react';
import './Projects.css'


function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set a timer to hide it after a certain time (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200); 

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <div className={`projects ${visible ? 'fade-in' : ''}`}>
      <div>LOREM IPSUM AHAHAHAHAH</div>
    </div>
  );
}

export default Projects;
