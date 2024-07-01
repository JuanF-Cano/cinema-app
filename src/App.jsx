import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemInfoPage from "./pages/ItemInfoPage";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <Router>
      <Routes>
      {/*
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/people" element={<PeoplePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:type/:id" element={<SearchPage />} />
        <Route path="/details/:type/:id" element={<ItemInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
