import belinasiApi from '../apis/belinasiApi';

const getWishlist = async () => {
  let wishlist = localStorage.getItem('wishlist');
  if (!wishlist) return [];

  wishlist = JSON.parse(wishlist);

  // const wishlistHydrated = await Promise.all(
  //   wishlist.map(async ({ id, quantity }) => {
  //     const { data } = await belinasiApi.get(`/products/${id}`);

  //     return { ...data.data.product, quantity };
  //   })
  // );

  return wishlist;
};

const setWishlist = newWishlist => {
  const newWishlistString = JSON.stringify(newWishlist);

  localStorage.setItem('wishlist', newWishlistString);
};

const clearWishlist = () => {
  localStorage.setItem('wishlist', JSON.stringify([]));
};

const addToWishlist = productId => {
  const oldWishlist = JSON.parse(localStorage.getItem('wishlist'));

  if (oldWishlist.contains(productId)) return;

  setWishlist([...oldWishlist, productId]);
};

const removeFromWishlist = productId => {
  const oldWishlist = JSON.parse(localStorage.getItem('wishlist'));

  const productIndex = oldWishlist.findIndex(el => el === productId);

  if (productIndex === -1) return;

  let newWishlist = [...oldWishlist];
  newWishlist.splice(productIndex, 1);
  setWishlist(newWishlist);
};

export {
  getWishlist,
  setWishlist,
  clearWishlist,
  removeFromWishlist,
  addToWishlist
};
