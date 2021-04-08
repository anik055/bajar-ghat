import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Event from '../Product/Product';
import OrdersDetail from './OrdersDetail';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [events, setEvents] = useState([]);
    const email = loggedInUser.email;
    let emaill = 'anikzaman67@gmail.com';


    useEffect(() => {
        fetch(`https://rhubarb-sundae-92097.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => {
            setEvents(data)})
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
                events.map(event =><OrdersDetail event={event}></OrdersDetail>)
            }
            </table>

            
        </div>
    );
};

export default Orders;