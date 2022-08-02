import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { addToCart } from '../utils/cart';
import {
  addToWishlist,
  removeFromWishlist,
  wishlistProductExists
} from '../utils/wishlist';

const ProductCard = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const createNotif = (type, text) => {
    searchParams.append(type, text);
    setSearchParams(searchParams);
  };

  return (
    <div class="product__items" product-id={product.id}>
      <div class="product__items--thumbnail">
        <Link to={`/products/${product.id}`} class="product__items--link">
          <img
            class="product__items--img product__primary--img"
            src={product.images[0]}
            alt="product-img"
          />

          {product.images[1] ? (
            <img
              class="product__items--img product__secondary--img"
              // src="assets/img/product/product15.png"
              src={product.images[1]}
              alt="product-img"
            />
          ) : (
            ''
          )}
        </Link>
        <div class="product__badge">
          <span class="product__badge--items sale">Sale</span>
        </div>
      </div>
      <div class="product__items--content">
        {/* <span class="product__items--content__subtitle">Jacket, Women</span> */}
        <span class="product__items--content__subtitle">{product.type}</span>

        <h4 class="product__items--content__title">
          {/* <a href="product-details.html">Western denim shirt</a> */}
          <Link to={`/products/${product.id}`} href="product-details.html">
            {product.name}
          </Link>
        </h4>

        <div class="product__items--price">
          {/* <span class="current__price">$128</span>
          <span class="price__divided"></span>
          <span class="old__price">$72</span> */}
          <span class="current__price">{product.price} Rp</span>
        </div>

        <ul class="product__items--action d-flex">
          <li class="product__items--action__list">
            <a
              class="product__items--action__btn add__to--cart"
              onClick={() => {
                addToCart(product.id);

                createNotif(
                  'success',
                  `${product.name} (${product.type}) added to cart!`
                );

                searchParams.append('minicart', true);
                setSearchParams(searchParams);
                // onAddToCart && onAddToCart();
              }}
            >
              <svg
                class="product__items--action__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="22.51"
                height="20.443"
                viewBox="0 0 14.706 13.534"
              >
                <g transform="translate(0 0)">
                  <g>
                    <path
                      data-name="Path 16787"
                      d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                      transform="translate(0 -463.248)"
                      fill="currentColor"
                    ></path>
                    <path
                      data-name="Path 16788"
                      d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                      transform="translate(-1.191 -466.622)"
                      fill="currentColor"
                    ></path>
                    <path
                      data-name="Path 16789"
                      d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                      transform="translate(-2.875 -466.622)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </svg>
              <span class="add__to--cart__text">+ Add to cart</span>
            </a>
          </li>
          <li class="product__items--action__list">
            <a
              class={
                'product__items--action__btn ' +
                (wishlistProductExists(product.id) ? 'active' : '')
              }
              onClick={() => {
                if (wishlistProductExists(product.id)) {
                  removeFromWishlist(product.id);

                  return createNotif(
                    'info',
                    `${product.name} (${product.type}) removed from wishlist.`
                  );
                }

                addToWishlist(product.id);

                createNotif(
                  'success',
                  `${product.name} (${product.type}) added to wishlist!`
                );

                // onAddToWishlist && onAddToWishlist();
              }}
            >
              <svg
                class="product__items--action__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="25.51"
                height="23.443"
                viewBox="0 0 512 512"
              >
                <path
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                ></path>
              </svg>
              <span class="visually-hidden">Wishlist</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
