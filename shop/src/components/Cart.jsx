import React, { useEffect } from "react";
import { useLocation } from "react-router";
import CartElement from "./CartElement";
import { useCartItems } from "./CartItemsProvider";

/* 
@@@@@@@@@@@@@@@@@@@@@@@@@
Problema este ca nu mereu cand apesi add cart merge in pagin cu cartul 
-Daca apesi de doua ori produsul intra in vector de doua ori 
@@@@@@@@@@@@@@@@@@@@@@@@@
*/

const Cart = (props) => {
    const location = useLocation();
    let item;
    if (location.state === null) {
        item = null
    }
    else {
        item = location.state.item;
    }

    const inCartItems = useCartItems();

    return (
        <section className="cart">
            {/*             {elements.map(element => { 
                return ( 
                    <article key = {element.id}>
                        <Cart /> 
                    </article>
                )
            })} */}
            <p> {JSON.stringify(inCartItems)}</p>
        </section>
    )
};

export default Cart; 