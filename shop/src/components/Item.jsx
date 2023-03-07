import React from "react";
import { useLocation, NavLink  } from "react-router-dom";
import { useCartItems, useCartUpdate } from "./CartItemsProvider";

const Item = (props) => { 
    const location = useLocation();

    console.log(props, "props");
    console.log(location, "location");

    const inCartItems = useCartItems(); 
    const updateCart = useCartUpdate();

    const item = location.state.item;
    return ( 
        <section className="item-holder">
            <figure className="item">
                <img src= {item.url} width = "300px" height = "450px" alt="loading" />
                <h2 role="h2"> { item.name } </h2>
                <button>
                        <NavLink
                            state = { { item: item }}
                            to = "/cart"> Add to cart </NavLink></button>
                <p role="p"> { `${item.price}$`  }</p>
            </figure>
        </section>
    )
};

export default Item;