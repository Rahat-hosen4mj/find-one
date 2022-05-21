import React from 'react';
import './Laptop.css';

const Laptop = (props) => {
    const { brand, img, price} = props.laptop
    return (
        <div className='laptop'>
            <img src={img} alt="" />
            <div className='laptop-info'>
               <p>Name : {brand} </p>
               <p>Price : ${price} </p>
            </div>
            <button className='laptop-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Laptop;