import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import FundraiseOptions from '../components/FundraiseOptions';

const Medical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main class="main__content_wrapper">
        {/* <!-- Start political-banner --> */}
        <section class="political-banner section--padding">
          <div class="container political-banner__container">
            <div class="container political-banner__content">
              <h2 class="h2 political-banner__heading">
                Medical campaign contributions through t-shirt sales
              </h2>
              <p class="political-banner__text">
                Verify your campaign to sell shirts, accept donations, and
                collect donor data in a streamlined online experience.
              </p>
              <a href="#" class="primary__btn">
                Get Started
              </a>
            </div>
            <div class="political-banner__img-container">
              <img
                src="/assets/img/banner/political-banner.png"
                alt="change-me"
                class="political-banner__img"
              />
            </div>
          </div>
        </section>
        {/* <!-- End political-banner --> */}

        {/* <!-- Start political desc --> */}
        <section class="section--padding political-desc">
          <div class="container political-desc__container">
            <div class="political-desc__img-container">
              <img
                src="/assets/img/other/political-image-1.png"
                alt="change-me"
                class="political-desc__img"
              />
            </div>
            <div class="political-desc__content">
              <h2 class="political-desc__heading">
                A secure and easy way to accept online donations for your
                political campaign
              </h2>
              <p class="political-desc__text">
                Our t-shirt fundraising platform makes it easy for your
                political campaign to raise money online and accept donations
                without ever spending a dime on inventory costs. Plus, your
                supporters will look great in their new shirt that they get in
                return for their contribution.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- End political desc --> */}

        {/* <!-- Start pros section --> */}
        <section class="section--padding pros-section bg-secondary">
          <div class="container pros-section__container">
            <h2 class="h2 pros-section__heading">
              Why you’ll love working with Bonfire for your animal fundraiser
            </h2>
            <div class="pros-container">
              <div class="pro">
                <i class="pro__icon fa-brands fa-gratipay"></i>
                <h4 class="pro__title">PREMIUM PRINTS</h4>
                <p class="pro__text">
                  Our designers ensure your artwork prints exactly how you
                  intended, 100% guaranteed.
                </p>
              </div>
              <div class="pro">
                <i class="pro__icon fa-solid fa-sack-dollar"></i>
                <h4 class="pro__title">SMART PROFIT MARGINS</h4>
                <p class="pro__text">
                  As your sales increase, so do your profits. We’ll pass any
                  savings we get on to you.
                </p>
              </div>
              <div class="pro">
                <i class="pro__icon fa-solid fa-gift"></i>
                <h4 class="pro__title">SUPPORT AND SERVICE</h4>
                <p class="pro__text">
                  We’ve got you covered — from e-commerce, order processing,
                  printing and shipping.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End pros section--> */}

        {/* <!-- Start ready banner --> */}
        <section class="section--padding ready-section">
          <div class="container ready-section__container">
            <div class="ready-section__content">
              <h2 class="h2 h-slim text-half-width">
                Ready to launch your political fundraiser?
              </h2>
              <p class="text-main">
                In just a few minutes, your political fundraiser can be launched
                and to help you raise money the money you need.
              </p>
              <a href="#" class="primary__btn">
                Start Your Fundraiser
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End ready banner --> */}

        {/* <!-- Start options section --> */}
        <FundraiseOptions />
        {/* <!-- End options section --> */}

        {/* <!-- Start shipping section --> */}
        <Shipping />
        {/* <!-- End shipping section --> */}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Medical;
