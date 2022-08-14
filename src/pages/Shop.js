import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import belinasiApi from '../apis/belinasiApi';
import Spinner from '../components/Spinner';
import Preloader from '../components/Preloader';

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

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [productsStatus, setProductsStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [category, setCategory] = useState('all');
  // using this For page rerender
  const [pageStatus, setPageStatus] = useState('loaded');

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    getProducts();
  }, [category]);

  // const createNotif = (type, text) => {
  //   searchParams.append(type, text);
  //   setSearchParams(searchParams);
  // };

  const loadMore = async () => {
    setCurrPage(currPage + 1);

    await getProducts();
  };

  const getProducts = async () => {
    try {
      setProductsStatus('loading');

      let url = `/products?page=${currPage +
        1}&fields=images,name,type,price,designs,availableColors`;
      if (category && category !== 'all') url += `&category=${category}`;

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
            setProducts([]);
            setTotal(null);
            setCategory(categ);
          }}
        >
          {categ[0].toUpperCase() + categ.slice(1)}
        </span>
      );
    });
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
          No Products Found!
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

  const renderLoadMoreOrSpinner = () => {
    if (productsStatus === 'loading') return <Spinner />;

    if (total === products.length) return null;

    if (!(total === products.length)) {
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
              setProducts([]);
              setTotal(null);
              setCategory('');
              getProducts();
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
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
