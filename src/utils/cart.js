import belinasiApi from '../apis/belinasiApi';

const getCart = async () => {
  let cart = localStorage.getItem('cart');
  if (!cart) return [];

  cart = JSON.parse(cart);

  // const cartHydrated = await Promise.all(
  //   cart.map(async ({ id, quantity }) => {
  //     const { data } = await belinasiApi.get(`/products/${id}`);

  //     return { ...data.data.product, quantity };
  //   })
  // );

  return cart;
};

const setCart = newCart => {
  const newCartString = JSON.stringify(newCart);

  localStorage.setItem('cart', newCartString);
};

const clearCart = () => {
  localStorage.setItem('cart', []);
};

const removeFromCart = productId => {
  const oldCart = JSON.parse(localStorage.getItem('cart'));
  if (!oldCart) return;

  const productIndex = oldCart.findIndex(prod => prod.id === productId);
  // If the product isn't in the cart
  if (productIndex === -1) return;

  // If the quantity is greater than 1
  if (oldCart[productIndex].quantity > 1) {
    oldCart[productIndex].quantity--;
    return setCart(oldCart);
  }

  // If quantity is 1
  const updatedCart = [...oldCart];
  updatedCart.splice(productIndex, 1);

  setCart(updatedCart);
};

const addToCart = productId => {
  let oldCart = JSON.parse(localStorage.getItem('cart'));
  if (!oldCart) oldCart = [];

  const productIndex = oldCart.findIndex(prod => prod.id === productId);
  // If product isn't already in cart
  if (productIndex === -1)
    return setCart([...oldCart, { id: productId, quantity: 1 }]);

  const newCart = [...oldCart];
  newCart[productIndex].quantity++;
  setCart(newCart);
};

export { getCart, setCart, clearCart, removeFromCart, addToCart };

// const sampleProduct1 = {
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

// const sampleProduct2 = { ...sampleProduct1, id: 'sdh76s8df87' };
// const sampleProduct3 = { ...sampleProduct1, id: 'sdh26f8df89' };
// const sampleProduct4 = { ...sampleProduct1, id: 'wdh66ffdf81' };

// const sampleCart = [
//   sampleProduct1,
//   sampleProduct2,
//   sampleProduct3,
//   sampleProduct4
// ];

// setCart(sampleCart);
