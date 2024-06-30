// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemInfoPage from "./pages/ItemInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/people" element={<PeoplePage />} /> */}
        <Route path="/details/:type/:id" element={<ItemInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
