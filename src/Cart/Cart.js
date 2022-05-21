import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let name = '';
    for(const laptop of cart){
        total = total + laptop.price;
        name = name + laptop.brand + ' ';
    }
    return (
        <div className='cart'>
            <h2>Find One</h2>
            <p>Name : {name} </p>
            <p>Price : {total} </p>
        </div>
    );
};

export default Cart;