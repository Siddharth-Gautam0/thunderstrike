import React from 'react';
import './NavBar.css';
import logo from './../../logo.svg';

export enum NavBarOptions {
    HOME,
    ARTICLES,
    PROJECTS,
    CONTACTUS
}

function Navbar() 
 {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      
      <div className="menu">
        <button className="transparent-button">HOME</button>
        <button className="transparent-button">ARTICLES</button>
        <button className="transparent-button">PROJECTS</button>
        <button className="transparent-button">BLOG</button>
      </div>
      <div className="contact">
        <button className ="contact-button">GET IN TOUCH</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
