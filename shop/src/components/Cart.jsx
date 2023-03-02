import React from "react";
import CartElement from "./CartElement";

const Cart = () => { 
    const elements = [
        { 
            name: "Phone", 
            value: 3,
            id: "phone"
        },
        { 
            name: "T-shirt",
            value: 2,
            id: "tshirt "
        }
    ]
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