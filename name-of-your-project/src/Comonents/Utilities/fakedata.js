/* eslint-disable no-unused-vars */
// manage localstorge
const addToLoclStorge = id => {
    // it will give the value of id

    let foodCart = {};
    // getting the object
    const storedCart = localStorage.getItem("food-cart");
    console.log(storedCart);

    if(storedCart){
      // converting the object into string
      foodCart = JSON.parse(storedCart);

    }

    else{
      foodCart = {};
    }


    const kuntity = foodCart[id];

    
  //  icresing vlue of object property
    if(kuntity){
      let newKuntity = kuntity + 1;
      foodCart[id] = newKuntity;


    }
    else {
        foodCart[id] = 1;
    }

    localStorage.setItem("food-cart", JSON.stringify(foodCart));

    return foodCart;

}

export { addToLoclStorge };