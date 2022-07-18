import belinasiApi from '../apis/belinasiApi';

const getCartQuantity = () => {
  let cart = localStorage.getItem('cart');

  if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  return cart.reduce((total, prod) => {
    return total + prod.quantity;
  }, 0);
};

const getCart = async () => {
  let cart = localStorage.getItem('cart');
  if (!cart) return [];

  cart = JSON.parse(cart);

  const cartHydrated = await Promise.all(
    cart.map(async ({ product, quantity, color, size }) => {
      const { data } = await belinasiApi.get(`/products/${product}`);

      return { ...data.data.product, quantity, color, size };
    })
  );

  return cartHydrated;
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

  const productIndex = oldCart.findIndex(prod => prod.product === productId);
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

const addToCart = (productId, options = {}) => {
  let oldCart = localStorage.getItem('cart');

  if (!oldCart) {
    localStorage.setItem('cart', JSON.stringify([]));
    oldCart = [];
  } else {
    oldCart = JSON.parse(oldCart);
  }

  const productIndex = oldCart.findIndex(prod => prod.product === productId);
  // If product isn't already in cart
  if (productIndex === -1)
    return setCart([
      ...oldCart,
      {
        product: productId,
        quantity: options.quantity || 1,
        size: options.size || 'md',
        color: options.color || 'default'
      }
    ]);

  const newCart = [...oldCart];

  options.quantity
    ? (newCart[productIndex].quantity = options.quantity)
    : newCart[productIndex].quantity++;

  options.size
    ? (newCart[productIndex].size = options.size)
    : (newCart[productIndex].size = 'md');

  options.color
    ? (newCart[productIndex].color = options.color)
    : (newCart[productIndex].color = 'default');

  setCart(newCart);
};

export {
  getCart,
  getCartQuantity,
  setCart,
  clearCart,
  removeFromCart,
  addToCart
};
