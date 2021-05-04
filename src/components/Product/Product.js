import React, { useEffect, useState } from 'react';
import './product.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Product = ({product}) => {
  const {name,price, imageURL} = product;

    const onSubmit = () => {
        const eventData = {
          name: name,
          price: price,
          imageURL: imageURL
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

      };


    return (
        <div className="column ">
          <div className=" card d-flex justify-content-center">
            <img style={{height: '250px'}} src={imageURL} alt=""/>
            <h3 >{name}</h3><span className="text-primary">$ {price}</span> <Link to = "/checkOut"> <button onClick={ onSubmit} className="btn btn-primary">Buy Now</button></Link>
        </div>
        </div>
    );
};

export default Product;