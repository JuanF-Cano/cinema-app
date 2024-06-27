import React from 'react';
import './SearchBarM1.css';
import { useState } from 'react';
import SearchBar from './MiniComponents/SearchBar';
import SearchResults from './MiniComponents/SearchResults';


function SearchBarM1(){
    // Estado para guardar los resultados de la busqueda
    const [results, setResults] = useState([]);
    // console.log(results)
    return (
        <div className="search-bar-container">
            <div>
                <SearchBar setResults={setResults} />
            </div>
            <div>
                <SearchResults results={results} />
            </div>
        </div>
    );
}


export default SearchBarM1;