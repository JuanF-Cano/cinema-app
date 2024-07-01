import React from "react";
import ItemCard from "../ItemCard/ItemCard"

const moviesCarousel = ({ type }) => {
  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {type.slice(0, 10).map((movie) => (
          <ItemCard movie={movie} key={movie.id}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default moviesCarousel;
