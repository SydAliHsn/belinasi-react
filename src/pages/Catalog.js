import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      {/* <!-- catalog banner Section --> */}
      <section className="section--padding catalog-banner">
        <div className="container catalog-banner__container">
          <div className="catalog-banner__content">
            <h1 className="catalog-banner__heading">T-SHIRTS</h1>
            <p className="catalog-banner__text text-main">
              High Quality Custom Apparel
            </p>
            <Link className="primary__btn" to="/shop">
              Explore T-Shirts
            </Link>
          </div>
          <img
            src="../assets/img/product/t-shirt.png"
            className="catalog-banner__img catalog-banner__img-1"
          />
          <img
            src="../assets/img/product/t-shirt2.png"
            className="catalog-banner__img catalog-banner__img-2"
          />
        </div>
      </section>
      {/* <!-- End catalog banner Section --> */}

      {/* <!-- Catalog banner-2 section --> */}
      <section className="section--padding catalog-banner-2">
        <div className="container catalog-banner-2__container">
          <div className="catalog-banner-2__half catalog-banner-2__half-1">
            <div className="catalog-banner-2__half-content">
              <h2 className="h2">Sweatshirts</h2>
              <Link to="/shop" className="primary__btn">
                Explore
              </Link>
            </div>
            <img
              src="../assets/img/product/sweatshirt.png"
              className="catalog-banner-2__half-img"
            />
          </div>
          <div className="catalog-banner-2__half catalog-banner-2__half-2">
            <div className="catalog-banner-2__half-content">
              <h2 className="h2">Long Sleeve Shirts</h2>
              <Link to="/shop" className="primary__btn">
                Explore
              </Link>
            </div>
            <img
              src="../assets/img/product/sleeve-shirt.png"
              className="catalog-banner-2__half-img"
            />
          </div>
        </div>
      </section>
      {/* <!-- End Catalog banner-2 section --> */}

      {/* <!-- Apparel banner --> */}
      <section className="section--padding apparel-banner">
        <div className="container apparel-banner__container">
          <div className="apparel-banner__content">
            <h1 className="h1">Start designing your custom apparel today</h1>
            <Link to="/designer" className="primary__btn">
              Start Designing
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End of Apparel banner --> */}
      <Footer />
    </React.Fragment>
  );
};

export default Catalog;
