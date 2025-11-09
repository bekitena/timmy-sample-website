import React from "react";
import "./LorealPage.css";
import lorealProducts from "./lorealData";

const LorealPage = () => {
  return (
    <div className="loreal-container">
      <h1>L'Oréal Products</h1>
      <div className="product-grid">
        {lorealProducts.map((item) => (
          <div className="product-card" key={item.id}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">

            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LorealPage;
