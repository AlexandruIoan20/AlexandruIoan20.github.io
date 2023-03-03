import React from "react";

const Item = () => { 
    return ( 
        <figure className="item">
            <img src="image" alt="loading" />
            <h2 role="h2">title</h2>
            <h3 role="h3">category</h3>
            <button> Add to cart </button>
            <p role="p">description</p>
        </figure>
    )
};

export default Item;