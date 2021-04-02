import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
// import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/shipment');

    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);

    };
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        console.log(productKeys);

        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCart(data);
        })
        
    },[]);

    // let thankyou;
    // if(orderPlaced){
    //     thankyou = <img src={happyImage} alt=""/>
    // }

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd=> <ReviewItem 
                    product={pd}
                    removeProduct = {removeProduct}
                    ></ReviewItem>)
            }
            {/* {thankyou} */}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    
                    <button onClick={handleProceedCheckout} className="main-button"
                    >proceed Checkout</button>
                </Cart>

            </div>

        </div>
    );
};

export default Review;