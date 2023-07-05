/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FoodItem.css'
import { addToDb, getfoodCart } from '../Utilities/fakedata';
import Navbar from '../Navbar/Navbar';


const FoodItem = ({ food }) => {
    const [cart, setCart] = useState([]);

    const handleBtn = (id) => {
        console.log("btn clicked of id", id);
        const newCart = [...cart, food];
        setCart(newCart);
        addToDb(food.id);
    }

    const { name, id, price, category, ingredients } = food;
    return (
        <div className='items'>
            <h1>{name}</h1>
            <h2> {category} </h2>
            <p>Price: <span> {price} </span> </p>
            <p> {ingredients[0]}, {ingredients[1]} , {ingredients[2]}, {ingredients[3]}</p>
            <button onClick={() => handleBtn(id)} className='btn'>
                add to cart
            </button>
          
        </div>
    );
};

export default FoodItem;