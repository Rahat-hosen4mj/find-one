import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
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

    // useEffect( () =>{
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart)
 
    // } ,[products]);
    
    const handleAddToCart = (laptop) => {
       console.log(laptop);
       const newCart = [...cart, laptop];
       setCart(newCart);
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
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;