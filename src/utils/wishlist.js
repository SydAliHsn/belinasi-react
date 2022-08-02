import belinasiApi from '../apis/belinasiApi';

const getWishlistQuantity = () => {
  let wishlist = localStorage.getItem('wishlist');

  if (!wishlist) {
    localStorage.setItem('wishlist', JSON.stringify([]));
    return [];
  } else {
    wishlist = JSON.parse(wishlist);
  }

  return wishlist.length;
};

const getWishlist = async () => {
  let wishlist = localStorage.getItem('wishlist');

  if (!wishlist) {
    localStorage.setItem('wishlist', JSON.stringify([]));
    return [];
  } else {
    wishlist = JSON.parse(wishlist);
  }

  const wishlistHydrated = await Promise.all(
    wishlist.map(async prod => {
      const { data } = await belinasiApi.get(`/products/${prod}`);

      return { ...data.data.product };
    })
  );

  return wishlistHydrated;
};

const setWishlist = newWishlist => {
  const newWishlistString = JSON.stringify(newWishlist);

  localStorage.setItem('wishlist', newWishlistString);
};

const clearWishlist = () => {
  localStorage.setItem('wishlist', JSON.stringify([]));
};

const addToWishlist = productId => {
  let oldWishlist = JSON.parse(localStorage.getItem('wishlist'));

  if (!oldWishlist) {
    localStorage.setItem('wishlist', JSON.stringify([]));
    oldWishlist = [];
  }

  if (oldWishlist.includes(productId)) return;

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

const wishlistProductExists = productId => {
  let wishlist = localStorage.getItem('wishlist');
  if (!wishlist) return false;

  wishlist = JSON.parse(wishlist);

  if (wishlist.includes(productId)) return true;

  return false;
};

export {
  getWishlist,
  setWishlist,
  clearWishlist,
  removeFromWishlist,
  addToWishlist,
  getWishlistQuantity,
  wishlistProductExists
};
