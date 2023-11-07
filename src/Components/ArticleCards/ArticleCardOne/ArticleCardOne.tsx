import React, { useEffect, useState } from 'react';
import './ArticleCardOne.css'


function ArticleCardOne() {
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
    <div className={`article-card-one ${visible ? 'fade-in' : ''}`}>
      <div>LOREM IPSUM AHAHAHAHAH</div>
    </div>
  );
}

export default ArticleCardOne;
