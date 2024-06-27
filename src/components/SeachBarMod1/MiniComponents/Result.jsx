import react from "react";
import './Result.css';

function Result({title,poster_path }) {
    return(
        <div className="result-container">
            <div className="result-image">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </div>
            <div className="result-title">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Result;