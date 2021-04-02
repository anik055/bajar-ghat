import React from 'react';
import fakeData from '../../fakeData';


const Inventory = () => {
    const handleAddproduct = () => {
        const product = {};
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            <form action="">
                <p><span>name:</span><input type="text"/></p>
                <p><span>pricee</span><input type="text"/></p>
                <p><span></span><input type="text"/></p>
                <p><span>product image</span><input type="file"/></p>
                <button onClick={handleAddproduct} >add product</button>
            </form>
            
        </div>
    );
};

export default Inventory;