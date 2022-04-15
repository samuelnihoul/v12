import React from "react";


const SearchItem = ({ showSearchForm }) => {

  return (
    
      <p id="search-button" onClick={showSearchForm} style={{margin:'1vw',color:'white'}}>
        <i className="icofont-search-1"></i>
      </p>
  
  );
};

export default SearchItem;
