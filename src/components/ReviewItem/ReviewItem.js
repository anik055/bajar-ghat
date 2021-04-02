import React from 'react';

const ReviewItem = (props) => {
    const {name,  quantity, key, price} = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity:  {quantity}</p>
            <p>${price}</p>
            <br/>
            <button 
            className="main-button"
            onClick={() => props.removeProduct(key)}
            >remove</button>
        </div>
    );
};

export default ReviewItem;