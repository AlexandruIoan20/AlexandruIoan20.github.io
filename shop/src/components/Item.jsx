import React from "react";
import { useLocation } from "react-router-dom";

const Item = (props) => { 
    const location = useLocation();

    console.log(props, "props");
    console.log(location, "location");

    const item = location.state.item;
    return ( 
        <section className="item-holder">
            <figure className="item">
                <img src= {item.url} width = "300px" height = "450px" alt="loading" />
                <h2 role="h2"> { item.name } </h2>
                <button> Add to cart </button>
                <p role="p"> { `${item.price}$`  }</p>
            </figure>
        </section>
    )
};

export default Item;