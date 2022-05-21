import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Find One</h2>
            <p>Name : {cart.length} </p>
        </div>
    );
};

export default Cart;