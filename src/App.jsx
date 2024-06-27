// src/App.js
import CategoryBar from './components/CategoryBar/CategoryBar';
import React, { useState } from 'react';

export const Context = React.createContext() //Se utiliza el metodo React.createContext para inicializar el contexto global
//se exporta Context para que se pueda acceder desde otros componentes

function App() {
  const [selectCategories, setSelectCategories] = useState([]);//este es el estado que controla el array de categorias seleccionadas por el usuario
  return (
    <Context.Provider value={[selectCategories, setSelectCategories]}>{/*Usas el Context.Provider */}
    {/*se define como elemento padre del componente al context provider, lo que nos permite extraer datos trabajos en otros componentes
    Se define el selectCategorias como el valor del contexto*/}
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
