import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './checkout.css'
const CheckOut = (props) => {
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, price} = product;
    console.log(name);


    const addToOrder = () => {
        const orderData = {
            name: product.name,
            price: product.price,
            email: loggedInUser.email,
            orderTime: new Date()
        }
        const url = `https://rhubarb-sundae-92097.herokuapp.com/addToOrder`;

    
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(data => console.log(data) )
    alert('product added successfully');
  };

    useEffect(() => {
        fetch('https://rhubarb-sundae-92097.herokuapp.com/newOrder')
        .then(res => res.json())
        .then(data => {
            setProduct(data[0])})
    }, [])

    return (
        <div className="content">
            <table className="d-flex justify-content-center header text-white">
            <tr>
                <th>Product name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>{product.name}</td>
                <td>1</td>
                <td>{product.price}</td>
            </tr>
            </table>
            <hr/>
            <table>
            <tr>
                <td>Total</td>
                <td></td>
                <td>{product.price}</td>
            </tr>
            </table>
            <button className="btn btn-primary"onClick={addToOrder}>Check Out</button>
        </div>
    )
        };

export default CheckOut;