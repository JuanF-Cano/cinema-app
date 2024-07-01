import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import SearchBarM1 from "../components/SearchBarM1/SerchBarM1";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import SimilarMovie from "../components/ItemCard/SimilarMovie"
import PeoplePage from "./PeoplePage";



function ItemInfoPage() {
  const { type, id } = useParams();
if (type=="movie"){
  return (
    <div>
      <NavBarM1></NavBarM1>
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
      {console.log(id)}
      <SimilarMovie movieId={id}/>
    </div>
  );
}else if(type=="person"){
  {console.log(id)}
  return(
    <PeoplePage />
  )
}
}

export default ItemInfoPage;
