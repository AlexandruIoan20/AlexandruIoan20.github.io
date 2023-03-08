import React from "react";
import  { NavLink }from "react-router-dom";

const NavBar = () => { 
    return (
        <section className="navbar">
            <nav className="navbar-buttons">
                <ul>
                    <li>
                        <NavLink to = "/">Home</NavLink>
                    </li>   
                    <li>
                        <NavLink to = "/categories"> Categories </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/about'> About </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/contact'> Contact Us </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/cart'> Cart </NavLink>
                    </li>
                </ul>
            </nav>
    </section>
    )
};

export default NavBar; 