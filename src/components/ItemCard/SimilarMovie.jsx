import React, {useEffect, useState} from "react"; 
import Carousel from "../Home/Carousel"
import { getSimilarMovies } from "../../config/APIcalls";
import '../ItemsInfo/ItemInfo.css';

function SimilarMovie(movieId){

    const [similarMovies,setSimilarMovies]=useState([])
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getSimilarMovies(movieId.movieId);
                setSimilarMovies(moviesData); // Assuming API response has a 'results' array
                
            } catch (error) {
                console.error("AY GONORREA", error);
            }
        };
        
        fetchMovies();
    }, [movieId]);

    return(
        <div className="container-carousel">
        <Carousel movies={similarMovies} type={"movie"}/>
        </div>
    )

}
export default SimilarMovie