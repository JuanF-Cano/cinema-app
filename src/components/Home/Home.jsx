import { useEffect, useState } from "react";
import { getPopularMovies } from "../../controllers/APIcalls";
import './Home.css'


function HomePrincipalSeccion() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularMovies();
                console.log(moviesData)
                setMovies(moviesData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="home-principal-seccion">
            <div className="home-principal-seccion__titulo">Principales</div>
            <div className="home-principal-seccion__contenedor">
                <div className="home-principal-seccion_contenedor_titulo">Películas</div>
                <div className="home-principal-seccion_contenedor_contenedor">
                    {movies.map((movie) => (
                        <div
                            className="home-principal-seccion_contenedorcontenedor_movie"
                            key={movie.id}
                            onClick={() => {
                                window.location.href = `/movie/${movie.id}`;
                            }}
                            
                        >
                            <img
                                className="home-principal-seccion_contenedorcontenedormovie_img"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="home-principal-seccion_contenedorcontenedormovie_titulo">
                                {movie.title}
                            </div>
                            <div className="home-principal-seccion_contenedorcontenedormovie_fecha">
                                {movie.release_date}
                            </div>
                            <div className="home-principal-seccion_contenedorcontenedormovie_cal">
                                {movie.vote_average}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePrincipalSeccion;