import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/lore.jpg';

const NavBar = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="logo" className="logo-img" />

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
