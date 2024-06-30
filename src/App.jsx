import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemInfoPage from "./pages/ItemInfoPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

export const Context = React.createContext()
function App() {
  const [search,setSearch]= useState("");
const [selectCategories, setSelectCategories] = useState([])
  
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
