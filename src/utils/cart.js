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

export { getCart, setCart, clearCart };
