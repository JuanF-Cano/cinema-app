import React from "react"
const [search,setSearch]= useState("");
  const [result,setResult] = useState([])
 /* const petiGet=async()=>{
    axios.get("http://files.tmdb.org/p/exports/adult_movie_ids_05_15_2024.json.gz")
    .then(response=>{
     setResult(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }*/
  const handleChange=e=>{//esto utiliza el useState de setSearch para recibir input del usuario, search contiene el string del input del usuario
    setSearch (e.target.value)
    console.log("Busqueda: "+e.target.value)
  }
//Esto es la barra de busqueda, al cambio del estado se llama handleChange
const SearchBar =()=>{
    return(
        <div className="SearchBar- container-Input">
        <input 
        onChange={handleChange}
        value={search} 
        placeholder="Search by"></input>
      </div>
    )
}