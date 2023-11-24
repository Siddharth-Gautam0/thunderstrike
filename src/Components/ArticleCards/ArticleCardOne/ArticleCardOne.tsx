import React, { useEffect, useState } from 'react';
import './ArticleCardOne.css'
import { ArticleInfo } from '../../ProjectsWindow/ArticleData';
import { cursorTo } from 'readline';


function ArticleCardOne(props: ArticleInfo) {
  const [hovered, setHovered] = useState(false);


  const imagePath = require(`${props.imagePath}`);

  return (
    <div
      className={`bgImage ${hovered ? 'hoveredImage' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(props.clickUrl, "_blank")
    }
    >
      <img src={imagePath} alt="Articles" className="fitImage" />
      <div className='imageContainer'>
        <h1 style={{['--shadow-color' as any]: props.textGlow ?? 'gray' }} className={`imageHeading ${hovered ? 'hideText' : ''}`}>{props.title}</h1>
      </div>
      {hovered && <div className={`${hovered ? 'centerText' : 'hideText2'}`}>{props.description}</div>}
    </div>
  );
}

export default ArticleCardOne;
