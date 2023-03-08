import React from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories"
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import './styling/nav.css';
import './styling/main.css';
import './styling/intro.css';
import './styling/contact.css';
import './styling/about.css';
import './styling/categories.css';
import './styling/items.css';
import './styling/cart.css';
import { Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import CartItemsProvider from "./components/CartItemsProvider";

const App = () => { 
  return ( 
    <CartItemsProvider>
      <section className="app-container">
        <NavBar /> 
        <Routes>
          <Route path="/" element = { <Home/>} />
          <Route path="categories">
            <Route index element = {<Categories /> } />
            <Route path=":id" element = {<ItemList />} />
            <Route path = ":id/*" element = { <Item/>} /> 
          </Route>
          <Route path="/contact" element = { <Contact />} /> 
          <Route path="/about" element = { <About />} /> 
          <Route path="/cart" element = { <Cart />}/>
          <Route path="*" element = { <NotFound />} /> 
        </Routes>
      </section>
    </CartItemsProvider>
  )
};

export default App;