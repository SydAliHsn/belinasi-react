import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import belinasiApi from '../apis/belinasiApi';
import Preloader from '../components/Preloader';

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
  'adoption',
  'religious',
  'political',
  'animal-shelter',
  'schools',
  'rights',
  'adoption',
  'religious',
  'political',
  'animal-shelter',
  'schools',
  'rights',
  'animal-shelter',
  'schools',
  'rights',
  'adoption',
  'religious',
  'political',
  'animal-shelter',
  'schools',
  'rights'
];

const Shop = () => {
  const [pageStatus, setPageStatus] = useState('loading');
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState('random');

  useEffect(() => {
    getProducts();
  }, [categories]);

  const getProducts = async () => {
    // belinasiApi.get(`/products/${category}`);

    setProducts([
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
  };

  const renderCategories = () => {
    return categories.map(categ => {
      return (
        <span
          class="widget__tagcloud--link m-2"
          style={{ cursor: 'pointer' }}
          onClick={e => setCategory(categ)}
        >
          {categ[0].toUpperCase() + categ.slice(1)}
        </span>
      );
    });
  };

  const renderProducts = type => {
    return products.map(product => {
      return (
        <div class="col mb-30">
          <ProductCard product={product} />
        </div>
      );
    });

    return (
      <React.Fragment>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
        <div class="col mb-30">
          <ProductCard product={sampleProduct} />
        </div>
      </React.Fragment>
    );
  };

  if (pageStatus === 'loading') return <Preloader />;

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
            marginBottom: '1rem'
          }}
        >
          Categories
        </h2>
        <div
          className="categories-container"
          style={{
            marginBottom: '8rem',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {renderCategories()}
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

        <button
          className="primary__btn"
          style={{
            marginTop: '2rem',
            marginBottom: '5rem',
            maxWidth: '20rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Load More
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
