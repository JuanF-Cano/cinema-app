import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemInfoPage from "./pages/ItemInfoPage";
import SearchPage from "./pages/SearchPage";
import PeoplePage from "./pages/PeoplePage";
import Details from './pages/Filter';
import { StateContext } from './context/stateContext';


function App() {
  return (
    <StateContext>
    <Router>
      <Routes>
      {/*
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/people" element={<PeoplePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:type/:search" element={<SearchPage />} />
        <Route path="/:type/:id" element={<ItemInfoPage />} />
   {/*      <Route path="/details/people/:id" element={<PeoplePage />} /> */}
      </Routes>      
    </Router>
    </StateContext>
  );
}

export default App;
