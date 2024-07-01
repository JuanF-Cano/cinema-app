import React, {useEffect, useState} from "react"; 
import Carousel from "../Home/Carousel"
import { getSimilarMovies } from "../../controllers/APIcalls";

function Similar(movieId){

    const [similarMovies,setSimilarMovies]=useState([])
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getSimilarMovies(movieId);
                setSimilarMovies(moviesData); // Assuming API response has a 'results' array
                {console.log("eyno"+moviesData)}
            } catch (error) {
                console.error("AY GONORREA", error);
            }
        };
        
        fetchMovies();
    }, []);

    return(
        <div>
        <Carousel movies={similarMovies}/>
        </div>
    )

}
export default Similar