import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/vendor/bootstrap.min.css';
import './css/index.css';
// import './css/plugins/glightbox.min.css';
// import './css/plugins/swiper-bundle.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
