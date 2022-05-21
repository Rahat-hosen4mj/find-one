import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Home.css'

const Home = () => {
    // const [products, setProducts] = useState([]);
    const [Laptops, setLaptops] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    } ,[]);
    return (
        <div className='home-ui'>
           <div className='laptop-container'>
           {
                Laptops.map(laptop => <Laptop laptop={laptop} key={laptop.id}></Laptop>)
            }
           
           </div>
           <div className='cart-container'>
               <h2>Find one</h2>
           </div>
        </div>
    );
};

export default Home;