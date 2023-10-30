import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Cursor/Cursor.css'
import CustomCursor from './Components/Cursor/Cursor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<></>} />
        <Route path="/users" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
