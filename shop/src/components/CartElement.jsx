import React from "react";

const CartElement = () => { 
    return (
        <section className="cart-element">
            <p>Product Name</p>
            <form>
                <button className="cart-button"> - </button>
                <input type="number" min= {1} step = '1' />
                <button className="cart-button"> + </button>
            </form>
        </section>
    )
};

export default CartElement;