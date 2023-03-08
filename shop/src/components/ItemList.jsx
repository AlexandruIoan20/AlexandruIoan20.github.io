import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import  { createApi } from 'unsplash-js';
import ITEMS from "./Helpers/items";
import { useNavigate } from "react-router-dom";

const unsplash = createApi({
    accessKey: 'znEgxfmnj804269_4rFVRaNx48Y_aCjmL9xzsh133Cw'
  });

const ItemList = () => { 
    const navigate = useNavigate();
    const urlID = useParams();
    const [items, setItems] = useState([]);
    
    async function buildItemList () { 
        let list = {};

        for(let i = 0; i < ITEMS.length; i++) {
            if(ITEMS[i].category === urlID.id) { 
                list = ITEMS[i].list
            }
        }

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
                    quantity: 1,
                    id: arr.response.results[i].blur_hash,
                }
            };
        }).then( () => { 
            setItems(fetchedElements);
        })
    }

    useEffect( () => { 
        if(items.length === 0) { 
            navigate("/*")
         }
        buildItemList();
     }, [])

    return ( 
        <section className="items-informations">
            <p className="item-list-title">We found {`${items.length}`} items.</p>
            <div className="items-list">
                {items.map(item => { 
                    return ( 
                        <NavLink key = { item.id }  to = {`/categories/${urlID.id}/${item.name}`}
                            state={{ item: item }}>
                            <article className="item-in-list">
                                <img src={ item.url } width = "200px" height = "250px" alt="loading..." />
                                <p className="item-name"> { item.name }</p>
                                <p> { `${item.price}$` }</p>
                            </article>
                        </NavLink>
                    )
                })} 
            </div>
        </section> )

    
};

export default ItemList;