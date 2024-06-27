// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  
  return (
    <div className='App'>
      <div className="container-Input">
        <input 
        onChange={handleChange}
        value={search} 
        placeholder="Search by"></input>
      </div>
    </div>
  );
}

export default App;
