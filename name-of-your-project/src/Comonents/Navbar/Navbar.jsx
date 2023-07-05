/* eslint-disable no-unused-vars */
import React from 'react';
import {  getfoodCart } from '../Utilities/fakedata';

const Navbar = () => {
    let storedCart = getfoodCart();
    console.log(storedCart);
  
    return (
        <div>
            Food added : <span>  </span>
        </div>
    );
};

export default Navbar;