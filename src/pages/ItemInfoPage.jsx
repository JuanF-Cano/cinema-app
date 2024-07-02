import react from "react";
import { useParams } from "react-router-dom";
import SeriesPage from "./SeriesPage";
import MoviePage from "./TrueMoviePage";
import PeoplePage from "./PeoplePage";



function ItemInfoPage() {
  const { type, id } = useParams();
if (type=="movie"){
  return (
    <MoviePage/>
  );
}else if(type=="person"){
  return(
    <PeoplePage />
  )
}else if(type=="tv"){
  return(
    <SeriesPage />
  )
}
}

export default ItemInfoPage;
