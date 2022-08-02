import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import belinasiApi from '../apis/belinasiApi';
import Spinner from '../components/Spinner';
import Preloader from '../components/Preloader';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { query } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [productsStatus, setProductsStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);

  // const createNotif = (type, text) => {
  //   searchParams.append(type, text);
  //   setSearchParams(searchParams);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    setProducts([]);
    setCurrPage(1);
    getProducts(query);
  }, [query]);

  useEffect(() => {
    getProducts(query);
  }, [currPage]);

  const getProducts = async q => {
    try {
      setProductsStatus('loading');

      let url = `/products?page=${currPage}&fields=images,name,type,price&q=${q}`;
      const { data } = await belinasiApi.get(url);

      if (currPage === 1) {
        setProducts([...data.data.products]);
      } else {
        setProducts([...products, ...data.data.products]);
      }
      setTotal(data.data.total);

      setProductsStatus('loaded');
    } catch (err) {
      setProductsStatus('error');
      console.log(err.message);
    }
  };

  //   useEffect(getProducts, []);

  const loadMore = async () => {
    setCurrPage(currPage + 1);

    // await getProducts(query);
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
            marginBottom: '2rem',
            paddingLeft: '1rem'
          }}
        >
          Results for "{query}"
        </h2>

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
