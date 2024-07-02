import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarSerie from "../components/ItemCard/SimilarSerie";
import "../components/ItemsInfo/ItemInfo.css";

function SeriesPage() {
  const { type, id } = useParams();
  return (
    <div className="conteiner-true-details">
      <NavBarM1></NavBarM1>
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
      <SimilarSerie movieId={id}/>
    </div>
  );
}

export default SeriesPage;
