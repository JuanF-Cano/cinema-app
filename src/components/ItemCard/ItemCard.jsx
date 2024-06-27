import React from 'react';
import "./ItemCard.css";

function ItemCard({image, title, age, gender}) {
  return (
      <div className="item-card">
        <img 
        className="item-card-image"
        src={image}
        alt={title}
          />
        <div className='content-item-info'>
            <h3 className='item-title'>{title}</h3>
            <p className='item-text'>{age + " | " + gender} </p>
        </div>
      </div>
    )
}

export default ItemCard;