/* eslint-disable no-unused-vars */
import React from 'react';
import { addToLoclStorge } from '../Utilities/fakedata';

const Navbar = () => {
    const foodSved =  addToLoclStorge();
   
    return (
        <div>
            Food added : <span> {foodSved[1]}  </span>
        </div>
    );
};

export default Navbar;