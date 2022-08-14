import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import belinasiApi from '../apis/belinasiApi';
import CheckoutHeader from '../components/CheckoutHeader';

import CheckoutSidebar from '../components/CheckoutSidebar';
import Preloader from '../components/Preloader';
import { getCart } from '../utils/cart';

const Checkout1 = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [pageStatus, setPageStatus] = useState('loading');
  const [cartProducts, setCartProducts] = useState([]);
  const [contactInfo, setContactInfo] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    addressComplete: '',
    addressMisc: '',
    city: '',
    postalCode: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate(
        '/signup-login?error=You are not logged in. Please log in to get access!&redirectTo=/checkout'
      );
    }

    (async function() {
      const cart = await getCart();
      setCartProducts(cart);

      if (!cart.length) return navigate('/cart', { replace: true });

      setPageStatus('loaded');
    })();
  }, []);

  const createNotif = (type, text) => {
    searchParams.append(type, text);
    setSearchParams(searchParams);
  };

  const createOrderAndContinue = async () => {
    try {
      const orderData = {
        items: JSON.parse(localStorage.getItem('cart')),
        address: userData,
        contactInfo
      };

      setPageStatus('loading');

      const { data } = await belinasiApi.post('/orders', orderData);

      setPageStatus('loaded');

      navigate(`/checkout/${data.data.order.id}`);
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        setPageStatus('loaded');
        return navigate(
          '/signup-login?error=You are not logged in. Please log in to get access!'
        );
      }

      createNotif('error', err.response.data.message);

      setPageStatus('loaded');
    }
  };

  // if (!cartProducts.length) navigate('/cart');

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

      <div className="checkout__page--area">
        <div className="container">
          <div className="checkout__page--inner d-flex">
            <div className="main checkout__mian">
              <CheckoutHeader products={cartProducts} />

              <main className="main__content_wrapper">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    createOrderAndContinue();
                  }}
                >
                  <div className="checkout__content--step section__contact--information">
                    <div className="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
                      <h2
                        className="section__header--title h3"
                        style={{ lineHeight: 0 }}
                      >
                        Contact information
                      </h2>
                    </div>
                    <div className="customer__information">
                      <div className="checkout__email--phone mb-12">
                        <label>
                          <input
                            required
                            className="checkout__input--field border-radius-5"
                            placeholder="Email or mobile phone mumber"
                            value={contactInfo}
                            onChange={e => setContactInfo(e.target.value)}
                            type="text"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__content--step section__shipping--addressComplete">
                    <div className="section__header mb-25">
                      <h3 className="section__header--title">Shipping</h3>
                    </div>
                    <div className="section__shipping--addressComplete__content">
                      <div className="row">
                        <div className="col-lg-6 mb-12">
                          <div className="checkout__input--list ">
                            <label>
                              <input
                                required
                                className="checkout__input--field border-radius-5"
                                placeholder="First name"
                                value={userData.firstName}
                                onChange={e =>
                                  setUserData({
                                    ...userData,
                                    firstName: e.target.value
                                  })
                                }
                                type="text"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-12">
                          <div className="checkout__input--list">
                            <label>
                              <input
                                required
                                className="checkout__input--field border-radius-5"
                                placeholder="Last name"
                                value={userData.lastName}
                                onChange={e =>
                                  setUserData({
                                    ...userData,
                                    lastName: e.target.value
                                  })
                                }
                                type="text"
                              />
                            </label>
                          </div>
                        </div>

                        <div className="col-12 mb-12">
                          <div className="checkout__input--list">
                            <label>
                              <input
                                required
                                className="checkout__input--field border-radius-5"
                                placeholder="AddressComplete"
                                value={userData.addressComplete}
                                onChange={e =>
                                  setUserData({
                                    ...userData,
                                    addressComplete: e.target.value
                                  })
                                }
                                type="text"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mb-12">
                          <div className="checkout__input--list">
                            <label>
                              <input
                                required
                                className="checkout__input--field border-radius-5"
                                placeholder="Apartment, suite, etc. (optional)"
                                type="text"
                                value={userData.addressMisc}
                                onChange={e =>
                                  setUserData({
                                    ...userData,
                                    addressMisc: e.target.value
                                  })
                                }
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mb-12"></div>
                        <div className="col-lg-6 mb-12">
                          <div className="checkout__input--list checkout__input--select select">
                            <label
                              className="checkout__select--label"
                              for="city"
                            >
                              Country/region
                            </label>
                            <select
                              className="checkout__input--select__field border-radius-5"
                              id="city"
                              value={userData.city}
                              onChange={e =>
                                setUserData({
                                  ...userData,
                                  city: e.target.value
                                })
                              }
                            >
                              <option disabled value="">
                                City
                              </option>
                              <option value="lahore">Lahore</option>
                              <option value="karachi">Karachi</option>
                              <option value="islamabad">Islamabad</option>
                              <option value="quetta">Quetta</option>
                              <option value="peshawar">Peshawar</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-12">
                          <div className="checkout__input--list">
                            <label>
                              <input
                                required
                                className="checkout__input--field border-radius-5"
                                placeholder="Postal code"
                                value={userData.postalCode}
                                onChange={e =>
                                  setUserData({
                                    ...userData,
                                    postalCode: e.target.value
                                  })
                                }
                                type="text"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div className="checkout__checkbox">
                        <input required
                          className="checkout__checkbox--input"
                          id="check2"
                          type="checkbox"
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label className="checkout__checkbox--label" for="check2">
                          Save this information for next time
                        </label>
                      </div> */}
                    </div>
                  </div>
                  <div className="checkout__content--step__footer d-flex align-items-center">
                    <button
                      className="continue__shipping--btn primary__btn border-radius-5"
                      type="submit"
                      // to="checkout-2.html"
                      // onClick={createOrderAndContinue}
                    >
                      Continue
                    </button>
                    <Link className="previous__link--content" to="/cart">
                      Return to cart
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

            <CheckoutSidebar cartProducts={cartProducts} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout1;
