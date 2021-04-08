import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrdersDetail from './OrdersDetail';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([]);
    const email = loggedInUser.email;


    useEffect(() => {
        fetch(`https://rhubarb-sundae-92097.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)})
    }, [])

    return (
        <div >
            <table>
            <tr className="my-2 bg-warning">
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Order date</th>
            </tr>
            <hr/>
            {
                products.map(product =><OrdersDetail product={product}></OrdersDetail>)
            }
            </table>

            
        </div>
    );
};

export default Orders;