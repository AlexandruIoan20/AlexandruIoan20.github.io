import React from "react";

const CartElement = (props) => { 
    const { item, onIncreasingQ, onInputButton } = props;
    return (
        <section className="cart-element">
            <p> { `${item.name}` }</p>
            <img src= { item.url } width = "100px" height="100px" alt="...loading" />

            <article className="price-q-informator">
                <form> 
                    <button className="cart-button" onClick={ (e) => 
                        {
                            e.preventDefault ();
                            onInputButton("-", item)
                        }
                        }> - </button>
                    <input type="number" 
                        min= {1} 
                        step = '1' 
                        onChange = { (e) => { onIncreasingQ(item, e.target.value)}}
                        value = { item.quantity} />
                    <button className="cart-button" onClick = { (e) => 
                        {
                            e.preventDefault();
                            onInputButton("+", item)
                        }
                        }> + </button>
                </form>
                <p className="price"> {`${item.quantity} x ${item.price * item.quantity}$ / ${item.quantity} / ${item.price}$`} </p>
            </article>
        </section>
    )
};

export default CartElement;