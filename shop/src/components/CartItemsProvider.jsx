import React, { useState, useContext } from "react";

const CartUpdateContext = React.createContext();
const CartItemsContext = React.createContext();
const UpdateStateContext = React.createContext(); 

export function useCartItems () { 
    return useContext(CartItemsContext);
}

export function useCartUpdate () { 
    return useContext(CartUpdateContext);
}

export function useUpdateState () { 
    return useContext(UpdateStateContext);
}

export default function CartItemsProvider ( { children }) { 
    const [inCartItems, setInCartItems] = useState([]);

    function insertItem (item) { 
        let array = inCartItems;

        let toPush = true; 
        for(let i = 0; i < array.length; i++) { 
            if(array[i] === item) 
                toPush = false;
        }

        if(toPush === true)
            array.push(item);
        setInCartItems(array);
    }

    function updateState (array) { 
        let uniques = [];
        array.forEach(element => { 
            if(!uniques.includes(element)) { 
                uniques.push(element)
            }
        })
        setInCartItems(uniques);
    }

    return ( 
        <CartItemsContext.Provider value = {inCartItems}>
            <CartUpdateContext.Provider value = {insertItem}>
                <UpdateStateContext.Provider value = { updateState }>
                    { children }
                </UpdateStateContext.Provider>
            </CartUpdateContext.Provider>
        </CartItemsContext.Provider>
    )
}