import React, { useEffect, useState } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import MovieGrid from '../components/Home/MovieGrid'
import searchAPI from "../components/SearchBarM1/apiManage";

export const Context = React.createContext()

function MoviesPage() {
  const [search,setSearch]= React.useState("");
  const [selectCategories, setSelectCategories] = React.useState([])
  const [results, setResults] = React.useState([])
  

  useEffect(() => {
    const fetchResults = async () => {
        let categories= selectCategories.join("&")
      if (search.length >= 1) {
        const params = { query: search };
        const endpoint = `search/${categories}`;
        const data = await searchAPI("movies", params);
        setResults(data.slice(0, 2));
      } else {
        setResults([]);
      }
    };
    fetchResults();
  }, [search, typeSearch]);


  return (
    <div className='Search'>
      <Context.Provider value={[search,setSearch]}>
        <SearchBar/>
      </Context.Provider>
      <Context.Provider value={[selectCategories, setSelectCategories]}>
        {/* {type == ("movies"||"tvShows")? <CategoryBar/> :undefined} */}
        <CategoryBar/>
      </Context.Provider>
      <MovieGrid/>

    </div>
  );
}

export default MoviesPage;
