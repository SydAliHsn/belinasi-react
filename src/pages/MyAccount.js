import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import belinasiApi from '../apis/belinasiApi';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import Breadcrumb from '../components/Breadcrumb';
import Preloader from '../components/Preloader';

const MyAccount = () => {
  const navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loading');
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await belinasiApi.get('/orders/userOrders');

      setOrders(data.data.orders);

      setPageStatus('loaded');
    } catch (err) {
      if (err.response.status === 401)
        navigate('/signup-login?redirectTo=/myAccount', { replace: true });

      setPageStatus('error');
    }
  };

  // for scrolling to top
  useEffect(() => {
    window.scrollTo(0, 0);

    getOrders();

    setPageStatus('loaded');
  }, []);

  const logout = async () => {
    try {
      await belinasiApi.delete('/users/logout');

      navigate('/', { replace: true });
    } catch (err) {
      console.log(err.message);
    }
  };

  const renderOrderHistory = () => {
    const ordersMarkup = orders.map(order => {
      return (
        <tr className="account__table--body__child">
          <td className="account__table--body__child--items">{order.id}</td>
          <td className="account__table--body__child--items">
            {new Date(order.orderDate).toDateString()}
          </td>
          <td className="account__table--body__child--items">
            {order.paid ? 'Paid' : 'Unpaid'}
          </td>
          <td className="account__table--body__child--items">
            {order.fulfilled ? 'Fulfilled' : 'Unfulfilled'}
          </td>
          <td className="account__table--body__child--items">
            {order.total} Rp
          </td>
        </tr>
      );
    });

    return ordersMarkup;
  };

  const renderOrderHistoryMobile = () => {
    const ordersMarkup = orders.map(order => {
      return (
        <tr className="account__table--body__child">
          <td className="account__table--body__child--items">
            <strong>Order #</strong>
            <span>{order.id}</span>
          </td>
          <td className="account__table--body__child--items">
            <strong>Date</strong>
            <span>{new Date(order.orderDate).toDateString()}</span>
          </td>
          <td className="account__table--body__child--items">
            <strong>Payment Status</strong>
            <span>{order.paid ? 'Paid' : 'Unpaid'}</span>
          </td>
          <td className="account__table--body__child--items">
            <strong>Fulfillment Status</strong>
            <span>{order.fulfilled ? 'Fulfilled' : 'Unfulfilled'}</span>
          </td>
          <td className="account__table--body__child--items">
            <strong>Total</strong>
            <span>{order.total} Rp</span>
          </td>
        </tr>
      );
    });

    return ordersMarkup;
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />
      <Header />
      <main className="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <Breadcrumb pageName="My Account" />
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- my account section start --> */}
        <section className="my__account--section section--padding">
          <div className="container">
            <p className="account__welcome--text">
              Hello, Admin welcome to your dashboard!
            </p>
            <div className="my__account--section__inner border-radius-10 d-flex">
              <div className="account__left--sidebar">
                <h2 className="account__content--title h3 mb-20">My Profile</h2>
                <ul className="account__menu">
                  <li className="account__menu--list active">
                    <a href="my-account.html">Dashboard</a>
                  </li>
                  <li className="account__menu--list">
                    <a href="my-account-2.html">Addresses</a>
                  </li>
                  <li className="account__menu--list">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="account__menu--list">
                    <a onClick={logout}>Log Out</a>
                  </li>
                </ul>
              </div>
              <div className="account__wrapper">
                <div className="account__content">
                  <h2 className="account__content--title h3 mb-20">
                    Orders History
                  </h2>
                  <div className="account__table--area">
                    {orders.length ? (
                      <table className="account__table">
                        <thead className="account__table--header">
                          <tr className="account__table--header__child">
                            <th className="account__table--header__child--items">
                              Order #
                            </th>
                            <th className="account__table--header__child--items">
                              Date
                            </th>
                            <th className="account__table--header__child--items">
                              Payment Status
                            </th>
                            <th className="account__table--header__child--items">
                              Fulfillment Status
                            </th>
                            <th className="account__table--header__child--items">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="account__table--body mobile__none">
                          {renderOrderHistory()}
                        </tbody>
                        <tbody className="account__table--body mobile__block">
                          {renderOrderHistoryMobile()}
                        </tbody>
                      </table>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start'
                        }}
                      >
                        <p style={{ fontSize: '1.75rem' }}>No orders here!</p>
                        <Link to="/shop" className="primary__btn">
                          Start Shopping
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- my account section end --> */}

        {/* <!-- Start shipping section --> */}
        <Shipping />
        {/* <!-- End shipping section --> */}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MyAccount;
