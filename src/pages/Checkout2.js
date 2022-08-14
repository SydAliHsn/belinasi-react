import React, { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  useSearchParams
} from 'react-router-dom';

import belinasiApi from '../apis/belinasiApi';
import CheckoutSidebar from '../components/CheckoutSidebar';
import Preloader from '../components/Preloader';
import { renderProductImages } from '../utils/productUtils';
import { setCart } from '../utils/cart';

const Checkout2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [orderProducts, setOrderProducts] = useState([]);
  const [pageStatus, setPageStatus] = useState('loading');

  const createNotif = (type, text) => {
    searchParams.append(type, text);
    setSearchParams(searchParams);
  };

  const getProducts = async op => {
    try {
      const productsHydrated = await Promise.all(
        op.items.map(async ({ product, quantity, color, size }) => {
          const { data } = await belinasiApi.get(`/products/${product.id}`);

          return { ...data.data.product, quantity, color, size };
        })
      );

      setOrderProducts(productsHydrated);
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        return navigate(
          '/signup-login?error=You are not logged in! Please log in to get access.'
        );
      }

      if (err.response.data) {
        createNotif('error', err.response.data.message);
      }
    }
  };

  const getOrder = async () => {
    try {
      const { data } = await belinasiApi.get(`/orders/${orderId}`);

      setOrder(data.data.order);

      await getProducts(data.data.order);

      setPageStatus('loaded');
    } catch (err) {
      if (!err.response) return alert('An error occured!');

      err.response.data.message && alert(err.response.data.message);

      navigate('/');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getOrder();
  }, []);

  const createTransaction = async () => {
    try {
      setPageStatus('loading');

      const { data } = await belinasiApi.post('/transactions', {
        order: orderId
      });

      setCart([]);

      // navigate(data.data.transactionUrl, { replace: true });
      // window.open(data.data.transactionUrl);
      window.location.replace(data.data.transactionUrl);

      setPageStatus('loaded');
    } catch (err) {
      if (!err.response) return createNotif('error', 'An error occured!');

      err.response.data.message &&
        createNotif('error', err.response.data.message);
    }
  };

  const renderSummaryProducts = () => {
    return order.items.map(item => (
      <tr class="summary__table--items">
        <td class="summary__table--list">
          <div class="cart__product d-flex align-items-center">
            <div class="product__thumbnail border-radius-5">
              <Link to={`/products/${item.product.id}`}>
                {renderProductImages(item.product, item.product.color)[0]}
              </Link>
              <span class="product__thumbnail--quantity">{item.quantity}</span>
            </div>
            <div class="product__description">
              <h3 class="product__description--name h4">
                <Link to={`/products/${item.product.id}`}>
                  {item.product.name}
                </Link>
              </h3>
              <span class="product__description--variant">
                COLOR: {item.product.color}
              </span>
            </div>
          </div>
        </td>
        <td class="summary__table--list">
          <span class="cart__price">{item.product.price * item.quantity}</span>
        </td>
      </tr>
    ));
  };

  if (!order) return <Preloader status={pageStatus} />;

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

      <div class="checkout__page--area">
        <div class="container">
          <div class="checkout__page--inner d-flex">
            <div class="main checkout__mian">
              <header class="main__header checkout__mian--header mb-30">
                <h1 class="main__logo--title">
                  <a class="main__logo--link" href="index.html">
                    <img class="main__logo--img" src="" />
                    BELINASI
                  </a>
                </h1>
                <details class="order__summary--mobile__version">
                  <summary class="order__summary--toggle border-radius-5">
                    <span class="order__summary--toggle__inner">
                      <span class="order__summary--toggle__icon">
                        <svg
                          width="20"
                          height="19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span class="order__summary--toggle__text show">
                        <span>Show order summary</span>
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
                      <span class="order__summary--final__price">
                        {order.total} Rp
                      </span>
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
                            <td class="checkout__total--title text-left">
                              Subtotal
                            </td>
                            <td class="checkout__total--amount text-right">
                              {order.total} Rp
                            </td>
                          </tr>
                          <tr class="checkout__total--items">
                            <td class="checkout__total--title text-left">
                              Shipping
                            </td>
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
                              {order.total} Rp
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
                      <a class="breadcrumb__link" href="cart.html">
                        Information
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
                    <li class="breadcrumb__item breadcrumb__item--blank d-flex align-items-center">
                      <a class="breadcrumb__link" href="cart.html">
                        Shipping
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
                    <li class="breadcrumb__item breadcrumb__item--blank">
                      <span class="breadcrumb__text current">Payment</span>
                    </li>
                  </ol>
                </nav>
              </header>
              <main class="main__content_wrapper">
                <form onSubmit={e => e.preventDefault()}>
                  <div class="checkout__content--step checkout__contact--information2 border-radius-5">
                    <div class="checkout__review d-flex justify-content-between align-items-center">
                      <div class="checkout__review--inner d-flex align-items-center">
                        <label class="checkout__review--label">Contact</label>
                        <span class="checkout__review--content">
                          {order.contactInfo}
                        </span>
                      </div>
                      <div class="checkout__review--link"></div>
                    </div>
                    <div class="checkout__review d-flex justify-content-between align-items-center">
                      <div class="checkout__review--inner d-flex align-items-center">
                        <label class="checkout__review--label"> Ship to</label>
                        <span class="checkout__review--content">
                          {order.address.addressComplete}
                        </span>
                      </div>
                      <div class="checkout__review--link">
                        {/* <button
                          class="checkout__review--link__text"
                          type="button"
                        >
                          Change
                        </button> */}
                      </div>
                    </div>
                    <div class="checkout__review d-flex justify-content-between align-items-center">
                      <div class="checkout__review--inner d-flex align-items-center">
                        <label class="checkout__review--label"> Method</label>
                        <span class="checkout__review--content">
                          Standard . <strong>50 Rp</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="checkout__content--step section__shipping--address">
                    <div class="section__header mb-25">
                      <h3 class="section__header--title">Payment</h3>
                      <p class="section__header--desc">
                        All transactions are secure and encrypted.
                      </p>
                    </div>
                  </div>

                  <div class="checkout__content--step__footer d-flex align-items-center">
                    <button
                      class="continue__shipping--btn primary__btn border-radius-5 final-pay-btn"
                      onClick={createTransaction}
                    >
                      Pay now
                    </button>
                    <Link class="previous__link--content" to="/checkout">
                      Return to shipping
                    </Link>
                  </div>
                </form>
              </main>
              <footer className="main__footer checkout__footer">
                <p className="copyright__content">
                  Copyright © 2022{' '}
                  <Link
                    className="copyright__content--link text__secondary"
                    to="/"
                  >
                    BELINASI
                  </Link>
                  . All Rights Reserved.Design By BELINASI
                </p>
              </footer>
            </div>

            <CheckoutSidebar
              cartProducts={orderProducts}
              total={order.total}
              shipping={50}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout2;
