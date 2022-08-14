import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import FundraiseOptions from '../components/FundraiseOptions';

const Adoption = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main class="main__content_wrapper">
        {/* <!-- Start adoption-banner --> */}
        <section class="adoption-banner">
          <div class="container adoption-banner__container">
            <div class="container adoption-banner__content">
              <h2 class="h2 adoption-banner__heading">
                Fundraising for animal shelters, rescues, and pets
              </h2>
              <p class="text-main">
                Use t-shirt fundraising to raise money for your animal cause
              </p>
              <a href="#" class="primary__btn">
                Get Started
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End adoption-banner --> */}

        {/* <!-- Start ideas section --> */}
        <section class="section--padding ideas-section">
          <div class="container ideas-section__container">
            <h2 class="ideas-section__heading h2 h-slim text-half-width">
              Animal fundraising ideas for shelters, rescues, and pets to help
              spread the word about your t-shirt fundraiser.
            </h2>
            <div class="idea-cards-container">
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">Dog Walks And Runs</h3>
                  <p class="idea-card__text">
                    5K walks and runs are popular among charitable organizations
                    to get the community active while raising money with
                    t-shirts, donations and sponsorships. Animal shelters love
                    running and walking events because participants can walk
                    dogs from the shelter or bring their own pets.
                  </p>
                </div>
              </div>
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">
                    LOCAL NEWS & MEDIA PARTNERSHIPS
                  </h3>
                  <p class="idea-card__text">
                    There are dog and cat lovers everywhere compassionate about
                    the welfare of animals. A win-win for both sides, this
                    connection to a greater community makes a perfect
                    partnership. Animal rescues and shelters often bring
                    adoptable animals to local news station for the morning news
                    show, have photo shoots with community figures and send
                    fundraising information to have content published to local
                    print, digital and social outlets.
                  </p>
                </div>
              </div>
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">Dog Walks And Runs</h3>
                  <p class="idea-card__text">
                    5K walks and runs are popular among charitable organizations
                    to get the community active while raising money with
                    t-shirts, donations and sponsorships. Animal shelters love
                    running and walking events because participants can walk
                    dogs from the shelter or bring their own pets.
                  </p>
                </div>
              </div>
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">Dog Walks And Runs</h3>
                  <p class="idea-card__text">
                    5K walks and runs are popular among charitable organizations
                    to get the community active while raising money with
                    t-shirts, donations and sponsorships. Animal shelters love
                    running and walking events because participants can walk
                    dogs from the shelter or bring their own pets.
                  </p>
                </div>
              </div>
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">Dog Walks And Runs</h3>
                  <p class="idea-card__text">
                    5K walks and runs are popular among charitable organizations
                    to get the community active while raising money with
                    t-shirts, donations and sponsorships. Animal shelters love
                    running and walking events because participants can walk
                    dogs from the shelter or bring their own pets.
                  </p>
                </div>
              </div>
              <div class="idea-card">
                <div class="idea-card__img-container">
                  <img
                    src="/assets/img/other/dog-idea-1.jpg"
                    alt="doggo"
                    class="idea-card__img"
                  />
                </div>
                <div class="idea-card__content">
                  <h3 class="idea-card__title h3 h-slim">
                    LOCAL NEWS & MEDIA PARTNERSHIPS
                  </h3>
                  <p class="idea-card__text">
                    There are dog and cat lovers everywhere compassionate about
                    the welfare of animals. A win-win for both sides, this
                    connection to a greater community makes a perfect
                    partnership. Animal rescues and shelters often bring
                    adoptable animals to local news station for the morning news
                    show, have photo shoots with community figures and send
                    fundraising information to have content published to local
                    print, digital and social outlets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End ideas section --> */}

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

        <FundraiseOptions />

        {/* <!-- Start ready banner --> */}
        <section class="section--padding ready-section bg-secondary">
          <div class="container ready-section__container">
            <div class="ready-section__content">
              <h2 class="h2 h-slim text-half-width">
                Ready to launch your school's fundraiser?
              </h2>
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

        <Shipping />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Adoption;
