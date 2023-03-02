import React from "react";

const SearchBar = () => { 
    return (
        <section className="search">
            <form className="search-bar">
                <input type="text" placeholder="...your product" autoComplete="off" />
                <button>Search</button>
            </form>
        </section>
    )
};

export default SearchBar; 