import React from 'react';
import { Link } from 'react-router-dom';
import { renderProductImages } from '../utils/productUtils';

// import { getCart } from '../utils/cart';

const CheckoutSidebar = ({ cartProducts, total }) => {
  const renderProducts = () => {
    return cartProducts.map(product => {
      return (
        <tr class="cart__table--body__items">
          <td class="cart__table--body__list">
            <div class="product__image two  d-flex align-items-center">
              <div class="product__thumbnail border-radius-5">
                <Link to={`/products/${product.id}`}>
                  <div class="border-radius-5">
                    {renderProductImages(product, product.color)[0]}
                  </div>
                </Link>
                <span class="product__thumbnail--quantity">
                  {product.quantity}
                </span>
              </div>
              <div class="product__description">
                <h3 class="product__description--name h4">
                  <a href="product-details.html">
                    {product.name} ({product.type})
                  </a>
                </h3>
                <div class="product__description--variant">
                  COLOR:
                  {product.color.slice(0, 1).toUpperCase() +
                    product.color.slice(1)}
                </div>
                <div class="product__description--variant">
                  SIZE: {product.size.toUpperCase()}
                </div>
              </div>
            </div>
          </td>
          <td class="cart__table--body__list">
            <span class="cart__price">
              {product.quantity * product.price} Rp
            </span>
          </td>
        </tr>
      );
    });
  };

  const getTotal = () => {
    return cartProducts.reduce((amount, el) => {
      return amount + el.price * el.quantity;
    }, 0);
  };

  return (
    <aside class="checkout__sidebar">
      <div class="cart__table checkout__product--table">
        <table class="cart__table--inner">
          <tbody class="cart__table--body">{renderProducts()}</tbody>
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
                {total || getTotal()} Rp
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
                Total
              </td>
              <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
                {total || getTotal()} Rp
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </aside>
  );
};

export default CheckoutSidebar;
