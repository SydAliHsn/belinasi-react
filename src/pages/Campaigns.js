import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CampaignCard from '../components/CampaignCard';
import belinasiApi from '../apis/belinasiApi';
import Spinner from '../components/Spinner';
import Preloader from '../components/Preloader';
import Breadcrumb from '../components/Breadcrumb';

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

const Campaigns = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [campaignsStatus, setCampaignsStatus] = useState('loading');
  const [campaigns, setCampaigns] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [category, setCategory] = useState('all');
  // using this For page rerender
  const [pageStatus, setPageStatus] = useState('loaded');

  useEffect(() => window.scrollTo(0, 0), []);

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
          onClick={() => {
            if (categ === category) return;

            setCurrPage(0);
            setCampaigns([]);
            setTotal(null);
            setCategory(categ);
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

    if (total === campaigns.length) return null;

    if (!(total === campaigns.length)) {
      return (
        <button className="primary__btn" onClick={loadMore}>
          Load More
        </button>
      );
    }
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

      <Header />

      <Breadcrumb pageName={'Campaigns'} />

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
          <p
            onClick={() => {
              setCurrPage(0);
              setCampaigns([]);
              setTotal(null);
              setCategory('');
              getCampaigns();
            }}
            className="reset"
            style={{
              fontSize: '2rem',
              color: '#fff',
              margin: '0 1.8rem',
              cursor: 'pointer'
            }}
          >
            RESET
          </p>
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
      <Footer />
    </React.Fragment>
  );
};

export default Campaigns;
