const getCart = () => {
  const cart = localStorage.getItem('cart');

  if (!cart) return [];

  return JSON.parse(cart);
};

const setCart = newCart => {
  const newCartString = JSON.stringify(newCart);

  localStorage.setItem('cart', newCartString);
};

const clearCart = () => {
  localStorage.setItem('cart', []);
};

const removeProduct = productId => {
  const oldCart = getCart();

  const productIndex = oldCart.findIndex(prod => prod.id === productId);

  const updatedCart = [...oldCart];
  updatedCart.splice(productIndex, 1);

  setCart(updatedCart);
};

// const sampleProduct = {
//   imgs: [
//     'https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
//     'https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
//   ],

//   id: '98df47jk43534',
//   subtitle: 'Men, Shirt',
//   title: 'Noice Shirt',
//   price: '69',
//   quantity: 2,
//   creator: 'Belo',
//   selectedColor: 'Yellow',
//   type: 'Shirt',
//   selectedStyle: 'Long Sleeve'
// };

// const sampleCart = [sampleProduct, sampleProduct, sampleProduct, sampleProduct];

// setCart(sampleCart);

export { getCart, setCart, clearCart, removeProduct };
