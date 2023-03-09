import React, { useState, useEffect } from "react";
import { useLocation, NavLink  } from "react-router-dom";
import { useCartUpdate, useCartItems } from "./CartItemsProvider";

const Item = (props) => { 
    const location = useLocation();
    const updateCart = useCartUpdate();
    const itemsInCart = useCartItems();
    console.log(props, "props");
    console.log(location, "location");

    const item = location.state.item;

    return ( 
        <section className="item-holder">
            <figure className="item">
                <img src= {item.url} width = "300px" height = "450px" alt="loading" />
                <h2 role="h2"> { item.name } </h2>
                <NavLink
                    state = { { item: item }}
                    to = "/cart"><button onClick = { () => { updateCart(item);}}> Add to cart </button></NavLink>

                <p role="p"> { `${item.price}$`  }</p>
            </figure>
        </section>
    )
};

export default Item;