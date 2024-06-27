// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  
  return (
    <div className='App'>
      <SearchBar/>
      <p>hola</p>
    </div>
  );
}

export default App;
