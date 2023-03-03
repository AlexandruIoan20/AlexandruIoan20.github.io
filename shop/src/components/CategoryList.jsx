import React, { useState } from "react";
import useCategories from "./Hooks/UseCategories";
import Category from "./Category";
import ItemList from "./ItemList";
import { NavLink, Routes, Route } from "react-router-dom";

const CategoryList = () => { 
    const [categories, setCategories ] = useState([]);
    let arrayToSet = [];
    arrayToSet = useCategories(arrayToSet);

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
