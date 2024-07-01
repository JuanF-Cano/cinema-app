import React from "react";
import { useStateContext } from "../context/stateContext";
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import ResultsPage from "../components/ResultsPage";
import SearchComponent from "../components/SearchComponent";
export const Context = React.createContext()
  
function SearchPage() {
  const [search,setSearch]= React.useState("");
  const [selectCategories, setSelectCategories] = React.useState([])
  const { searchType, setSearchType, query, setQuery, id, setId } = useStateContext();

  return (
    <div className='Search'>
      <SearchComponent />
      <div>
        <ResultsPage />
      </div>
    </div>
  );
}

export default SearchPage;