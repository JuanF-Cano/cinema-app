// src/App.js
import CategoryBar from './components/CategoryBar/CategoryBar';
import React, { useState } from 'react';

export const Context = React.createContext()

function App() {
  const [selectCategories, setSelectCategories] = useState([]);
  return (
    <Context.Provider value={[selectCategories, setSelectCategories]}>
      {selectCategories.map((filter, index) => (
        <div key={index}>
          <p>{filter}</p>
      </div>
      ))}
    <div className='App'>
    <CategoryBar />
        {/* <Route path="/" element={<HomePage />} />
    <Router>
    <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/people" element={<PeoplePage />} />
        </Routes>
        </Router>
        <Route path="/item/:id" element={<ItemInfoPage />} /> */}
        </div>
        </Context.Provider>
  );
}

export default App;
