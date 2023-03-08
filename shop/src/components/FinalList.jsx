import React from "react";
import { useLocation } from "react-router";

const FinalList = () => { 
    const location = useLocation(); 

    const items = location.state.items.inCartItems;
    const price = location.state.price;

    return ( 
        <section className="page">
            <h1>Final Order</h1>

            <section className="items-final-holder">
                {items.map(item => { 
                    return <article key = {item.id} className="item-final">
                        <img src= {item.url} widht = "100px" height = "100px" alt="" />
                    </article>
                })}
            </section>
        </section>
    )
};

export default FinalList;