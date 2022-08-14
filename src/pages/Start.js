import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

import belinasiApi from '../apis/belinasiApi';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';

const categories = [
  'disabled',
  'education',
  'orphanage',
  'humanity',
  'animals',
  'community',
  'religious',
  'sports',
  'lifestyle',
  'business',
  'family',
  'environment',
  'others',
  'all'
];

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const userId = localStorage.getItem('userId');
    if (!userId)
      navigate(
        '/signup-login?error=You are not logged in. Please log in or signup to get access!&redirectTo=/start'
      );
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(null);

  const [campaignsStatus, setCampaignsStatus] = useState('loading');
  const [campaigns, setCampaigns] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    getCampaigns();
  }, [category]);

  const loadMore = async () => {
    setCurrPage(currPage + 1);

    await getCampaigns();
  };

  const getCampaigns = async () => {
    try {
      setCampaignsStatus('loading');

      let url = `/campaigns?page=${currPage + 1}`;
      if (category && category !== 'all') url += `&category=${category}`;

      const { data } = await belinasiApi.get(url);

      setCampaigns([...campaigns, ...data.data.campaigns]);
      setTotal(data.data.total);
      setCurrPage(currPage + 1);

      setCampaignsStatus('loaded');
    } catch (err) {
      setCampaignsStatus('error');
      console.log(err.message);
    }
  };

  const renderCategories = () => {
    return categories.map(categ => {
      return (
        <span
          class={
            'widget__tagcloud--link m-2 ' + (category === categ ? 'active' : '')
          }
          style={{ cursor: 'pointer' }}
          onClick={async () => {
            if (categ === category) return;

            setCurrPage(0);
            setCampaigns([]);
            setTotal(null);
            setCategory(categ);
            // setCampaignsStatus('loading');

            // await getCampaigns();

            // setCampaignsStatus('loaded');
          }}
        >
          {categ[0].toUpperCase() + categ.slice(1)}
        </span>
      );
    });
  };

  const renderCampaigns = () => {
    if (!campaigns.length && campaignsStatus !== 'loading')
      return (
        <h2
          style={{
            padding: '1rem 2rem',
            margin: '0 auto',
            maxWidth: '40rem',
            border: '2px solid var(--secondary-color)'
          }}
        >
          No Campaigns Found!
        </h2>
      );

    const CampaignCard = ({ campaign }) => {
      return (
        <div class="product__items my-1" key={campaign.id}>
          <div class="product__items--thumbnail">
            <a
              href={`/campaigns/${campaign.id}/createProduct`}
              class="product__items--link"
            >
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
            </a>
          </div>
          <div class="product__items--content">
            <span class="product__items--content__subtitle">
              {campaign.category.slice(0, 1).toUpperCase() +
                campaign.category.slice(1)}
            </span>

            <h3 class="product__items--content__title">
              <a href={`/campaigns/${campaign.id}/createProduct`}>
                {campaign.title}
              </a>
            </h3>
          </div>
        </div>
      );
    };

    const campaignsMarkup = campaigns.map(product => {
      return (
        <div class="col mb-30 py-1">
          <CampaignCard campaign={product} />
        </div>
      );
    });

    return (
      <div class="campaign-container">
        <div
          class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mb--n30"
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {campaignsMarkup}
        </div>
      </div>
    );
  };

  const renderLoadMoreOrSpinner = () => {
    if (campaignsStatus === 'loading') return <Spinner />;

    if (total === campaigns.length || !campaigns.length) return null;

    if (total > campaigns.length) {
      return (
        <button className="primary__btn" onClick={loadMore}>
          Load More
        </button>
      );
    }
  };

  const campaignsSection = (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h2
        className="h2"
        style={{
          marginTop: '3rem',
          marginBottom: '1.5rem',
          paddingLeft: '1rem'
        }}
      >
        Categories
      </h2>
      <div
        className="categories-container"
        style={{
          marginBottom: '8rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        {renderCategories()}
      </div>

      {renderCampaigns()}

      <div
        style={{
          marginTop: '2rem',
          marginBottom: '5rem',
          maxWidth: '20rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {renderLoadMoreOrSpinner()}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Header />

      <Breadcrumb pageName={'Start Selling'} />

      <main class="main__content_wrapper py-5">
        <h1 style={{ textAlign: 'center' }} className="py-2">
          Start Selling & Raising Funds
        </h1>

        <div className="start__btn-container" style={{ display: 'flex' }}>
          <a className="primary__btn">
            <Link to="/createCampaign">Create New Campaign</Link>
          </a>

          <p className="text-main" style={{ fontWeight: 600 }}>
            OR
          </p>

          <a
            className="primary__btn"
            onClick={async () => {
              setType('existing');
              await getCampaigns();

              searchParams.append('message', 'Choose a campaign.');
              setSearchParams(searchParams);

              if (window.screen.width < 768) return window.scrollTo(0, 370);

              window.scrollTo(0, 470);
            }}
          >
            Start from Existing Campaign
          </a>
        </div>
      </main>

      {type === 'existing' ? (
        <div className="container" style={{ marginTop: '4rem' }}>
          <h1>Choose a Campaign</h1> {campaignsSection}
        </div>
      ) : null}

      <Footer />
    </React.Fragment>
  );
};

export default Start;
