/* eslint-disable no-unused-vars */
// manage localstorge
const addToLoclStorge = id => {
    // it will give the value of id
    const kuntity = localStorage.getItem(id);
    console.log(kuntity);

    let shoppingCart;
   
   
    if(kuntity){
      let newKuntity = parseInt(kuntity) + 1;
      localStorage.setItem(id, newKuntity);


    }
    else {
        localStorage.setItem(id, 1);
        console.log("one item added");
    }
}

export { addToLoclStorge };