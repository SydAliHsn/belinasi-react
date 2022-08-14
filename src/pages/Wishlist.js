import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import Breadcrumb from '../components/Breadcrumb';
import Preloader from '../components/Preloader';
import { removeFromWishlist, getWishlist } from '../utils/wishlist';
import { addToCart } from '../utils/cart';
import { renderProductImages } from '../utils/productUtils';

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageStatus, setPageStatus] = useState('loading');

  const createNotif = (type, text) => {
    searchParams.append(type, text);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    (async function() {
      const wishlist = await getWishlist();
      setWishlistProducts(wishlist);

      setPageStatus('loaded');
    })();
  }, []);

  const renderWishlistProducts = () => {
    const productsMarkup = wishlistProducts.map((prod, i) => {
      return (
        <tr class="cart__table--body__items">
          <td class="cart__table--body__list">
            <div class="cart__product d-flex align-items-center">
              <button
                class="cart__remove--btn"
                aria-label="search button"
                type="button"
                onClick={() => {
                  removeFromWishlist(prod.id);
                  let updatedWishlist = [...wishlistProducts];
                  updatedWishlist.splice(i, 1);
                  setWishlistProducts(updatedWishlist);

                  createNotif(
                    'info',
                    `${prod.name} (${prod.type}) removed from wishlist.`
                  );
                }}
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                </svg>
              </button>
              <div class="cart__thumbnail">
                <Link to={`/products/${prod.id}`}>
                  <div className="border-radius-5">
                    {renderProductImages(prod)[0]}
                  </div>
                </Link>
              </div>
              <div class="cart__content">
                <h4 class="cart__content--title">
                  <Link to={`/products/${prod.id}`}>{prod.name}</Link>
                </h4>
                <span class="cart__content--variant">
                  CAMPAIGN: {prod.campaign.title}
                </span>
                <span class="cart__content--variant">Style: {prod.type}</span>
              </div>
            </div>
          </td>
          <td class="cart__table--body__list">
            <span class="cart__price">{prod.price} Rp</span>
          </td>
          <td class="cart__table--body__list text-center">
            {prod.active ? (
              <span class="in__stock text__secondary">Active</span>
            ) : (
              <span class="in__stock text__fade">Inactive</span>
            )}
          </td>
          <td class="cart__table--body__list text-right">
            <button
              class="wishlist__cart--btn primary__btn"
              onClick={() => {
                if (!prod.active)
                  return createNotif(
                    'error',
                    `${prod.name} (${prod.type}) is inactive, you cannot purchase it!`
                  );

                addToCart(prod.id, {
                  size: 'md',
                  color: prod.availableColors[0]
                });

                searchParams.append('minicart', true);
                createNotif(
                  'success',
                  `${prod.name} (${prod.type}) added to cart.`
                );
              }}
            >
              Add To Cart
            </button>
          </td>
        </tr>
      );
    });

    return productsMarkup;
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

      <Header />

      <main class="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <Breadcrumb pageName="Wishlist" />
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- cart section start --> */}
        <section class="cart__section section--padding">
          <div class="container">
            <div class="cart__section--inner">
              <div>
                <h2 class="cart__title mb-40">Wishlist</h2>
                <div class="cart__table">
                  <table class="cart__table--inner">
                    <thead class="cart__table--header">
                      <tr class="cart__table--header__items">
                        <th class="cart__table--header__list">Product</th>
                        <th class="cart__table--header__list">Price</th>
                        <th class="cart__table--header__list text-center">
                          STATUS
                        </th>
                        <th class="cart__table--header__list text-right">
                          ADD TO CART
                        </th>
                      </tr>
                    </thead>
                    <tbody class="cart__table--body">
                      {renderWishlistProducts()}
                    </tbody>
                  </table>
                  <div class="continue__shopping d-flex justify-content-between">
                    <Link class="continue__shopping--link" to="/">
                      Continue shopping
                    </Link>
                    <Link class="continue__shopping--clear" to="/shop">
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- cart section end --> */}

        {/* <!-- Start product section --> */}

        {/* <!-- End product section --> */}

        {/* <!-- Start brand logo section --> */}
        <div class="brand__logo--section bg__secondary section--padding">
          <div class="container-fluid">
            <div class="row row-cols-1">
              <div class="col">
                <div class="brand__logo--section__inner d-flex justify-content-center align-items-center">
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src="assets/img/logo/brand-logo1.png"
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src="assets/img/logo/brand-logo2.png"
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src="assets/img/logo/brand-logo3.png"
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src="assets/img/logo/brand-logo4.png"
                      alt="brand logo"
                    />
                  </div>
                  <div class="brand__logo--items">
                    <img
                      class="brand__logo--items__thumbnail--img display-block"
                      src="assets/img/logo/brand-logo5.png"
                      alt="brand logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End brand logo section --> */}

        <Shipping />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Wishlist;
