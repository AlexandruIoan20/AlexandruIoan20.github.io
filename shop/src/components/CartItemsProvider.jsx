import React, { useState, useContext } from "react";

const CartUpdateContext = React.createContext();
const CartItemsContext = React.createContext();

export function useCartItems () { 
    return useContext(CartItemsContext);
}

export function useCartUpdate () { 
    return useContext(CartUpdateContext);
}

export default function CartItemsProvider ( { children }) { 
    const [inCartItems, setInCartItems] = useState([]);

    function insertItem (item) { 
        let array = inCartItems; 
        array.push(item);
        setInCartItems(array);
    }

    return ( 
        <CartItemsContext.Provider value = {inCartItems}>
            <CartUpdateContext.Provider value = {insertItem}>
                { children }
            </CartUpdateContext.Provider>
        </CartItemsContext.Provider>
    )
}