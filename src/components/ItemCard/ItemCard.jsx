import React from "react";
import "./ItemCard.css";

function ItemCard({movie}) {
  return (
    <div
      className="item-card"
      onClick={() => {
        window.location.href = `/movie/${movie.id}`;
      }}
    >
      <img
        className="item-card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path?movie.poster_path:movie.profile_path}`}
        alt={movie.title}
      />
      <div className="content-item-info">
        <div className="item-title">{movie.title}</div>
      </div>
    </div>
  );
}

export default ItemCard;
