/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Food.css'
import FoodItem from '../FoodItem/FoodItem';


const Food = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('foods.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])

  console.log(foods);

  return (
    <div >
      <h1>Food Menu</h1>

      <div className='container'>
        {
          foods.map(food => <FoodItem
            food={food}
          ></FoodItem>)
        }


      </div>
    </div>
  );
};

export default Food;