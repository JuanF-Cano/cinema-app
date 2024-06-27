import React, { useState, useEffect } from "react";
import "./ItemInfo.css";
import { getMovieDetails } from "../../controllers/APIcalls";

function ItemInfo(props) {
  const [movieDetails, setMovieDetails] = useState({
    img: "",
    title: "",
    year: "",
    director: "",
    description: ""
  });

  useEffect(() => {
    async function fetchData() {
      let response = await getMovieDetails(props.id);
      console.log(response);
      let imgPATH = response.poster_path;
      let imgURL = `https://image.tmdb.org/t/p/w500/${imgPATH}`;
      setMovieDetails({
        img: imgURL,
        title: response.title,
        year: response.release_date,
        director: response.director,
        description: response.overview
      });
    }

    fetchData();
  }, [props.id]);// asegura que no solo se ejecuta una vez sino cada vez que cambia el id

  return (
    <div className="view-details-container">
      <div className="view-details">
        {movieDetails.img && (
          <img src={movieDetails.img} alt={movieDetails.title} />
        )}
        <div className="details">
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.year}</p>
          <p>{movieDetails.director}</p>
          <p>{movieDetails.description}</p>
        </div>
      </div>
      <div className="related-content">
        <h2>Related Content</h2>
      </div>
    </div>
  );
}

export default ItemInfo;