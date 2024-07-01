import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSearchResults } from '../service/TmdbApi';
import { useStateContext } from '../context/stateContext';

const SearchComponent = () => {
  const navigate = useNavigate();
  const { type, search } = useParams(); // Obtenemos los parámetros de la URL

  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { searchType, setSearchType, query, setQuery, id, setId } = useStateContext();

  // Establecemos el searchType basado en el parámetro de la URL 'type'
  useEffect(() => {
    if (type) {
      setSearchType(type);
    }
  }, [type]);

  // Establecemos el query basado en el parámetro de la URL 'search'
  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);

  // Ejecutamos la búsqueda cuando 'query' o 'searchType' cambian
  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const data = await fetchSearchResults(searchType, query);
          setResults(data.results.slice(0, 5)); // Limitamos a 5 resultados para el dropdown
          setShowDropdown(true); // Mostramos el dropdown con los resultados
        } catch (error) {
          console.error('Error fetching results:', error);
        }
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    };

    fetchData();
  }, [query, searchType]);

  // Maneja el evento de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    navigate(`/search/${searchType}/${query}`);
  };

  // Maneja el clic en un resultado de la búsqueda
  const handleResultClick = (result) => {
    setQuery(result.title || result.name);
    setShowDropdown(false);
    setId(result.id);
    navigate(`/${searchType}/${result.id}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div>
          <select className='select-button' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="movie">Películas</option>
            <option value="tv">TV Shows</option>
            <option value="person">Personas</option>
          </select>
        </div>
        <div className='input-button-container'>
          <input className='input-search'
            required
            type="text" 
            value={query} 
            onChange={(e) => (setQuery(e.target.value), setShowDropdown(true))} 
            placeholder="Buscar..."
          />
          <button className='submit-button' type="submit">Buscar</button>
        </div>
      </form>

      {showDropdown && results.length > 0 && (
        <ul className="search-dropdown">
          {results.map(result => (
            <li key={result.id} onClick={() => handleResultClick(result)}>
              <img className="a"
                src={`https://image.tmdb.org/t/p/w200${result.poster_path || result.profile_path}`}
                alt={result.title || result.name}
              />                
              {result.title || result.name}
              {searchType === 'person' && result.known_for_department && ` - ${result.known_for_department}`}
              {(searchType === 'movie' || searchType === 'tv') && result.release_date && ` (${result.release_date.split('-')[0]})`}
              {(searchType === 'movie' || searchType === 'tv') && result.first_air_date && ` (${result.first_air_date.split('-')[0]})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;