import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import belinasiApi from '../apis/belinasiApi';
import Spinner from '../components/Spinner';

const sampleProduct = {
  imgs: [
    'https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    'https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
  ],

  id: '98df47jk43534',
  subtitle: 'Men, Shirt',
  title: 'Noice Shirt',
  price: '69$',
  creator: 'Belo',
  type: 'Shirt'
};

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
  'others'
];

const Shop = () => {
  const [pageStatus, setPageStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    getProducts();
  }, [categories]);

  const loadMore = async () => {
    setCurrPage(currPage + 1);

    await getProducts();
  };

  const getProducts = async () => {
    try {
      setPageStatus('loading');

      // const { data } = await belinasiApi.get(`/products?category=${category}&page=${currPage+1}`);
      // setProducts(products, ...data.data.products);
      // setTotal(data.data.total);
      // setCurrPage(currPage + 1);

      setProducts([
        ...products,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct,
        sampleProduct
      ]);

      setPageStatus('loaded');
    } catch (err) {
      setPageStatus('error');
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
          onClick={e => setCategory(categ)}
        >
          {categ[0].toUpperCase() + categ.slice(1)}
        </span>
      );
    });
  };

  const renderProducts = type => {
    // return <Spinner/>;

    return products.map(product => {
      return (
        <div class="col mb-30 py-1">
          <ProductCard product={product} />
        </div>
      );
    });
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
              setCategory('');
              setCurrPage(0);
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

        <div class="product-container">
          <div
            class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30"
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            {renderProducts()}
          </div>
        </div>

        <div
          style={{
            marginTop: '2rem',
            marginBottom: '5rem',
            maxWidth: '20rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {pageStatus === 'loading' ? (
            <Spinner />
          ) : (
            <button
              className="primary__btn"
              // style={{
              //   marginTop: '2rem',
              //   marginBottom: '5rem',
              //   maxWidth: '20rem',
              //   marginLeft: 'auto',
              //   marginRight: 'auto'
              // }}
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
