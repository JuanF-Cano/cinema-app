import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import SearchBarM1 from "../components/SearchBarM1/SerchBarM1";
import NavBarM1 from "../components/NavBarM1/NavBarM1";
import Similar from "../components/ItemCard/Similar"
function ItemInfoPage() {
  const { type, id } = useParams();
  return (
    <div>
      <NavBarM1></NavBarM1>
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
      {console.log(id)}
      <Similar movieId={id}/>
    </div>
  );
}

export default ItemInfoPage;
