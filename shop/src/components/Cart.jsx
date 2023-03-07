import React, {useEffect} from "react";
import { useLocation } from "react-router";
import CartElement from "./CartElement";    
import { useCartItems, useCartUpdate } from "./CartItemsProvider";

const Cart = (props) => { 
    const location = useLocation(); 
    let item; 
    if(location.state === null) { 
        item = null 
    }
    else { 
        item = location.state.item;
    }

    const inCartItems = useCartItems(); 
    const updateCart = useCartUpdate();

    if(item != null) { 
        updateCart(item);
    }
    
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