import React from "react";
import ItemListElement from "./ItemListElement";
import { NavLink } from 'react-router-dom'

const ItemList = () => { 
    const items = [
        {
            name: "Object", 
            key: 1123,
        }
    ];
    return ( 
        <section className="item-list">
            <p className="item-list-title">We found {`${items.length}`} items.</p>
{/*             {items.map(item => { 
                return ( 
                    <article key = {item.id}>
                        <NavLink to = "/clo"></NavLink>
                    </article>
                )
            })} */}
            <h1>In Test ItemListElement </h1>
        </section>
    )
};

export default ItemList;