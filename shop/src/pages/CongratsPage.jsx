import React from "react";
import { NavLink } from "react-router-dom";

const CongratsPage = () => { 
    return (
        <section className="page">
            <section className="congrats-page">
                <h1>We are sorry to announce you that your purchase will never be approved. 
                    It's just a project for learning Web Dev. Have a nice day</h1>
                <button className="start-button">
                    <NavLink to = "/categories">Start Shopping</NavLink></button>
            </section>

            <footer>
                <a href="https://github.com/AlexandruIoan20/Shopping-Cart" target={`_blank`}><p>Github: Alexandru Ioan</p></a>
            </footer>
        </section>
    )
};

export default CongratsPage;