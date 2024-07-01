import React, {useEffect, useState} from "react"; 
import Carousel from "../Home/Carousel"
import { getPopularPeople } from "../../controllers/APIcalls";

function SimilarPerson(movieId){

    const [similarPerson,setSimilarPerson]=useState([])
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularPeople(movieId.movieId);
                setSimilarPerson(moviesData); // Assuming API response has a 'results' array
                
            } catch (error) {
                console.error("AY GONORREA", error);
            }
        };
        
        fetchMovies();
    }, [movieId]);

    return(
        <div>
        <Carousel movies={similarPerson} type={"person"}/>
        </div>
    )

}
export default SimilarPerson