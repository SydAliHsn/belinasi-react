import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FundraiseOptions from '../components/FundraiseOptions';



const Fundraising = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      {/* <!-- Start T shirt fundraising section --> */}
      <section class="section--padding banner-shirt">
        <div class="container banner-shirt__container">
          <div class="banner-shirt__content">
            <h2 class="h2">T-shirt fundraising made simpler</h2>
            <p class="text-main">
              Belanisi provides the easiest way to raise money online with
              custom shirts & hoodies
            </p>
            <a class="primary__btn" href="shop.html">
              Start Designing
              <svg
                class="primary__btn--arrow__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20.2"
                height="12.2"
                viewBox="0 0 6.2 6.2"
              >
                <path
                  d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                  transform="translate(-4 -4)"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          <div class="banner-shirt__image-container">
            <img
              src="/assets/img/banner/shirt1.jpg"
              alt="shirt"
              class="banner-shirt__image banner-shirt__image-1"
            />
            <img
              src="/assets/img/banner/shirt3.jpg"
              alt="shirt"
              class="banner-shirt__image banner-shirt__image-2"
            />
            <img
              src="/assets/img/banner/shirt2.jpg"
              alt="shirt"
              class="banner-shirt__image banner-shirt__image-3"
            />
          </div>
        </div>
      </section>
      {/* <!-- End T shirt fundraising section --> */}

      {/* <!-- Start options section --> */}
      <FundraiseOptions />
      {/* <!-- End options section --> */}

      {/* <!-- Start open section --> */}
      <section class="section--padding open-section">
        <div class="container open-section__container">
          <div class="container open-section__content">
            <h3 class="h3">Open an online t-shirt store for your fundraiser</h3>
            <p>
              Create an online store to make it easy for your supporters to
              browse all of your custom shirts and apparel. They’re free to
              create and it only takes a few minutes to customize to match your
              brand or cause.
            </p>
            <a class="primary__btn" href="shop.html">
              Open Your Store
              <i class="fa-solid fa-store"></i>
            </a>
          </div>
          <div class="container open-section__img-container">
            <img
              class="open-section__img open-section__img"
              src="/assets/img/other/shirt-store.jpg"
            />
          </div>
        </div>
      </section>
      {/* <!-- End open section --> */}
      <Footer />
    </React.Fragment>
  );
};

export default Fundraising;
