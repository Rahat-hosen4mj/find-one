import React from 'react';
import './Cart.css'

const Cart = ({cart, setCart}) => { 
    
    
    const randomChoose = () =>{
         
        let randomItem = cart[Math.floor(Math.random()*cart.length)];
        // console.log(randomItem);
        setCart([randomItem]);
    }

    
    return (
        <div className='cart'>
            <h2>Find one</h2>

            <p>length : {cart.length} </p>
             {
                 cart.map(item => (
                    <div key={item.id}>
                        
                        <p>{item.name}</p>
                    </div>

                 ))
             }

           <button onClick={randomChoose}>Choose 1 for me</button><br />
           <button onClick={() => setCart([])}>Choose again</button>
        </div>
    );
};

export default Cart;