import react from "react";
import { useParams } from "react-router-dom";
import ItemInfo from "../components/ItemsInfo/ItemInfo";
import SearchBarM1 from "../components/SearchBarM1/SerchBarM1";
function ItemInfoPage() {
  const { type, id } = useParams();
  return (
    <div>
      <SearchBarM1></SearchBarM1>
      <h1>Detalles</h1>
      <ItemInfo type={type} id={id}></ItemInfo>
    </div>
  );
}

export default ItemInfoPage;
