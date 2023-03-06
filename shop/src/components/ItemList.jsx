import React, { useState, useEffect } from "react";
import ItemListElement from "./ItemListElement";
import { useParams} from "react-router-dom";
import  { createApi } from 'unsplash-js';
import { NavLink } from "react-router-dom";
import ITEMS from "./Helpers/items";


const unsplash = createApi({
    accessKey: 'znEgxfmnj804269_4rFVRaNx48Y_aCjmL9xzsh133Cw'
  });

const ItemList = () => { 
    const urlID = useParams();
    const [items, setItems] = useState([]);
    
    async function buildItemList () { 
        let list = {};

        for(let i = 0; i < ITEMS.length; i++) {
            if(ITEMS[i].category === urlID.id) { 
                list = ITEMS[i].list
            }
        }
        console.log(list);
        let fetchedElements = [];
        await unsplash.search.getPhotos({ 
            query: urlID.id,
            page: 10,
            perPage: 10,
            orientation: 'portrait',
        }).then(arr => { 
            for(let i = 0; i < 6; i++) { 
                fetchedElements[i] = { 
                    name: list[i].name, 
                    price: list[i].price,
                    url: arr.response.results[i].urls.small_s3,
                    id: arr.response.results[i].blur_hash,
                }
            };
        }).then( () => { 
            setItems(fetchedElements);
            console.log(items)
        })
    }

    useEffect( () => { 
        buildItemList();
     }, [])

    return ( 
        <section className="item-list">
            <p className="item-list-title">We found {`${items.length}`} items.</p>
            {items.map(item => { 
                return ( 
                    <NavLink key = { item.id} to = {`/categories/${urlID.id}/${item.name}`}>
                        <article>
                            <img src={ item.url } alt="loading..." />
                        </article>
                    </NavLink>
                )
            })} 
            <h1>In Test ItemListElement </h1> 
        </section> )

    
};

export default ItemList;