import React from "react";
import { useLocation } from "react-router-dom";

const Item = (props) => { 
    const location = useLocation();

    console.log(props, "props");
    console.log(location, "location");

    const item = location.state.item;
    return ( 
        <figure className="item">
            <img src= {item.url} alt="loading" />
            <h2 role="h2"> { item.name } </h2>
            <button> Add to cart </button>
            <p role="p"> { `${item.price}$`  }</p>
        </figure>
    )
};

export default Item;