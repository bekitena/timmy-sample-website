import React from 'react'
import CarCard from './CarCard.jsx'
import './Car.css'
import data from './data.js'

const Car = () => {

  return (
    <div className='car-container'>
      {data.map((item, index) => (
        <CarCard
          key={index}
          brand={item.brand}
          plate={item.plate}
          price={item.price}
         image={item.image}
        />
      ))}
    </div>
  );
};

export default Car;
