import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [productType, setProductType] = useState('featured');

  const sampleProduct = {
    imgs: [
      'https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
      'https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
    ],

    id: '98df47jk43534',
    subtitle: 'Men, Shirt',
    title: 'Noice Shirt',
    price: '69$',
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    colors: ['red', 'orange', 'yellow', 'blue', 'purple'],
    creator: 'Belo',
    type: 'Shirt',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam ullam is ecusandae laborum explicabo id sequi        quisquam, ab sunt deleniti quidem ea animi facilis quod        nostrum odit! Repellendus voluptas suscipit cum harum        dolor sciunt.'
  };

  const renderProducts = type => {
    return (
      <React.Fragment>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
      </React.Fragment>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // renderProducts(productType);
  }, [productType]);

  return (
    <React.Fragment>
      <Header />
      <main class="main__content_wrapper">
        <section class="banner-start section--padding">
          <div class="container banner-start__container">
            <div class="banner-start__content">
              <h1 class="h1">Design your next favorite custom shirt</h1>
              <a href="#" class="primary__btn">
                Get Started
              </a>
            </div>
            <div class="banner-start__img-container">
              <img
                src="./assets/img/banner/home-start-banner.png"
                alt="fundraise-shirts-collage"
                class="banner-start__img"
              />
            </div>
          </div>
        </section>

        {/* <!-- Start fundraise section --> */}
        <section class="banner-fundraise section--padding">
          <div class="container banner-fundraise__container">
            <div class="banner-fundraise__content">
              <h2 class="banner-fundraise__heading h2">
                Sell products online through a campaign
              </h2>
              <p class="banner-fundraise__text">
                Sell custom products online by creating your own campaign page
                where anyone can check out.
              </p>
              <p class="banner-fundraise__text">
                When your campaign ends, we ship products directly to your
                buyers and send you the profits.
              </p>
              <a class="primary__btn" href="shop.html">
                Partnership
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
            <div class="banner-fundraise__image-container">
              <img
                src="./assets/img/banner/fundraise.jpg"
                alt="fundraiser-img"
              />
            </div>
          </div>
        </section>
        {/* <!-- End fundraise section --> */}

        {/* <!-- Start store section --> */}
        <section class="banner-store section--padding">
          <div class="section__heading text-center mb-35">
            <h2 class="section__heading--maintitle">Free Online Store</h2>
          </div>
          <div class="container banner-store__container">
            <div class="banner-store__img-container">
              <img
                src="./assets/img/banner/store.jpg"
                alt="storer-img"
                class="banner-store__img"
              />
            </div>

            <div class="banner-store__content">
              <h2 class="banner-store__heading h2">Open a free online store</h2>

              <p class="banner-store__text">
                Make it easy for users to browse all of the custom shirts and
                apparel you’ve designed by creating an online store. They’re
                free to make and simple to tailor to your brand.
              </p>
              <a class="primary__btn" href="shop.html">
                Open Your Store
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
          </div>
        </section>
        {/* <!-- End store section --> */}

        {/* <!-- Start banner section --> */}
        {/* <!--  */}
        {/* <section class="banner__section section--padding"> */}
        <div class="container-fluid">
          <div class="row mb--n28">
            <div class="col-lg-5 col-md-order mb-28">
              <div class="banner__items">
                <a
                  class="banner__items--thumbnail position__relative"
                  href="shop.html"
                >
                  <img
                    class="banner__items--thumbnail__img"
                    src="assets/img/banner/banner1.png"
                    alt="banner-img"
                  />
                  <div class="banner__items--content">
                    <span class="banner__items--content__subtitle">
                      17% Discount
                    </span>
                    <h2 class="banner__items--content__title h3">
                      Spring Collection <br />
                      Style To
                    </h2>
                    <span class="banner__items--content__link">
                      View Discounts
                      <svg
                        class="banner__items--content__arrow--icon"
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
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-7 mb-28">
              <div class="row row-cols-lg-2 row-cols-sm-2 row-cols-1">
                <div class="col mb-28">
                  <div class="banner__items">
                    <a
                      class="banner__items--thumbnail position__relative"
                      href="shop.html"
                    >
                      <img
                        class="banner__items--thumbnail__img"
                        src="assets/img/banner/banner2.png"
                        alt="banner-img"
                      />
                      <div class="banner__items--content">
                        <span class="banner__items--content__subtitle text__secondary">
                          Shop Women
                        </span>
                        <h2 class="banner__items--content__title h3">
                          Up to 70% Off & <br />
                          Free Shipping
                        </h2>
                        <span class="banner__items--content__link">
                          View Discounts
                          <svg
                            class="banner__items--content__arrow--icon"
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
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col mb-28">
                  <div class="banner__items">
                    <a
                      class="banner__items--thumbnail position__relative"
                      href="shop.html"
                    >
                      <img
                        class="banner__items--thumbnail__img"
                        src="assets/img/banner/banner3.png"
                        alt="banner-img"
                      />
                      <div class="banner__items--content">
                        <span class="banner__items--content__subtitle">
                          Shop Women
                        </span>
                        <h2 class="banner__items--content__title h3">
                          Free Shipping Over <br />
                          Order $120
                        </h2>
                        <span class="banner__items--content__link">
                          View Discounts
                          <svg
                            class="banner__items--content__arrow--icon"
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
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="banner__items">
                <a
                  class="banner__items--thumbnail position__relative"
                  href="shop.html"
                >
                  <img
                    class="banner__items--thumbnail__img banner__img--max__height"
                    src="assets/img/banner/banner4.png"
                    alt="banner-img"
                  />
                  <div class="banner__items--content">
                    <span class="banner__items--content__subtitle">
                      25% Discount
                    </span>
                    <h2 class="banner__items--content__title h3">
                      Leather Saddle <br />
                      Bag Style
                    </h2>
                    <span class="banner__items--content__link">
                      View Discounts
                      <svg
                        class="banner__items--content__arrow--icon"
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
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </section> --> */}
        {/* <!-- End banner section --> */}

        {/* <!-- Start product section --> */}
        <section class="product__section section--padding mt-1">
          <div class="container-fluid">
            <div class="section__heading text-center mb-35">
              <h2 class="section__heading--maintitle">New Products</h2>
            </div>
            <ul class="product__tab--one product__tab--primary__btn d-flex justify-content-center mb-50">
              <li
                class={
                  'product__tab--primary__btn__list ' +
                  (productType === 'featured' ? 'active' : null)
                }
                data-toggle="tab"
                data-target="#featured"
                onClick={() => setProductType('featured')}
              >
                Featured
              </li>
              <li
                class={
                  'product__tab--primary__btn__list ' +
                  (productType === 'trending' ? 'active' : null)
                }
                data-toggle="tab"
                data-target="#trending"
                onClick={() => setProductType('trending')}
              >
                Trending
              </li>
              <li
                class={
                  'product__tab--primary__btn__list ' +
                  (productType === 'newArrival' ? 'active' : null)
                }
                data-toggle="tab"
                data-target="#newarrival"
                onClick={() => setProductType('newArrival')}
              >
                New Arrival
              </li>
            </ul>
            <div class="tab_content">
              <div id="trending" class="tab_pane show active">
                <div class="product__section--inner">
                  <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
                    {renderProducts(productType)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End product section --> */}

        {/* <!-- Start banner section --> */}
        <section class="banner__section section--padding pt-0">
          <div class="container-fluid">
            <div class="row row-cols-md-2 row-cols-1 mb--n28">
              <div class="col mb-28">
                <div class="banner__items position__relative">
                  <a class="banner__items--thumbnail" href="shop.html">
                    <img
                      class="banner__items--thumbnail__img banner__t-shirt-img"
                      src="assets/img/other/red-t-shirt.jpg"
                      alt="banner-img"
                    />
                    <div class="banner__items--content">
                      <h2 class="banner__items--content__title h2 text-white">
                        Order Custom Shirts
                      </h2>
                      <p class="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea molestias commodi, voluptates nemo culpa accusamus
                        fugit ipsa vero magnam sit voluptate deleniti id,
                        nostrum animi rem soluta sunt voluptas consectetur!
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col mb-28">
                <div class="banner__items position__relative">
                  <a class="banner__items--thumbnail" href="shop.html">
                    <img
                      class="banner__items--thumbnail__img banner__t-shirt-img"
                      src="assets/img/other/black-t-shirt.jpg"
                      alt="banner-img"
                    />
                    <div class="banner__items--content">
                      <h2 class="banner__items--content__title h2 text-white">
                        Excellent Customer Support
                      </h2>
                      <p class="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea molestias commodi, voluptates nemo culpa accusamus
                        fugit ipsa vero magnam sit voluptate deleniti id,
                        nostrum animi rem soluta sunt voluptas consectetur!
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner section --> */}

        {/* <!-- Start testimonial section --> */}
        <section class="testimonial__section section--padding pt-0">
          <div class="container-fluid">
            <div class="section__heading text-center mb-40">
              <h2 class="section__heading--maintitle">Our Clients Say</h2>
            </div>
            <Testimonials />
          </div>
        </section>
        {/* <!-- End testimonial section --> */}

        {/* <!-- Start banner section --> */}
        <section class="banner__section banner__section--start section--padding pt-0">
          <div class="container-fluid">
            <div class="row row-cols-1">
              <div class="col">
                <div class="banner__section--inner position__relative">
                  <a
                    class="banner__items--thumbnail display-block"
                    href="shop.html"
                  >
                    <img
                      class="banner__items--thumbnail__img banner__img--height__md display-block"
                      src="assets/img/banner/start.jpg"
                      alt="banner-img"
                    />
                    <div class="banner__content--style2">
                      <h2 class="banner__content--style2__title text-dark">
                        Start fundraising today!
                      </h2>
                      <p class="banner__content--style2__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                      <span class="primary__btn">
                        Start a fundraiser
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
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner section --> */}

        {/* <!-- Start blog section --> */}
        {/* <section class="blog__section section--padding pt-0">
          <div class="container-fluid">
            <div class="section__heading text-center mb-40">
              <h2 class="section__heading--maintitle">From The Blog</h2>
            </div>
            <div class="blog__section--inner blog__swiper--activation swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="blog__items">
                    <div class="blog__thumbnail">
                      <a class="blog__thumbnail--link" href="blog-details.html">
                        <img
                          class="blog__thumbnail--img"
                          src="assets/img/blog/blog1.png"
                          alt="blog-img"
                        />
                      </a>
                    </div>
                    <div class="blog__content">
                      <span class="blog__content--meta">February 03, 2022</span>
                      <h3 class="blog__content--title">
                        <a href="blog-details.html">
                          Fashion Trends In 2021 Styles, Colors, Accessories
                        </a>
                      </h3>
                      <a
                        class="blog__content--btn primary__btn"
                        href="blog-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="blog__items">
                    <div class="blog__thumbnail">
                      <a class="blog__thumbnail--link" href="blog-details.html">
                        <img
                          class="blog__thumbnail--img"
                          src="assets/img/blog/blog2.png"
                          alt="blog-img"
                        />
                      </a>
                    </div>
                    <div class="blog__content">
                      <span class="blog__content--meta">February 03, 2022</span>
                      <h3 class="blog__content--title">
                        <a href="blog-details.html">
                          Meet the Woman Behind Cool Ethical Label Refor
                        </a>
                      </h3>
                      <a
                        class="blog__content--btn primary__btn"
                        href="blog-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="blog__items">
                    <div class="blog__thumbnail">
                      <a class="blog__thumbnail--link" href="blog-details.html">
                        <img
                          class="blog__thumbnail--img"
                          src="assets/img/blog/blog3.png"
                          alt="blog-img"
                        />
                      </a>
                    </div>
                    <div class="blog__content">
                      <span class="blog__content--meta">February 03, 2022</span>
                      <h3 class="blog__content--title">
                        <a href="blog-details.html">
                          Lauryn Hill Could Make Tulle Skirt and Cowboy
                        </a>
                      </h3>
                      <a
                        class="blog__content--btn primary__btn"
                        href="blog-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="blog__items">
                    <div class="blog__thumbnail">
                      <a class="blog__thumbnail--link" href="blog-details.html">
                        <img
                          class="blog__thumbnail--img"
                          src="assets/img/blog/blog4.png"
                          alt="blog-img"
                        />
                      </a>
                    </div>
                    <div class="blog__content">
                      <span class="blog__content--meta">February 03, 2022</span>
                      <h3 class="blog__content--title">
                        <a href="blog-details.html">
                          Fashion Trends In 2021 Styles, Colors, Accessories
                        </a>
                      </h3>
                      <a
                        class="blog__content--btn primary__btn"
                        href="blog-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="blog__items">
                    <div class="blog__thumbnail">
                      <a class="blog__thumbnail--link" href="blog-details.html">
                        <img
                          class="blog__thumbnail--img"
                          src="assets/img/blog/blog2.png"
                          alt="blog-img"
                        />
                      </a>
                    </div>
                    <div class="blog__content">
                      <span class="blog__content--meta">February 03, 2022</span>
                      <h3 class="blog__content--title">
                        <a href="blog-details.html">
                          Lauryn Hill Could Make Tulle Skirt and Cowboy
                        </a>
                      </h3>
                      <a
                        class="blog__content--btn primary__btn"
                        href="blog-details.html"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper__nav--btn swiper-button-next"></div>
              <div class="swiper__nav--btn swiper-button-prev"></div>
            </div>
          </div>
        </section> */}
        {/* <!-- End blog section --> */}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
