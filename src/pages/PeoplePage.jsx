import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarPerson from "../components/ItemCard/SimilarPerson";
import '../components/ItemsInfo/ItemInfo.css';

function PeoplePage() {
  const { type, id } = useParams();
  return (
    <div className="conteiner-true-details">
      <NavBarM1></NavBarM1>
      <div className="container-principal-section" >
        <h1>Detalles</h1>
        <ItemInfo type={type} id={id}></ItemInfo>
        <SimilarPerson movieId={id}/>
      </div>
    </div>
  );
}

export default PeoplePage;
