import react from "react";
import { useState } from "react";
import { searchMovies } from "../../../controllers/APIcalls";


function SearchBar({setResults}) {
  const [input, setInput] = useState("");

   async function fetchData() {
    const response = await searchMovies(input);
    //Mostrar primeros 4 resultados
    setResults(response.slice(0, 4));
   }

   const handleChange = (value) =>{
    setInput(value);
    fetchData();
   };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
}
export default SearchBar;
