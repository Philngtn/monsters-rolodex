import React from 'react';

import './search-box.style.css';

// Functional component don't have access on state
// Functional comp just render HTML with props, no lifecyle and state uses

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type="search"
        placeholder= {placeholder}
        onChange= {handleChange}
    />
);