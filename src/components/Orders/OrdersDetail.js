import React, { useContext, useEffect, useState } from 'react';
// import CheckOut from '../CheckOut/CheckOut';
// import './event.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../App';

const OrdersDetail = ({event}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    const [cart, setCart] = useState(event);

    const onSubmit = cart => {
        const eventData = {
          name: event.name,
          price: event.price,
          email: loggedInUser.email,
          imageURL: event.imageURL
        };

        fetch(`https://rhubarb-sundae-92097.herokuapp.com/deleteOldOrder`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              // if(data){
              //     event.target.parentNode.parentNode.style.display = 'none';
              // }
            })
        const url = `https://rhubarb-sundae-92097.herokuapp.com/addNewOrder`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data) )
        // alert('product added successfully');
      };


    const deleteEvent = id => {
        const newProduct = {
            name:event.name,
            price:event.price
        }
        setCart(newProduct);

    }
    return (
            <tr className="bg-primary">
            <td>{event.name}</td>
            <td>1</td>
            <td>${event.price}</td>
            <td>{event.orderTime.slice(0,10)}</td>
            </tr>


    );
};

export default OrdersDetail;