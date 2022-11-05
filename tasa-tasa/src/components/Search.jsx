import React, { useState } from "react";
import "../Search.css";

const Search = ({searchCasa,setSearchCasa}) => {
 
const onSearchValueChange = (event) => {
   setSearchCasa(event.target.value)
}
  
  return (
    <div className="input-wrapper">
      <input
        type="search"
        placeholder="Buscar"
        value={searchCasa}
        onChange={onSearchValueChange}
      />
      
    </div>
  );
};

export { Search };
