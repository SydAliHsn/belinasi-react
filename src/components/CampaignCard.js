import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ campaign }) => {
  return (
    <div class="product__items my-1" key={campaign.id}>
      <div class="product__items--thumbnail">
        <Link to={`/campaigns/${campaign.id}`} class="product__items--link">
          <img
            class="product__items--img product__primary--img"
            src={campaign.images[0]}
            alt="campaign-img"
          />

          {campaign.images[1] ? (
            <img
              class="product__items--img product__secondary--img"
              src={campaign.images[1]}
              alt="campaign-img"
            />
          ) : (
            ''
          )}
        </Link>
      </div>
      <div class="product__items--content">
        <span class="product__items--content__subtitle">
          {campaign.category.slice(0, 1).toUpperCase() +
            campaign.category.slice(1)}
        </span>

        <h3 class="product__items--content__title">
          <Link to={`/campaigns/${campaign.id}`}>{campaign.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
