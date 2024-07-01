import React, {useEffect, useState} from "react"; 
import Carousel from "../Home/Carousel"
import { getSimilarTVShows } from "../../controllers/APIcalls";
import '../ItemsInfo/ItemInfo.css';

function SimilarSerie(movieId){

    const [similarSerie,setSimilarSerie]=useState([])
    
    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const serieData = await getSimilarTVShows(movieId.movieId);
                setSimilarSerie(serieData); // Assuming API response has a 'results' array
                
            } catch (error) {
                console.error("AY GONORREA", error);
            }
        };
        
        fetchSerie();
    }, [movieId]);

    return(
        <div className="container-carousel">
        <Carousel movies={similarSerie} type={"tv"}/>
        </div>
    )

}
export default SimilarSerie