import React, { useEffect } from 'react';

const Preloader = ({ status, loadingText = 'loading' }) => {
  useEffect(() => {
    if (status === 'loading') {
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.querySelector('html').style.overflowY = 'auto';
    }

    return () => {
      document.querySelector('html').style.overflowY = 'auto';
    };
  }, [status]);

  const renderLoadingText = () => {
    return loadingText
      .toUpperCase()
      .split('')
      .map(el => {
        if (!el.trim()) return <span style={{ padding: '0 0.8rem' }}> </span>;
        return (
          <span data-text-preloader={el} class="letters-loading">
            {el}
          </span>
        );
      });
  };

  return (
    <div
      id="preloader"
      className={status}
      style={{ pointerEvents: status === 'loading' ? 'all' : 'none' }}
    >
      <div id="ctn-preloader" class="ctn-preloader">
        <div class="animation-preloader">
          <div class="spinner"></div>
          <div class="txt-loading">{renderLoadingText()}</div>
        </div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default Preloader;
