import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    
    return (
        <div>
            <h2>{props.cart.length}</h2>
        </div>
    );
};

export default Cart;