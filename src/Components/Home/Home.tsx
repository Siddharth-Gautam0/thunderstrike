import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import './../../Components/Cursor/Cursor.css'
import './../NavBar/NavBar.css'
import CustomCursor from './../../Components/Cursor/Cursor';
import Navbar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar-container">
            <Navbar />
        </div>
        <Hero />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
