import React from 'react';
import { Link } from 'react-router-dom';

const FundraiseOptions = () => {
  return (
    <section class="section--padding options-section">
      <div class="container options-section__container">
        <h2 class="h2">
          Online fundraising options for individuals, groups and organizations
        </h2>
        <div class="options-section__options">
          <Link to={'/fundraising/medical'} class="options-section__option">
            <i class="fa-solid fa-house-medical-flag"></i>
            <p>Medical</p>
          </Link>
          <Link
            to={'/fundraising/animal-shelter'}
            class="options-section__option"
          >
            <i class="fa-solid fa-paw"></i>
            <p>Animal Shelter</p>
          </Link>
          <Link to={'/fundraising/schools'} class="options-section__option">
            <i class="fa-solid fa-graduation-cap"></i>
            <p>Schools</p>
          </Link>
          <Link to={'/fundraising/nonprofit'} class="options-section__option">
            <i class="fa-solid fa-hand-holding-heart"></i>
            <p>Nonprofits</p>
          </Link>
          <Link to={'/fundraising/political'} class="options-section__option">
            <i class="fa-solid fa-landmark"></i>
            <p>Political</p>
          </Link>
          <Link
            to={'/fundraising/peer-to-peer'}
            class="options-section__option"
          >
            <i class="fa-solid fa-hand-holding-hand"></i>
            <p>Peer-to-peer</p>
          </Link>
          <Link to={'/fundraising/religious'} class="options-section__option">
            <i class="fa-solid fa-church"></i>
            <p>Religious</p>
          </Link>
          <Link to={'/fundraising/adoption'} class="options-section__option">
            <i class="fa-solid fa-baby-carriage"></i>
            <p>Adoption</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FundraiseOptions;
