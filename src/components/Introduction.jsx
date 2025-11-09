import React from 'react'
import './Intro.css'
import { useNavigate } from 'react-router-dom';
import loreal from '../../public/assets/loreal.jpg'

const Introduction = () => {

const navigate = useNavigate();
const handleShopNow  = () => {
    navigate('/product'); 
}

  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Glow Starts Here</h1>
        <p>Welcome to LOREAL, where your natural beauty shines brightest. Explore our collection of skincare & makeup essentials made just for you.</p>
       <button className="shop-btn" onClick={handleShopNow}>
  Shop Now
</button>

      </div>
      <div className="intro-image">
        <img src={loreal} alt="loreal intro pic" />
      </div>
    </div>
  )
}

export default Introduction
