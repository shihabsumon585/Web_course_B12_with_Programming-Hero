import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCard}) => {
    
    const { img, name, price, stock } = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" className='img-radius' />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{stock} ...remaining</p>
            <button onClick={() => handleAddToCard(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;