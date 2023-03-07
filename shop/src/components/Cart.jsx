import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import CartElement from "./CartElement";
import { useCartItems, useCartUpdate } from "./CartItemsProvider";

const Cart = (props) => { 
    const location = useLocation(); 
    const item = location.state.item;

    const inCartItems = useCartItems(); 
    const updateCart = useCartUpdate();
    return (
        <section className="cart">
{/*             {elements.map(element => { 
                return ( 
                    <article key = {element.id}>
                        <Cart /> 
                    </article>
                )
            })} */}
        </section>
    )
};

export default Cart; 