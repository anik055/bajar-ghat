import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './home.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rhubarb-sundae-92097.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (

        <div>
            <div>
            {
                products.length === 0 && <div className=" spinn"><CircularProgress className=" spinn" /></div>
            }
        </div>
        <div className="product ">
            
            <div className="roww ">
            {
                products.map(product =><Product product={product}></Product>)
            }

        </div>
        </div>
        </div>
    );
};

export default Home;