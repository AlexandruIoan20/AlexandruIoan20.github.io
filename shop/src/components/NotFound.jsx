import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => { 
    const navigate = useNavigate();

/*     setTimeout( () => { 
        navigate("/")
    }, 2000); */
    return( 
        <section className="not-found-page">
            <article className="not-found-elements">
                <h1 className="not-found">Not Found</h1>
                <button className="start-button" onClick={ () => {navigate("/")}}>Go Home</button>
            </article>
        </section>
    )
};

export default NotFound;