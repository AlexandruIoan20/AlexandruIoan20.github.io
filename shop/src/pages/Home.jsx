import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => { 
    return( 
        <section className="page home">
            <section className="home-page">
                <h1>Welcome to <i>ShopNow</i></h1>
                <button className="start-button">
                    <NavLink to = "/categories">Start Shopping</NavLink></button>
            </section>
        </section>
    )
};

export default Home;