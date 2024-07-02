import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({movie, type}) {
  return (
      <Link to={`/${type}/${movie.id}`}
      className="item-card">
      <img
        className="item-card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path?movie.poster_path:movie.profile_path}`}
        alt={movie.title}
      />
{/*       <div className="content-item-info"> Titulo de l
        <div className="item-title">{movie.title}</div>
      </div> */}
    </Link>
  );
}

export default ItemCard;
