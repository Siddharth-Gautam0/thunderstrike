import React, { useEffect, useState } from 'react';
import './Cursor.css'; // Import the CSS for your custom cursor
import Pokemon from './Images/Pokemon.png';
import Lightning5 from './Images/Lightning5.png';
import Lightning6 from './Images/Lightning6.png';
import Lightning7 from './Images/Lightning7.png';
import Lightning8 from './Images/Lightning8.png';



const images = [Lightning5, Lightning6, Lightning7, Lightning8];function CustomCursor() {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX -32, y: e.clientY -32 });
        };
        if (Math.random() < 0.3){
            setImageIndex((imageIndex + 1) % images.length);
        }
    
        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, [cursorPosition]);

  return (
    <div className="pokemon-cursor" style={{left: cursorPosition.x, top: cursorPosition.y, backgroundImage: `url(${images[imageIndex]})`}} />
  );
}

export default CustomCursor;