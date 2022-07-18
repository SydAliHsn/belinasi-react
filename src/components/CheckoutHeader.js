import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutHeader = ({ products }) => {
  const getTotal = () => {
    return products.reduce((amount, el) => {
      return amount + el.price * el.quantity;
    }, 0);
  };

  const renderSummaryProducts = () => {
    return products.map(product => {
      return (
        <tr class="summary__table--items">
          <td class=" summary__table--list">
            <div class="cart__product d-flex align-items-center">
              <div class="product__thumbnail border-radius-5">
                <a href="product-details.html">
                  <img
                    class="border-radius-5"
                    src={product.images[0]}
                    alt="cart-product"
                  />
                </a>
                <span class="product__thumbnail--quantity">
                  {product.quantity}
                </span>
              </div>
              <div class="product__description">
                <h3 class="product__description--name h4">
                  <a href="product-details.html">{product.title}</a>
                </h3>
                <span class="product__description--variant">
                  COLOR: {product.selectedColor}
                </span>
              </div>
            </div>
          </td>
          <td class=" summary__table--list">
            <span class="cart__price">${product.price * product.quantity}</span>
          </td>
        </tr>
      );
    });
  };

  return (
    <header class="main__header checkout__mian--header mb-30">
      <h1 class="main__logo--title">
        <Link class="main__logo--link" to="/">
          <img class="main__logo--img" src="" />
          BELINASI
        </Link>
      </h1>
      <details class="order__summary--mobile__version my-3">
        <summary class="order__summary--toggle border-radius-5">
          <span class="order__summary--toggle__inner">
            <span class="order__summary--toggle__icon">
              <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="order__summary--toggle__text show">
              <span>Show order summary </span>{' '}
              <svg
                width="11"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
                class="order-summary-toggle__dropdown"
                fill="currentColor"
              >
                <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path>
              </svg>
            </span>
            <span class="order__summary--final__price">{getTotal()} Rp</span>
          </span>
        </summary>

        <div class="order__summary--section">
          <div class="cart__table checkout__product--table">
            <table class="summary__table">
              <tbody class="summary__table--body">
                {renderSummaryProducts()}
              </tbody>
            </table>
          </div>
          <div class="checkout__discount--code">
            <form class="d-flex" action="#">
              <label>
                <input
                  class="checkout__discount--code__input--field border-radius-5"
                  placeholder="Gift card or discount code"
                  type="text"
                />
              </label>
              <button
                class="checkout__discount--code__btn primary__btn border-radius-5"
                type="submit"
              >
                Apply
              </button>
            </form>
          </div>
          <div class="checkout__total">
            <table class="checkout__total--table">
              <tbody class="checkout__total--body">
                <tr class="checkout__total--items">
                  <td class="checkout__total--title text-left">Subtotal </td>
                  <td class="checkout__total--amount text-right">
                    {getTotal()} Rp
                  </td>
                </tr>
                <tr class="checkout__total--items">
                  <td class="checkout__total--title text-left">Shipping</td>
                  <td class="checkout__total--calculated__text text-right">
                    Calculated at next step
                  </td>
                </tr>
              </tbody>
              <tfoot class="checkout__total--footer">
                <tr class="checkout__total--footer__items">
                  <td class="checkout__total--footer__title checkout__total--footer__list text-left">
                    Total{' '}
                  </td>
                  <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
                    {getTotal()} Rp
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </details>
      <nav>
        <ol class="breadcrumb checkout__breadcrumb d-flex">
          <li class="breadcrumb__item breadcrumb__item--completed d-flex align-items-center">
            <a class="breadcrumb__link" href="cart.html">
              Cart
            </a>
            <svg
              class="readcrumb__chevron-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="17.007"
              height="16.831"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              ></path>
            </svg>
          </li>

          <li class="breadcrumb__item breadcrumb__item--current d-flex align-items-center">
            <span class="breadcrumb__text current">Information</span>
            <svg
              class="readcrumb__chevron-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="17.007"
              height="16.831"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              ></path>
            </svg>
          </li>
          {/* <li class="breadcrumb__item breadcrumb__item--blank d-flex align-items-center">
            <span class="breadcrumb__text">Shipping</span>
            <svg
              class="readcrumb__chevron-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="17.007"
              height="16.831"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M184 112l144 144-144 144"
              ></path>
            </svg>
          </li> */}
          <li class="breadcrumb__item breadcrumb__item--blank">
            <span class="breadcrumb__text">Payment</span>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default CheckoutHeader;
