/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getfoodCart } from '../Utilities/fakedata';
import Food from '../Food/Food';

const Navbar = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    useEffect(() => {
        const storedCart = getfoodCart();
        console.log(foods);
        console.log(storedCart);
        for (let id in storedCart) {
            console.log(id);
        }
    }, [])


    return (
        <div>
            Food added : <span>  </span>
        </div>
    );
};

export default Navbar;