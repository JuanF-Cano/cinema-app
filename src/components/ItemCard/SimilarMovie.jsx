import React, {useEffect, useState} from "react"; 
import Carousel from "../Home/Carousel"
import { getSimilarMovies } from "../../controllers/APIcalls";

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
    }, []);

    return(
        <div>
        <Carousel movies={similarMovies} type={"movie"}/>
        </div>
    )

}
export default SimilarMovie