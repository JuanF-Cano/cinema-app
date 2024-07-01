import React from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryBar from '../components/CategoryBar/CategoryBar';

export const Context = React.createContext()
  
function SearchPage() {
  const [search,setSearch]= React.useState("");
  const [selectCategories, setSelectCategories] = React.useState([])

  return (
    <div className='Search'>
      <Context.Provider value={[search,setSearch]}>
        <SearchBar value={selectCategories}/>
      </Context.Provider>
      <Context.Provider value={[selectCategories, setSelectCategories]}>
        <CategoryBar/>
      </Context.Provider>
      {console.log(selectCategories)}
    </div>
  );
}

export default SearchPage;