import React, { useEffect } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import MovieGrid from '../components/Home/MovieGrid'
import getSimilarMovies from '../controllers/APIcalls'

export const Context = React.createContext()

function SearchPage() {
  const [similarMovies,setSimilarMovies]=useState([])

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const moviesData = await getSimilarMovies();
            setSimilarMovies(moviesData); // Assuming API response has a 'results' array
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    fetchMovies();
}, []);

  const [search,setSearch]= React.useState("");
  const [selectCategories, setSelectCategories] = React.useState([])

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

export default SearchPage;
