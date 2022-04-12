import React from "react";


const SearchItem = ({ showSearchForm }) => {

  return (
   
      <button id="search-button" onClick={showSearchForm} style={{backgroundColor:'transparent',color:'white', marginLeft:'1vw'}}>
        <i className="icofont-search-1"></i>
      </button>
    
  );
};

export default SearchItem;
