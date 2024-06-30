import React from "react";
import ItemCard from "../ItemCard/ItemCard"

const moviesCarousel = ({ movies }) => {
  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {movies.slice(0, 10).map((movie) => (
          <ItemCard movie={movie} key={movie.id}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default moviesCarousel;
