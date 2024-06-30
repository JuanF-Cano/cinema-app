import { useEffect, useState } from "react";
import { getPopularMovies } from "../../controllers/APIcalls";
import './Home.css';
import Carousel from "./Carousel";
import MovieGrid from "./MovieGrid";
import NavBarM1 from "../NavBarM1/NavBarM1";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="home-principal-seccion">
            <div className="container-nav"><NavBarM1 /></div>
            <div className="home-principal-seccion__carrusel">
                <div className="home-principal-seccion__titulo">Carrusel de películas</div>
                <Carousel movies={movies} />
                <div className="home-principal-seccion__titulo">Carrusel de películas</div>
                <Carousel movies={movies} />
                <div className="home-principal-seccion__titulo">Carrusel de películas</div>
                <Carousel movies={movies} />
            </div>

            <div className="home-principal-seccion__cards">
                <div className="home-principal-seccion__titulo">Películas</div>
                <MovieGrid movies={movies} />
            </div>
        </div>
    );
};

export default Home;
