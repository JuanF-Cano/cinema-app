import React, { useContext } from "react"
import { useState } from "react";
import { Context } from '../../App'
import './SearchBar.css'

  const SearchBar =()=>{

  const [search,setSearch]= useContext(Context);

  const handleChange=e=>{//esto utiliza el useState de setSearch para recibir input del usuario, search contiene el string del input del usuario
    setSearch (e.target.value)
    
  }

    return(
        <div className="SearchBar-Container-Input">
        <input 
        onChange={handleChange}
        value={search} 
        placeholder="Search by"
        className="SearchBar"></input>
      </div>
    )
}
export default SearchBar
