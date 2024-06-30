import React, { useState } from "react";
import searchAPI from "./apiManage";
import { useEffect } from "react";
import "./SearchBarM1.css";
import { Link } from "react-router-dom";

function Result({ result, type }) {
  return (
    <Link to={`/details/${type}/${result.id}`} className="result-link">
      <>
        <img
          src={`https://image.tmdb.org/t/p/w200${
            result.poster_path || result.profile_path
          }`}
          alt={result.title || result.name}
        />
        <h4>{result.title || result.name}</h4>
      </>
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

// SearchInput recibe una funcion setSearch que se encarga de actualizar el estado de search
function SearchInput({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-input"
      value={search}
      placeholder="Buscar..."
      onChange={(evento) => setSearch(evento.target.value)}
    />
  );
}

function SearchBarM1() {
  //Estado para guardar la busqueda
  const [search, setSearch] = useState("");

  //Estado para guardar el tipo de busqueda
  const [typeSearch, setTypeSearch] = useState("movie");

  //Estado para guardar los resultados de la busqueda
  const [results, setResults] = useState([]);

  //useEffect para hacer la busqueda
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

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <SelectionTypeSearch
          setTypeSearch={setTypeSearch}
        ></SelectionTypeSearch>
        <SearchInput search={search} setSearch={setSearch}></SearchInput>
        <button className="search-button">Buscar</button>
      </div>
      <div className="results-container">
        {results.map((result) => (
          <Result key={result.id} result={result} type={typeSearch}></Result>
        ))}
      </div>
    </div>
  );
}

export default SearchBarM1;
