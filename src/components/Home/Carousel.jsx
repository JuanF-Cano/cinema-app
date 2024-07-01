import React from "react";
import ItemCard from "../ItemCard/ItemCard"

const moviesCarousel = ({ movies,type }) => {
  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {movies.slice(0, 10).map((movie) => (
          <ItemCard movie={movie} key={movie.id} type={type}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default moviesCarousel;
