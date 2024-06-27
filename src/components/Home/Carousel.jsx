const Carousel = ({ movies }) => {
    return (
        <div className="carrusel-container">
            <div className="carrusel">
                {movies.slice(0, 6).map((movie) => (
                    <div
                        className="carrusel-item"
                        key={movie.id}
                        onClick={() => {
                            window.location.href = `/movie/${movie.id}`;
                        }}
                    >
                        <img
                            className="carrusel-item__img"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="carrusel-item__titulo">{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
