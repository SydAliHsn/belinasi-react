import React from 'react';

import shipping1 from '../assets/img/other/shipping1.png';
import shipping2 from '../assets/img/other/shipping2.png';
import shipping3 from '../assets/img/other/shipping3.png';
import shipping4 from '../assets/img/other/shipping4.png';

const Shipping = () => {
  return (
    <section className="shipping__section2 shipping__style3 section--padding pt-0">
      <div className="container">
        <div className="shipping__section2--inner shipping__style3--inner d-flex justify-content-between">
          <div className="shipping__items2 d-flex align-items-center">
            <div className="shipping__items2--icon">
              <img src={shipping1} alt="" />
            </div>
            <div className="shipping__items2--content">
              <h2 className="shipping__items2--content__title h3">Shipping</h2>
              <p className="shipping__items2--content__desc">
                From handpicked sellers
              </p>
            </div>
          </div>
          <div className="shipping__items2 d-flex align-items-center">
            <div className="shipping__items2--icon">
              <img src={shipping2} alt="" />
            </div>
            <div className="shipping__items2--content">
              <h2 className="shipping__items2--content__title h3">Payment</h2>
              <p className="shipping__items2--content__desc">
                From handpicked sellers
              </p>
            </div>
          </div>
          <div className="shipping__items2 d-flex align-items-center">
            <div className="shipping__items2--icon">
              <img src={shipping3} alt="" />
            </div>
            <div className="shipping__items2--content">
              <h2 className="shipping__items2--content__title h3">Return</h2>
              <p className="shipping__items2--content__desc">
                From handpicked sellers
              </p>
            </div>
          </div>
          <div className="shipping__items2 d-flex align-items-center">
            <div className="shipping__items2--icon">
              <img src={shipping4} alt="" />
            </div>
            <div className="shipping__items2--content">
              <h2 className="shipping__items2--content__title h3">Support</h2>
              <p className="shipping__items2--content__desc">
                From handpicked sellers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
