import React from 'react'
import './CarCard.css'

const CarCard = ({brand,plate,price, image}) => {
    
  return (
    <div className='container'>
<img src={`/assets/${image}`} alt={brand} width="200" height="120" />
      <p >Brand: {brand} </p>
     <p  >Plate: {plate} </p>
      <p  >Price: {price} </p>
    </div>
  )
}

export default CarCard


