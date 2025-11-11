import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-container">
      <img src="/timmy-sample-website/assets/lore.png" alt="logo" className="logo-img" />

      <nav className="nav-links">
        <Link to="/">Home</Link>             
        <Link to="/product">Product</Link>  
        <Link to="/contact">Contact</Link> 
        <Link to="/portfolio">Portfolio</Link> 
      </nav>
    </div>
  );
};

export default NavBar;
