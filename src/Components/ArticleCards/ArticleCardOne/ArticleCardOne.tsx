import React, { useEffect, useState } from 'react';
import './ArticleCardOne.css'


function ArticleCardOne() {
  const [fadeIn, setFadeIn] = useState(false);

  // Use an effect hook to set the fade-in class after mounting the component
  useEffect(() => {
    setFadeIn(true);
  }, []);

  
  return (
    <div className={`article-card-one ${fadeIn ? "fade-in" : ""}`}>
      <div>
        LOREM IPSUM AHAHAHAHAH
      </div>
        
    </div>
  );
}

export default ArticleCardOne;
