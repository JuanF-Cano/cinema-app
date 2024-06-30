import React, { useState, useEffect } from "react";
import searchAPI from "./apiManage";
import "./SearchBarM1.css";
import { Link, useNavigate } from "react-router-dom";

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

function SelectionTypeSearch({ setTypeSearch }) {
  return (
    <select
      className="select-button"
      onChange={(evento) => setTypeSearch(evento.target.value)}
    >
      <option value="movie">Peliculas</option>
      <option value="tv">Series</option>
      <option value="person">Personas</option>
    </select>
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

function SearchBarM1() {
  const [search, setSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("movie");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (search.length >= 1) {
        const params = { query: search };
        const endpoint = `search/${typeSearch}`;
        const data = await searchAPI(endpoint, params);
        setResults(data.slice(0, 2));
      } else {
        setResults([]);
      }
    };
    fetchResults();
  }, [search, typeSearch]);

  const handleSearch = () => {
    navigate(`/search/${typeSearch}/${search}`);
    setSearch("");
  };

  const handleKeyPress = (evento) => {
    if (evento.key === "Enter") {
      handleSearch();
      setSearch("");
    }
  };

  const handleResultClick = () => {
    setResults([]);
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <SelectionTypeSearch setTypeSearch={setTypeSearch} />
        <SearchInput
          search={search}
          setSearch={setSearch}
          handleKeyPress={handleKeyPress}
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
            type={typeSearch}
            onClick={handleResultClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBarM1;
