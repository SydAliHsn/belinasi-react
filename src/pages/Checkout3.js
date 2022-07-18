import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Preloader from '../components/Preloader';
import belinasiApi from '../apis/belinasiApi';

const Checkout3 = () => {
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [pageStatus, setPageStatus] = useState('loading');

  const getOrder = async () => {
    try {
      const { data } = await belinasiApi.get('/orders/latestPaidUserOrder');

      if (!data.data.order) return navigate('/');

      await hydrateOrder(data.data.order);

      setPageStatus('loaded');
    } catch (err) {
      if (!err.response) {
        return alert(err.response.data.message);
      }

      if (err.response.status === 401) {
        return navigate('/signup-login?redirectTo=/myAccount', {
          replace: true
        });
      }

      navigate('/');
    }
  };

  const hydrateOrder = async order => {
    const products = await Promise.all(
      order.items.map(async ({ product, quantity, color, size }) => {
        const { data } = await belinasiApi.get(`/products/${product}`);

        return { ...data.data.product, quantity, color, size };
      })
    );

    order.items = products;

    setOrder(order);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getOrder();
  }, []);

  if (pageStatus === 'loading') return <Preloader status={pageStatus} />;

  return (
    <div class="checkout__page--area">
      <div class="container">
        <div class="checkout__page--inner d-flex">
          <div class="main checkout__mian">
            <main class="main__content_wrapper">
              <div class="checkout__content--step section__shipping--address pt-0">
                <div class="section__header checkout__header--style3 position__relative mb-25">
                  <span class="checkout__order--number">Order #{order.id}</span>
                  <h2 class="section__header--title h3">
                    Thank you for placing the order!
                  </h2>
                  <div class="checkout__submission--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.995"
                      height="25.979"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M416 128L192 384l-96-96"
                      />
                    </svg>
                  </div>
                </div>
                <div class="order__confirmed--area border-radius-5 mb-15">
                  <h3 class="order__confirmed--title h4">
                    Your order is confirmed
                  </h3>
                  <p class="order__confirmed--desc">
                    You,ll receive a confirmation email with your order number
                    shortly
                  </p>
                </div>
                <div class="customer__information--area border-radius-5">
                  <h3 class="customer__information--title h4">
                    Customer Information
                  </h3>
                  <div class="customer__information--inner d-flex">
                    <div class="customer__information--list">
                      <div class="customer__information--step">
                        <h4 class="customer__information--subtitle h5">
                          Contact information
                        </h4>
                        <ul>
                          <li>
                            <a
                              class="customer__information--text__link"
                              href="#"
                            >
                              {order.contactInfo}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="customer__information--step">
                        <h4 class="customer__information--subtitle h5">
                          Shipping address
                        </h4>
                        <ul>{order.address.addressComplete}</ul>
                      </div>
                    </div>
                    <div class="customer__information--list">
                      <div class="customer__information--step">
                        <h4 class="customer__information--subtitle h5">
                          Payment method
                        </h4>
                        <ul>
                          <li>
                            <span class="customer__information--text">
                              Standard
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div class="customer__information--step">
                        <h4 class="customer__information--subtitle h5">
                          Shipping Address Misc.
                        </h4>
                        <ul>{order.address.addressMisc}</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout3;
