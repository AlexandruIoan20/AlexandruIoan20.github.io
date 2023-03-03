import React from "react";
import Category from "./Category";
import ItemList from "./ItemList";
import { NavLink, Routes, Route } from "react-router-dom";

const CategoryList = () => { 
    const categories = [ 
        {
            name: "Sports",
            id: "sports"
        },
        {
            name: "Clothes",
            id: "clothes"
        },
        {
            name: "TEC", 
            id: "tec"
        }
    ]
    return(
        <section className="category-list">
            {categories.map(category => { 
                return ( 
                    <article key = { category.id }>
                        <NavLink key = { categories.id } to = {`/categories/${category.name}`}> <Category /> </NavLink>
                    </article>
                )
            })}
        </section>
    )
};

export default CategoryList;
