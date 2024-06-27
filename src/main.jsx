import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemCard from "./components/ItemCard/ItemCard.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemCard
      image="https://estaticos.elcolombiano.com/binrepository/770x702/0c0/1200d627/none/11101/CTTB/intensamente-2_43726637_20231110121500.jpg"
      title="Intensa mente 2"
      age="2024"
      gender="Infantil"
    />
  </React.StrictMode>,
)
