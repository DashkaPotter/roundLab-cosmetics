import React from "react";
import './App.css';
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import Products from "./Components/ProductComponents/Products";
import Home from "./Components/Home/Home";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector(".burger").classList.add("open");
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector(".burger").classList.remove("open");
  };
  return (
    <div className="App">
    
    <Router>
      <nav className="navBar">
      <h2 className="logo">Round Lab</h2>
        <div className='nav-container'>
        
      <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/products" >Products</Link>
        <Link className='link' to="/cart" >Cart</Link>
        </div>
        <div className="burger" onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
      </nav>
      {menuOpen && (
    <div className="overlay" onClick={closeMenu}>
      <div className="menu">
        <button className="close-button" onClick={closeMenu}>&times;</button>
        <nav>
          <Link className='link' onClick={closeMenu} to="/"> Home</Link>
          <Link className='link' onClick={closeMenu} to="products"> Products</Link>
          <Link className='link' onClick={closeMenu} to="/cart">Cart</Link>

        </nav>
      </div>
    </div>
  )}
        <Routes>
        <Route  path='/' element={<Home/>} /> 
        <Route  path='/products' element={<Products/>}/> 
        <Route  path='/cart' element={<Cart/>}/>
        
        </Routes>
        </Router>
    </div>
  );
}

export default App;
