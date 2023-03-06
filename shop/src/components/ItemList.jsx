import React, { useState, useEffect } from "react";
import ItemListElement from "./ItemListElement";
import { NavLink } from 'react-router-dom';
import { useOutletContext, useParams } from "react-router-dom";
import  { createApi } from 'unsplash-js';


const unsplash = createApi({
    accessKey: 'znEgxfmnj804269_4rFVRaNx48Y_aCjmL9xzsh133Cw'
  });

const ItemList = () => { 
    const urlID = useParams();
    const [items, setItems] = useState([]);
    
    async function buildItemList () { 
        let fetchedElements = [];
        await unsplash.search.getPhotos({ 
            query: urlID.id,
            page: 10,
            perPage: 10,
            orientation: 'portrait',
        }).then(arr => { 
            console.log(arr)
            for(let i = 0; i < 6; i++) { 
                fetchedElements[i] = { 
                    url: arr.response.results[i].urls.small_s3,
                    id: arr.response.results[i].blur_hash,
                }
            };
        }).then( () => { 
            setItems(fetchedElements)
        }).then( () => { 
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
                    <article key = {item.id}>
                        <img src={ item.url } alt="loading..." />
                    </article>
                )
            })} 
            <h1>In Test ItemListElement </h1> 
        </section> )

    
};

export default ItemList;