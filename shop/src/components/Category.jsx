import React from "react";

const Category = (props) => { 
    const { category } = props;
    return ( 
        <figure className="category-element">
            <img src= { category.url } width = "200px" height = "300px" alt="loading" />
            <h2 className="category-name"> { category.name } </h2>
        </figure>
    )
};

export default Category;