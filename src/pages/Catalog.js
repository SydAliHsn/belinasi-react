import React, { useEffect } from 'react';

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
      <section class="section--padding catalog-banner">
        <div class="container catalog-banner__container">
          <div class="catalog-banner__content">
            <h1 class="catalog-banner__heading">T-SHIRTS</h1>
            <p class="catalog-banner__text text-main">
              High Quality Custom Apparel
            </p>
            <a class="primary__btn" href="shop.html">
              Explore T-Shirts{' '}
            </a>
          </div>
          <img
            src="./assets/img/product/t-shirt.png"
            class="catalog-banner__img catalog-banner__img-1"
          />
          <img
            src="./assets/img/product/t-shirt2.png"
            class="catalog-banner__img catalog-banner__img-2"
          />
        </div>
      </section>
      {/* <!-- End catalog banner Section --> */}

      {/* <!-- Catalog banner-2 section --> */}
      <section class="section--padding catalog-banner-2">
        <div class="container catalog-banner-2__container">
          <div class="catalog-banner-2__half catalog-banner-2__half-1">
            <div class="catalog-banner-2__half-content">
              <h2 class="h2">Sweatshirts</h2>
              <a href="#" class="primary__btn">
                Explore
              </a>
            </div>
            <img
              src="./assets/img/product/sweatshirt.png"
              class="catalog-banner-2__half-img"
            />
          </div>
          <div class="catalog-banner-2__half catalog-banner-2__half-2">
            <div class="catalog-banner-2__half-content">
              <h2 class="h2">Long Sleeve Shirts</h2>
              <a href="#" class="primary__btn">
                Explore
              </a>
            </div>
            <img
              src="./assets/img/product/sleeve-shirt.png"
              class="catalog-banner-2__half-img"
            />
          </div>
        </div>
      </section>
      {/* <!-- End Catalog banner-2 section --> */}

      {/* <!-- Apparel banner --> */}
      <section class="section--padding apparel-banner">
        <div class="container apparel-banner__container">
          <div class="apparel-banner__content">
            <h1 class="h1">Start designing your custom apparel today</h1>
            <a href="#" class="primary__btn">
              Start Designing
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End of Apparel banner --> */}
      <Footer />
    </React.Fragment>
  );
};

export default Catalog;
