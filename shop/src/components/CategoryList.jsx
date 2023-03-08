import React, { useState, useEffect } from "react";
import Category from "./Category";
import CATEGORIES from './Helpers/CategoriesArray.js';
import ItemList from "./ItemList";
import { NavLink } from "react-router-dom";
import  { createApi } from 'unsplash-js';
import CartItemsProvider from "./CartItemsProvider";


const unsplash = createApi({
    accessKey: 'znEgxfmnj804269_4rFVRaNx48Y_aCjmL9xzsh133Cw'
  });

async function getState ( getStateArray ) { 
    for(let i = 0; i < CATEGORIES.length; i++) {
        let images = [];
        await unsplash.search.getPhotos({ 
            query: CATEGORIES[i].use,
            page: 1,
            perPage: 1,
            orientation: 'portrait',
        }).then(arr => { 
            images[i] = arr.response.results[0].urls.small_s3;
        }).then( () => { getStateArray[i] = images[i]} );
    }
}

const CategoryList = () => { 
    const [categories, setCategories] = useState ([]);

    async function createCategories () { 
        let catState = [], array = [];
        await getState(catState).then(() => {
            for(let i = 0; i < CATEGORIES.length; i++) {
                array.push( { name: CATEGORIES[i].view, query:CATEGORIES[i].use, id: CATEGORIES[i].use, url: catState[i]});
                setCategories(array);
            }
        })
    };

    useEffect ( () => { 
        createCategories();
    }, []);

    return(
        <section className="category-list">
            {categories.map(category => { 
                return ( 
                    <article key = { category.id }>
                        <NavLink
                            key = { categories.id } to = {`/categories/${category.id}`}>
                            <Category category = { category }/></NavLink>
                    </article>
                )
            })}
        </section>
    )
};

export default CategoryList;
