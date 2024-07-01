import React from "react";
import { useStateContext } from "../context/stateContext";
import ResultsPage from "../components/ResultsPage";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import '../components/SearchBar/SearchBar.css';

export const Context = React.createContext()
  
function SearchPage() {
  const [search,setSearch]= React.useState("");
  const [selectCategories, setSelectCategories] = React.useState([])
  const { searchType, setSearchType, query, setQuery, id, setId } = useStateContext();

  return (
    <div className='Search'>
      <NavBarM1 />
      <div>
        <ResultsPage />
      </div>
    </div>
  );
}

export default SearchPage;