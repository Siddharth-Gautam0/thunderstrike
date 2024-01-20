import React, { useEffect, useState } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import './../../Components/Cursor/Cursor.css'
import './../NavBar/NavBar.css'
import CustomCursor from './../../Components/Cursor/Cursor';
import Navbar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import ArticleCardOne from '../ArticleCards/ArticleCardOne/ArticleCardOne';
import ZoomableCircle from '../Transitions/ZoomableCircle/ZoomableCircle';
import Projects from '../Projects/Projects';
import Contact from '../ContactUsPage/ContactScreen';


function App() {

  const handleScroll = (event: Event) => {
    window.scrollTo(0, 0)
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const modulesToShow = ["hero", "articles", "contact"]

  const [selectedModuleIndex, setSelectedModuleIndex] = useState<number>(0);

  const getNextModule = () => {
    setSelectedModuleIndex((selectedModuleIndex + 1) % modulesToShow.length)
  }

  const getPrevModule = () => {
    setSelectedModuleIndex((selectedModuleIndex - 1) % modulesToShow.length)
  }

  return (
      <header className="App-header">
        <div className="navbar-container">
            <Navbar />
        </div>
        {modulesToShow[selectedModuleIndex] == "hero" ? 
          <div className='hero-container'>
            <Hero onCircleWidthExceedsScreenWidth={getNextModule} />
          </div> :
          null
        }
        {modulesToShow[selectedModuleIndex] == "articles" ? 
          <Projects {...{onCircleWidthExceedsScreenWidth: getNextModule, onCircleWidthCollapses: getPrevModule}}></Projects>
          :
          null
        }
        {modulesToShow[selectedModuleIndex] == "contact" ? 
          <Contact {...{onCircleWidthExceedsScreenWidth: getNextModule, onCircleWidthCollapses: getPrevModule}}></Contact>
          :
          null
        }    
      </header>
  );
}

export default App;
