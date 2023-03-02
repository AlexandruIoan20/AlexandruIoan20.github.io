import React from "react";

const SearchBar = () => { 
    return (
        <form className="search-bar">
            <input type="text" placeholder="...your product" autoComplete="off" />
            <button>Search</button>
        </form>
    )
};

export default SearchBar; 