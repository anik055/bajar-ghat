import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './shipment.css'

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    const savedCart = getDatabaseCart();
    const orderDetails = {...loggedInUser, products: savedCart, Shipment: data, orderTime: new Date()};

    fetch('https://serene-island-10470.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            if(data){
              processOrder();

              alert('order placed successfully')
            }
        })


  };

  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      {/* <input name="example" defaultValue="test" ref={register} /> */}
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="your name" />
      {errors.name && <span className="error">name is required</span>}

      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="your email" />
      {errors.email && <span className="error">email is required</span>}

      <input name="address"  ref={register({ required: true })} placeholder="your address" />
      {errors.address && <span className="error">address is required</span>}

      <input name="phone"  ref={register({ required: true })} placeholder="your phone" />
      {errors.phone && <span className="error">phone is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;