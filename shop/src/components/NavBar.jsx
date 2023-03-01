import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => { 
    return (
        <section className="navbar">
            <article className="navbar-buttons">
                <button>Home</button>
                <button>Cart</button>
            </article>
        <SearchBar />
        </section>
    )
};

export default NavBar; 