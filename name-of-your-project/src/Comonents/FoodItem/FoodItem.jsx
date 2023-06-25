/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './FoodItem.css'


const FoodItem = ({ food }) => {
    // console.log(props);
    const { name, id, price, category, ingredients } = food;
    return (
        <div className='items'>
            <h1>{name}</h1>
            <h2> {category} </h2>
            <p> {ingredients[0]}, {ingredients[1]} , {ingredients[2]}, {ingredients[3]}</p>
            <button className='btn'>
                add to cart
            </button>

        </div>
    );
};

export default FoodItem;