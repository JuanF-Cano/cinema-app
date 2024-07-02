import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemInfoPage from "./pages/ItemInfoPage";
import SearchPage from "./pages/SearchPage";
import { StateContext } from './context/stateContext';


function App() {
  return (
    <StateContext>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:type/:search" element={<SearchPage />} />
        <Route path="/:type/:id" element={<ItemInfoPage />} />
      </Routes>      
    </Router>
    </StateContext>
  );
}

export default App;
