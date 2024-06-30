import react from "react";
import { useState } from "react";
import Result from "./Result";
import './SearchResults.css';
function SearchResults({results}) {
    console.log(results);
    return(
        <div className="results-container">
            <div className="">
                {results.map((result) => (
                    console.log(result),
                    <Result key={result.id} {...result} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;