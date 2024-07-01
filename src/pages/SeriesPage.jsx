import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import SearchBarM1 from "../components/SearchBarM1/SerchBarM1";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarMovie from "../components/ItemCard/SimilarMovie"
import SimilarSerie from "../components/ItemCard/SimilarSerie";
function SeriesPage() {
  const { type, id } = useParams();
  return (
    <div>
      <SearchComponent/>
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
      {console.log(id)}
      <SimilarSerie movieId={id}/>
    </div>
  );
}

export default SeriesPage;
