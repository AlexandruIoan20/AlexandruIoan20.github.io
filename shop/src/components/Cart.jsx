import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CartElement from "./CartElement";
import { useCartItems, useUpdateState } from "./CartItemsProvider";
import { useNavigate } from "react-router";

/* 
@@@@@@@@@@@@@@@@@@@@@@@@@
Problema este ca nu mereu cand apesi add cart merge in pagin cu cartul 
-Daca apesi de doua ori produsul intra in vector de doua ori 
@@@@@@@@@@@@@@@@@@@@@@@@@
*/

const Cart = () => {
    /* Declarations */
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);

    /* Location declarations */
    const location = useLocation();

    let item;
    if (location.state === null) {
        item = null
    }
    else {
        item = location.state.item;
    }

    /* Context hooks declarations */
    const inCartItems = useCartItems();
    const updateState = useUpdateState(); 

    /* Total price for display */
    function calculateTotalPrice() { 
        let array = inCartItems, total = 0;
        for(let i = 0; i < array.length; i++) { 
            total += array[i].price * array[i].quantity;
        }
        setTotalPrice(total);
    }

    function handleIncreasingQ (item, value) { 
        let array = inCartItems; 
        array.map(element => { 
            if(element == item) { 
                element.quantity = value;
            }

            return element;
        })
        updateState(array);
        calculateTotalPrice();
    }

    function handleInputButton(sign, item) { 
        let array = inCartItems; 
        array.map(element => { 
            if(element == item) { 
                if(sign === "+") 
                    element.quantity++;
                else if(sign === "-")
                    element.quantity--;
            }
            return element; 
        })

        updateState(array);
        calculateTotalPrice();
    }

    useEffect( () => { 
        calculateTotalPrice();
    }, [])

    return (
        <section className="page component-page">
            <section className="cart">
                
                {inCartItems.length > 0 &&
                    <>
                        <section className="starter-section">
                            <h1>Your cart</h1>
                            <button className="go-shopping-button"
                                    onClick={ () => { setTimeout( () => { navigate ("/categories")}, 10) }}>Go shopping</button>
                        </section>
                        {inCartItems.map( item => { 
                        return <CartElement key = { item.id } 
                            item = {item}
                            onIncreasingQ = { handleIncreasingQ }
                            onInputButton = { handleInputButton }/> 
                        })}
                    </>
                }

                {inCartItems.length === 0 && 
                    <section className="information">
                        <h2>Your cart is empty</h2>
                        <button className="go-shopping-button"
                            onClick={ () => { setTimeout( () => { navigate ("/categories")}, 10) }}>Go shopping</button>
                    </section>
                }

                <section className="total-price-display">
                    <p className="total-price-info"> { `Total: ${totalPrice}$` }</p>
                    <button className="place-order-button"> Place Order </button>
                </section>
            </section>
        </section>
    )
};

export default Cart; 