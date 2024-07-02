import React from "react";
import ResultsPage from "../components/NavBarM1/ResultsPage";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import '../components/NavBarM1/SearchBar.css';

export const Context = React.createContext()
  
function SearchPage() {

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