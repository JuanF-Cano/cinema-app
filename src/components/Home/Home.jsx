import { useEffect, useState } from "react";
import { getPopularMovies, getPopularPeople, getPopularTVShows } from "../../config/APIcalls";
import './Home.css';
import Carousel from "./Carousel";
import NavBarM1 from "../NavBarM1/NavBarM1";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularMovies();
                setMovies(moviesData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchTvShows = async () => {
            try {
                const tvShowsData = await getPopularTVShows();
                setTvShows(tvShowsData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchTvShows();
    }, []);
    

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peopleData = await getPopularPeople();
                setPeople(peopleData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchPeople();
    }, []);
    

    useEffect(() => {
        const fetchTvShows = async () => {
            try {
                const tvShowsData = await getPopularTVShows();
                setTvShows(tvShowsData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchTvShows();
    }, []);
    

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peopleData = await getPopularPeople();
                setPeople(peopleData); // Assuming API response has a 'results' array
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchPeople();
    }, []);
    

    return (
        <div className="home-principal-seccion">
            <div className="container-nav"><NavBarM1 /></div>
            <div className="home-principal-seccion__carrusel">
                <div className="home-principal-seccion__titulo">Películas</div>
                <Carousel movies={movies} type="movie"/>
                <div className="home-principal-seccion__titulo">Series</div>
                <Carousel movies={tvShows} type="tv"/>
                <div className="home-principal-seccion__titulo">Celebridades</div>
                <Carousel movies={people} type="person"/>
            </div>
        </div>
    );
};

export default Home;
