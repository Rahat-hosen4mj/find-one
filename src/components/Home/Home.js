import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Laptop from '../Laptop/Laptop';
import './Home.css'

const Home = () => {
    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    } ,[]);

    
    const handleAddToCart = (laptop) => {
        if(cart.length < 4){
            const newCart = [...cart, laptop];
            setCart(newCart);
        }else{
            alert('You can not add more than 4 cart');
        }
      
     }
    return (
        <div className='home-ui'>
           <div className='laptop-container'>
           {
                laptops.map(laptop => <Laptop laptop={laptop}
                     key={laptop.id}
                      handleAddToCart={handleAddToCart}>
                      </Laptop>)
            }
           
           </div>
           <div className='cart-container'>
              <Cart cart={cart} setCart={setCart}></Cart>
           </div>
        </div>
    );
};

export default Home;