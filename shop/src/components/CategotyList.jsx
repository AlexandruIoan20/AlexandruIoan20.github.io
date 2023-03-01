import React from "react";
import Category from "./Category";

const CategoryList = () => { 
    const categories = [ 
        {
            category: "Sports",
            id: "1"
        },
        {
            category: "Clothes",
            id: "2"
        },
        {
            category: "TEC", 
            id: "3"
        }
    ]
    return(
        <section className="category-list">
            {categories.map(category => { 
                return <Category key = { category.id }/>
            })}
        </section>
    )
};

export default CategoryList;
