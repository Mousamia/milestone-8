// use local storage to manage cart data
const addToDb = id => {
  let foodCart = getfoodCart();
  // add quantity
  const quantity = foodCart[id];
  if (!quantity) {
      foodCart[id] = 1;
  }
  else {
      const newQuantity = quantity + 1;
      foodCart[id] = newQuantity;
  }
  localStorage.setItem('food-cart', JSON.stringify(foodCart));
}

const removeFromDb = id => {
  const foodCart = getfoodCart();
  if (id in foodCart) {
      delete foodCart[id];
      localStorage.setItem('food-cart', JSON.stringify(foodCart));
  }
}

const getfoodCart = () => {
  let foodCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('food-cart');
  if (storedCart) {
      foodCart = JSON.parse(storedCart);
  }
  return foodCart;
}

const deletefoodCart = () => {
  localStorage.removeItem('food-cart');
}

export {
  addToDb,
  removeFromDb,
  getfoodCart,
  deletefoodCart
}