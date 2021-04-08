import React, { useEffect, useState } from 'react';

import './admin.css';

const ManageItem = (product) => {
  const {name, price, _id} = product.product;
  console.log(product.product);
      const deleteProduct =(event, id )=> {

          fetch(`https://rhubarb-sundae-92097.herokuapp.com/delete/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data){
                  event.target.parentNode.parentNode.style.display = 'none';
              }
              })
      }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>1</td>
            <td><button onClick={(event)=>deleteProduct(event,_id)}>Delete</button></td>
        </tr>
    );
};

export default ManageItem;