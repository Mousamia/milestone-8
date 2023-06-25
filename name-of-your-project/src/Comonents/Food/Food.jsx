/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Food.css'
const Food = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('foods.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])

  console.log(foods);

  return (
    <div>
      <h1> Food Menu</h1>


    </div>
  );
};

export default Food;