import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Laptop.css';

const Laptop = ({laptop, handleAddToCart}) => {
    const {name, brand, img, price} = laptop
    return (
        <div className='laptop'>
            <img src={img} alt="" />
            <div className='laptop-info'>
               <p>Name : {name} </p>
                <p>Brand : {brand}</p>
               <p>Price : ${price} </p>
            </div>
            <button onClick={() => handleAddToCart(laptop)}  className='laptop-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;