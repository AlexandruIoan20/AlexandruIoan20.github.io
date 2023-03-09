import React from "react";
import FinalItem from "./FinalItem";
import { useLocation, NavLink } from "react-router-dom";

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
                        <FinalItem item = {item}/>
                    </article>
                })}
            
            <section className="final-confirmation">
                <p> {`Total: ${price}$` }</p>
                <NavLink to = "/thanks"><button>Finalize Order</button></NavLink>
            </section>
            </section>

            <footer>
                <a href="https://github.com/AlexandruIoan20/Shopping-Cart" target={`_blank`}><p>Github: Alexandru Ioan</p></a>
            </footer>
        </section>
    )
};

export default FinalList;