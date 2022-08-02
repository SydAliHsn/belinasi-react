import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import belinasiApi from '../apis/belinasiApi';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const CampaignDetails = () => {
  const { campaignId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [pageStatus, setPageStatus] = useState('loading');
  const [campaign, setCampaign] = useState();
  const [productsStatus, setProductsStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);

  const getProducts = async () => {
    try {
      setProductsStatus('loading');

      let url = `/products?campaign=${campaignId}&page=${currPage +
        1}&fields=images,name,type,price`;

      const { data } = await belinasiApi.get(url);

      setProducts([...products, ...data.data.products]);
      setTotal(data.data.total);
      setCurrPage(currPage + 1);

      setProductsStatus('loaded');
    } catch (err) {
      setProductsStatus('error');
      console.log(err.message);
    }
  };

  useEffect(() => {
    (async function() {
      const { data } = await belinasiApi.get(`/campaigns/${campaignId}`);

      setCampaign(data.data.campaign);

      getProducts();

      setPageStatus('loaded');
    })();
  }, []);

  const loadMore = async () => {
    setCurrPage(currPage + 1);

    await getProducts();
  };

  const renderLoadMoreOrSpinner = () => {
    if (productsStatus === 'loading') return <Spinner />;

    if (total === products.length) return null;

    return (
      <button className="primary__btn" onClick={loadMore}>
        Load More
      </button>
    );
  };

  const renderProducts = () => {
    if (!products.length && productsStatus !== 'loading')
      return (
        <h2
          style={{
            padding: '1rem 2rem',
            margin: '0 auto',
            maxWidth: '40rem',
            border: '2px solid var(--secondary-color)'
          }}
        >
          This campaign has no products yet!
        </h2>
      );

    const productsMarkup = products.map(product => {
      return (
        <div class="col mb-30 py-1">
          <ProductCard product={product} />
        </div>
      );
    });

    return (
      <div class="product-container">
        <div
          class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30"
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {productsMarkup}
        </div>
      </div>
    );
  };

  const renderSlides = () => {
    return campaign.images.map(img => {
      return (
        <SwiperSlide className="swiper-slide">
          <div
            className="product__media--preview__items"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <img
              className="product__media--preview__items--img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={img}
              alt="product-media-img"
            />
          </div>
        </SwiperSlide>
      );
    });
  };

  if (pageStatus === 'loading') return <Preloader />;

  return (
    <React.Fragment>
      <Header />

      <main className="main__content_wrapper">
        <div className="campaign-details py-5">
          <div className="container campaign-details__container">
            <h1 className="campaign-details__title">{campaign.title}</h1>

            <p className="text-main py-2">
              <span style={{ fontWeight: 500, paddingRight: '0.7rem' }}>
                Category:
              </span>
              {campaign.category}
            </p>

            <div className="campaign-details__dates py-2">
              <p style={{ lineHeight: 1.1 }}>
                <span style={{ fontWeight: 500, paddingRight: '0.7rem' }}>
                  Started At:
                </span>
                {new Date(campaign.startDate).toDateString()}
              </p>
              <p style={{ lineHeight: 1.1 }}>
                <span style={{ fontWeight: 500, paddingRight: '0.7rem' }}>
                  {new Date(campaign.endDate) > new Date()
                    ? 'Ended At:'
                    : 'Will End At:'}
                </span>
                {new Date(campaign.endDate).toDateString()}
              </p>
            </div>

            <div className="campaign-details__description py-5">
              <h2>Description & Goal:</h2>

              <p className="text-main py-1">{campaign.description}</p>
            </div>

            <div className="campaign-details__img-vid-container">
              <div className="campaign-details__images">
                <Swiper
                  className="swiper-wrapper"
                  thumbs={{ swiper: thumbsSwiper }}
                  navigation
                  pagination
                >
                  {renderSlides()}
                </Swiper>
              </div>

              {campaign.video ? (
                <div className="campaign-details__video-wrapper">
                  <ReactPlayer
                    width={'100%'}
                    height={'100%'}
                    url={campaign.video}
                    //   playing={true}
                    controls={true}
                  />
                </div>
              ) : (
                ''
              )}
            </div>

            <div
              className="campaign-details__products"
              style={{ marginTop: '4rem' }}
            >
              <h2 className="p-4">Products:</h2>

              {renderProducts()}

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
          </div>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default CampaignDetails;
