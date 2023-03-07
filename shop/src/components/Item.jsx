import React from "react";

const Item = (props) => { 
    const { item } = props;
    return ( 
        <figure className="item">
            <img src="image" alt="loading" />
            <h2 role="h2"> { item.name } </h2>
            <h3 role="h3">category</h3>
            <button> Add to cart </button>
            <p role="p">description</p>
        </figure>
    )
};

export default Item;