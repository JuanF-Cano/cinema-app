import { useContext, useEffect, useState } from "react"
import { Context } from '../../pages/SearchPage'
import './SearchBar.css'
import { useParams, Link, useNavigate } from "react-router-dom"
import searchAPI from "../SearchBarM1/apiManage"

function Result({ result, type, onClick }) {
  return (
    <Link
      to={`/details/${type}/${result.id}`}
      className="result-link"
      onClick={onClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${
          result.poster_path || result.profile_path
        }`}
        alt={result.title || result.name}
      />
      <h4>{result.title || result.name}</h4>
    </Link>
  );
}

function SearchInput({ search, setSearch, handleKeyPress }) {
  return (
    <input
      type="text"
      className="search-input"
      value={search}
      placeholder="Buscar..."
      onChange={(evento) => setSearch(evento.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

let primary = 0;//Si se inicia la pagina por primer vez
function SearchBar() {
  const [ search, setSearch ]= useContext(Context);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { type, id } = useParams();
  if ((primary==0)) {//Si es la primera vez que ejecuta la pagina...
    setSearch(id);
    primary++;
  }
  
  const handleSearch = () => {
    navigate(`/search/${type}/${search}`);
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (search.length >= 1) {
        const params = { query: search };
        const endpoint = `search/${type}`;
        const data = await searchAPI(endpoint, params);
        setResults(data.slice(0, 2));
      } else {
        setResults([]);
      }
    };
    fetchResults();
  });

  const handleResultClick = () => {
    setResults([]);
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <SearchInput
          search={search}
          setSearch={setSearch}
        />
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      <div className="results-container">
        {results.map((result) => (
          <Result
            key={result.id}
            result={result}
            type={type}
            onClick={handleResultClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
