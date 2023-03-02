import React from "react";
import SearchBar from "./SearchBar";
import  { NavLink }from "react-router-dom";

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