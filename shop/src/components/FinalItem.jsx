import React from "react";

const FinalItem = (props) => {  
    const { item } = props;
    return( 
        <section className="final-element">
            <img src= { item.url } width = "100px" height= "100px" alt="...loading" />

            <article className="final-information">
                <p className="name"> {item.name}</p>
                <p className="price"> {`${item.quantity} x ${item.quantity}$ / 1 x ${item.price}$`} </p>
            </article>
        </section>
    )
};

export default FinalItem;