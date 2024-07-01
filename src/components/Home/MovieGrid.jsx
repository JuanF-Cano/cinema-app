const MovieGrid = ({ movies }) => {
  return (
    <div className="cards-container">
      {movies.map((movie) => (
        <div
          className="card"
          key={movie.id}
          onClick={() => {
            window.location.href = `/movie/${movie.id}`;
          }}
        >
          <img
            className="card__img"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="card__titulo">{movie.title}</div>
          <div className="card__fecha">{movie.release_date}</div>
          <div className="card__calificacion">{movie.vote_average}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
