import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FundraiseOptions from '../components/FundraiseOptions';
import Shipping from '../components/Shipping';

const Schools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      {/* <!-- Start school banner --> */}
      <section class="section--padding school-banner">
        <div class="container school-banner__container">
          <div class="school-banner__content">
            <h1 class="h1">T-shirt fundraising for schools</h1>
            <p class="text-main">
              Launch a t-shirt fundraiser to raise money for your elementary,
              middle or high school
            </p>
            <a href="#" class="primary__btn">
              Start a Fundraiser
            </a>
          </div>
          <div class="school-banner__img-container">
            <img
              src="/assets/img/banner/school-banner.png"
              alt="school-shirts"
              class="school-banner__img"
            />
          </div>
        </div>
      </section>
      {/* <!-- End banner --> */}

      {/* <!-- Start school banner --> */}
      <section class="section--padding school-banner-2">
        <div class="container school-banner-2__container">
          <div class="school-banner-2__img-container">
            <img
              src="/assets/img/banner/school-banner2.jpg"
              alt="school-shirts"
              class="school-banner-2__img"
            />
          </div>
          <div class="school-banner-2__content">
            <h2 class="h2 h-slim">
              T-shirt fundraising is a fast and easy way to raise for your
              school
            </h2>
            <p>
              Whether you're starting a fundraiser for a private or a public
              school, or an organization within your school, Belanisi can help
              your school raise the money you need. Our fundraising platform has
              all the tools you need to design your school’s shirt, collect the
              funds you raise, and send the shirts to your buyers.
            </p>
            <p>
              Our team is standing by to help you make your fundraiser a big
              success! We can help you create your school’s design, show you how
              to promote your campaign, and more!
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End banner --> */}

      {/* <!-- Start ready banner --> */}
      <section class="section--padding ready-section bg-secondary">
        <div class="container ready-section__container">
          <div class="ready-section__content">
            <h2 class="h2 h-slim">Ready to launch your school's fundraiser?</h2>
            <p class="text-main">
              In just a few minutes, your school’s fundraiser can be launched
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

      <Shipping />

      <Footer />
    </React.Fragment>
  );
};

export default Schools;
