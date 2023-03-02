import React from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories"
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import './styling/nav.css';
import './styling/main.css';
import { Routes, Route } from "react-router-dom";


const App = () => { 
  return ( 
    <section className="app-container">
      <NavBar /> 
      <Routes>
        <Route path="/" element = { <Home/>} />
        <Route path="/categories" element = {<Categories />} />
        <Route path ='/categories/:id' element = { <ItemList />} />
        <Route path="/contact" element = { <Contact />} /> 
        <Route path="/about" element = { <About />} /> 
        <Route path="/cart" element = { <Cart />}/>
        <Route path="/*" element = { <NotFound />} /> 
      </Routes>
    </section>
  )
};

export default App;