import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import { getCart, setCart, clearCart } from '../utils/cart';

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

const Cart = () => {
  // setCart(sampleCart) for testing

  // const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // setCartProducts(getCart());
  }, []);

  const cart = getCart();

  const renderCartProducts = () => {
    return cart.map(product => {
      return (
        <tr class="cart__table--body__items" product={product}>
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
                <Link to={`/products/${product.id}`}>
                  <img
                    class="border-radius-5"
                    src={product.imgs[1]}
                    alt="cart-product"
                  />
                </Link>
              </div>
              <div class="cart__content">
                <h4 class="cart__content--title">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </h4>
                <span class="cart__content--variant">
                  COLOR: {product.selectedColor}
                </span>
                <span class="cart__content--variant">
                  Style: {product.selectedStyle}
                </span>
              </div>
            </div>
          </td>
          <td class="cart__table--body__list">
            <span class="cart__price">$ {product.price}</span>
          </td>
          <td class="cart__table--body__list">
            <div class="quantity__box">
              <button
                type="button"
                class="quantity__value quickview__value--quantity decrease"
                aria-label="quantity value"
                value="Decrease Value"
              >
                -
              </button>
              <label>
                <input
                  type="number"
                  class="quantity__number quickview__value--number"
                  value={product.quantity}
                  data-counter
                />
              </label>
              <button
                type="button"
                class="quantity__value quickview__value--quantity increase"
                aria-label="quantity value"
                value="Increase Value"
              >
                +
              </button>
            </div>
          </td>
          <td class="cart__table--body__list">
            <span class="cart__price end">
              $ {product.price * product.quantity}
            </span>
          </td>
        </tr>
      );
    });
  };

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
                    Shopping Cart
                  </h1>
                  <ul class="breadcrumb__content--menu d-flex justify-content-center">
                    <li class="breadcrumb__content--menu__items">
                      <Link class="text-white" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="breadcrumb__content--menu__items">
                      <span class="text-white">Shopping Cart</span>
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
          <div class="container-fluid">
            <div class="cart__section--inner">
              <form action="#">
                <h2 class="cart__title mb-40">Shopping Cart</h2>
                <div class="row">
                  <div class="col-lg-8">
                    <div class="cart__table">
                      <table class="cart__table--inner">
                        <thead class="cart__table--header">
                          <tr class="cart__table--header__items">
                            <th class="cart__table--header__list">Product</th>
                            <th class="cart__table--header__list">Price</th>
                            <th class="cart__table--header__list">Quantity</th>
                            <th class="cart__table--header__list">Total</th>
                          </tr>
                        </thead>
                        <tbody class="cart__table--body">
                          {renderCartProducts()}
                        </tbody>
                      </table>

                      <div class="continue__shopping d-flex justify-content-between">
                        <Link class="continue__shopping--link" to="/shop">
                          Continue shopping
                        </Link>
                        <button class="continue__shopping--clear" type="submit">
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="cart__summary border-radius-10">
                      <div class="coupon__code mb-30">
                        <h3 class="coupon__code--title">Coupon</h3>
                        <p class="coupon__code--desc">
                          Enter your coupon code if you have one.
                        </p>
                        <div class="coupon__code--field d-flex">
                          <label>
                            <input
                              class="coupon__code--field__input border-radius-5"
                              placeholder="Coupon code"
                              type="text"
                            />
                          </label>
                          <button
                            class="coupon__code--field__btn primary__btn"
                            type="submit"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                      <div class="cart__note mb-20">
                        <h3 class="cart__note--title">Note</h3>
                        <p class="cart__note--desc">
                          Add special instructions for your seller...
                        </p>
                        <textarea class="cart__note--textarea border-radius-5"></textarea>
                      </div>
                      <div class="cart__summary--total mb-20">
                        <table class="cart__summary--total__table">
                          <tbody>
                            <tr class="cart__summary--total__list">
                              <td class="cart__summary--total__title text-left">
                                SUBTOTAL
                              </td>
                              <td class="cart__summary--amount text-right">
                                $860.00
                              </td>
                            </tr>
                            <tr class="cart__summary--total__list">
                              <td class="cart__summary--total__title text-left">
                                GRAND TOTAL
                              </td>
                              <td class="cart__summary--amount text-right">
                                $860.00
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cart__summary--footer">
                        <p class="cart__summary--footer__desc">
                          Shipping & taxes calculated at checkout
                        </p>
                        <ul class="d-flex justify-content-between">
                          <li>
                            <button
                              class="cart__summary--footer__btn primary__btn cart"
                              type="submit"
                            >
                              Update Cart
                            </button>
                          </li>
                          <li>
                            <Link
                              class="cart__summary--footer__btn primary__btn checkout"
                              to="/checkout"
                            >
                              Check Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- cart section end --> */}

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

        {/* <!-- Start shipping section --> */}
        <Shipping />
        {/*  <!-- End shipping section --> */}
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Cart;
