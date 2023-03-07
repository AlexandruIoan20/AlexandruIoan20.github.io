import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import Item from "./Item";

const ItemListRoutes = (props) => { 
    const { sold } = props;
    return ( 
        <Routes>
            <Route path = ":el" element = { <Item sold = {sold}/>} />  
        </Routes>
    )
};

export default ItemListRoutes;