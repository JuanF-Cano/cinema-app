// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react'
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryBar from './components/CategoryBar/CategoryBar';

export const Context = React.createContext()
function App() {
  const [search,setSearch]= useState("");
const [selectCategories, setSelectCategories] = useState([])
  
  return (
    <div className='App'>
      <Context.Provider value={[search,setSearch]}>
      <SearchBar/>
      {console.log("Busqueda: "+search)}
      </Context.Provider>

      <Context.Provider value={[selectCategories, setSelectCategories]}>
        <CategoryBar/>
      </Context.Provider>
    </div>
  );
}

export default App;
