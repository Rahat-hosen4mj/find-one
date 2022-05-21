import React, { useEffect, useState } from 'react';

const Home = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);
    return (
        <div>
            <h3>This is home page : {products.length} </h3>
            <p>i am editing this home page</p>
        </div>
    );
};

export default Home;