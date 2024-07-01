import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarMovie from "../components/ItemCard/SimilarMovie"
import "../components/ItemsInfo/ItemInfo.css";


function MoviePage() {
  const { type, id } = useParams();
  return (
    <div className="conteiner-true-details">
      <NavBarM1 />
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
      {console.log(id)}
      <SimilarMovie movieId={id}/>
    </div>
  );
}

export default MoviePage;
