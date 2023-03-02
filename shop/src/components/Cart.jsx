import React from "react";
import CartElement from "./CartElement";

const Cart = () => { 
    const elements = [
        { 
            name: "Phone", 
            value: 3,
        },
        { 
            name: "T-shirt",
            value: 2 
        }
    ]
    return (
        <section className="cart">
            {elements.map(element => { 
                return <CartElement/>
            })}
        </section>
    )
};

export default Cart; 