import React from 'react';
import { Link } from 'react-router-dom';
// import { addToCart, addToWishlist } from '../utils';
import { addToCart } from '../utils/cart';
import { addToWishlist } from '../utils/wishlist';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';

const Wishlist = () => {
  return (
    <React.Fragment>
      <Header />

      <main class="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <section class="breadcrumb__section breadcrumb__bg">
          <div class="container">
            <div class="row row-cols-1">
              <div class="col">
                <div class="breadcrumb__content text-center">
                  <h1 class="breadcrumb__content--title text-white mb-25">
                    Wishlist
                  </h1>
                  <ul class="breadcrumb__content--menu d-flex justify-content-center">
                    <li class="breadcrumb__content--menu__items">
                      <a class="text-white" href="index.html">
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb__content--menu__items">
                      <span class="text-white">My Account</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- cart section start --> */}
        <section class="cart__section section--padding">
          <div class="container">
            <div class="cart__section--inner">
              <form action="#">
                <h2 class="cart__title mb-40">Wishlist</h2>
                <div class="cart__table">
                  <table class="cart__table--inner">
                    <thead class="cart__table--header">
                      <tr class="cart__table--header__items">
                        <th class="cart__table--header__list">Product</th>
                        <th class="cart__table--header__list">Price</th>
                        <th class="cart__table--header__list text-center">
                          STOCK STATUS
                        </th>
                        <th class="cart__table--header__list text-right">
                          ADD TO CART
                        </th>
                      </tr>
                    </thead>
                    <tbody class="cart__table--body">
                      <tr class="cart__table--body__items">
                        <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                            <button
                              class="cart__remove--btn"
                              aria-label="search button"
                              type="button"
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
                              <a href="product-details.html">
                                <img
                                  class="border-radius-5"
                                  src="assets/img/product/product1.png"
                                  alt="cart-product"
                                />
                              </a>
                            </div>
                            <div class="cart__content">
                              <h4 class="cart__content--title">
                                <a href="product-details.html">
                                  Fresh-whole-fish
                                </a>
                              </h4>
                              <span class="cart__content--variant">
                                COLOR: Blue
                              </span>
                              <span class="cart__content--variant">
                                WEIGHT: 2 Kg
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="cart__table--body__list">
                          <span class="cart__price">£65.00</span>
                        </td>
                        <td class="cart__table--body__list text-center">
                          <span class="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td class="cart__table--body__list text-right">
                          <a
                            class="wishlist__cart--btn primary__btn"
                            // href="cart.html"
                            onClick={() => addToCart('sdhfsdgh')}
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                      <tr class="cart__table--body__items">
                        <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                            <button
                              class="cart__remove--btn"
                              aria-label="search button"
                              type="button"
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
                              <a href="product-details.html">
                                <img
                                  class="border-radius-5"
                                  src="assets/img/product/product2.png"
                                  alt="cart-product"
                                />
                              </a>
                            </div>
                            <div class="cart__content">
                              <h4 class="cart__content--title">
                                <a href="product-details.html">
                                  Vegetable-healthy
                                </a>
                              </h4>
                              <span class="cart__content--variant">
                                COLOR: Blue
                              </span>
                              <span class="cart__content--variant">
                                WEIGHT: 2 Kg
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="cart__table--body__list">
                          <span class="cart__price">£65.00</span>
                        </td>
                        <td class="cart__table--body__list text-center">
                          <span class="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td class="cart__table--body__list text-right">
                          <a
                            class="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                      <tr class="cart__table--body__items">
                        <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                            <button
                              class="cart__remove--btn"
                              aria-label="search button"
                              type="button"
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
                              <a href="product-details.html">
                                <img
                                  class="border-radius-5"
                                  src="assets/img/product/product3.png"
                                  alt="cart-product"
                                />
                              </a>
                            </div>
                            <div class="cart__content">
                              <h4 class="cart__content--title">
                                <a href="product-details.html">
                                  Raw-onions-surface
                                </a>
                              </h4>
                              <span class="cart__content--variant">
                                COLOR: Blue
                              </span>
                              <span class="cart__content--variant">
                                WEIGHT: 2 Kg
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="cart__table--body__list">
                          <span class="cart__price">£65.00</span>
                        </td>
                        <td class="cart__table--body__list text-center">
                          <span class="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td class="cart__table--body__list text-right">
                          <a
                            class="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                      <tr class="cart__table--body__items">
                        <td class="cart__table--body__list">
                          <div class="cart__product d-flex align-items-center">
                            <button
                              class="cart__remove--btn"
                              aria-label="search button"
                              type="button"
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
                              <a href="product-details.html">
                                <img
                                  class="border-radius-5"
                                  src="assets/img/product/product4.png"
                                  alt="cart-product"
                                />
                              </a>
                            </div>
                            <div class="cart__content">
                              <h4 class="cart__content--title">
                                <a href="product-details.html">
                                  Oversize Cotton Dress
                                </a>
                              </h4>
                              <span class="cart__content--variant">
                                COLOR: Blue
                              </span>
                              <span class="cart__content--variant">
                                WEIGHT: 2 Kg
                              </span>
                            </div>
                          </div>
                        </td>
                        <td class="cart__table--body__list">
                          <span class="cart__price">£65.00</span>
                        </td>
                        <td class="cart__table--body__list text-center">
                          <span class="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td class="cart__table--body__list text-right">
                          <a
                            class="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="continue__shopping d-flex justify-content-between">
                    <Link class="continue__shopping--link" to={'/'}>
                      Continue shopping
                    </Link>
                    <Link class="continue__shopping--clear" to={'/shop'}>
                      View All Products
                    </Link>
                  </div>
                </div>
              </form>
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
