import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        console.log(product.price, product.quantity)
        total += product.price* (product.quantity || 1);
        
    }
    return (
        <div>
            <h1>order summary</h1>
            <h5>items ordered: {cart.length}</h5>
            <p>total price: {total} </p>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;