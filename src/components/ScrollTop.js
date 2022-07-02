import React from "react";

const ScrollTop = () => {
  const scrollToTop = () => {};

  return (
    <button id="scroll__top" onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M112 244l144-144 144 144M256 120v292"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
