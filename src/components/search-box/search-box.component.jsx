import React from "react";

import './search-box.styles.css';

// Functional component that represents a search input box
export const SearchBox = ({ placeholder, handleChang }) => (
  <input
    className='search'
    type="search"
    placeholder={placeholder}
    onChange={handleChang} // Event handler for input change
  />
);



