import React from 'react';

const addToCart = productId => {
  console.log(productId, 'add to cart');
};
const addToWishlist = productId => {
  console.log(productId, 'add to wishlist');
};

export { addToCart, addToWishlist };
