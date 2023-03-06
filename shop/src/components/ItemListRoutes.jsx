import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import Item from "./Item";

const ItemListRoutes = () => { 
    return ( 
        <Routes>
            <Route path = ":id" element = { <ItemList />} /> 
            <Route path = ":id/:el" element =  { <Item />} />  
        </Routes>
    )
};

export default ItemListRoutes;