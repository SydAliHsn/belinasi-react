import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ pageName }) => {
  return (
    <section class="breadcrumb__section breadcrumb__bg">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <div class="breadcrumb__content text-center">
              <h1 class="breadcrumb__content--title text-white mb-25">
                {pageName}
              </h1>
              <ul class="breadcrumb__content--menu d-flex justify-content-center">
                <li class="breadcrumb__content--menu__items">
                  <Link class="text-white" to="/">
                    Home
                  </Link>
                </li>
                <li class="breadcrumb__content--menu__items">
                  <span class="text-white">{pageName}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
