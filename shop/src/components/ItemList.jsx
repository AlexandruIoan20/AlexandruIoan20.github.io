import React from "react";
import Item from "./item";

const ItemList = () => { 
    const items = [
        {
            name: "Object", 
            key: 1,
        }
    ];
    return ( 
        <section className="item-list">
            <p className="item-list-title">We found {`${items.length}`} items.</p>
            {items.map(item => { 
                <Item key = {item.id}/>
            })}
        </section>
    )
};

export default ItemList;