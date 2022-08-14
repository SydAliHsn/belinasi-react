import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Preloader from './Preloader';

const availableColors = [
  'black',
  'lightBlue',
  'pink',
  'red',
  'lightGreen',
  'white',
  'purple',
  'yellow',
  'grey',
  'aqua',
  'orange'
];

const availableFonts = [
  'Arial',
  'Helvetica',
  'Verdana',
  'Georgia',
  'Courier',
  'Comic Sans MS',
  'Impact',
  'Monaco',
  'Optima',
  'Plaster',
  'Engagement'
];

const TNew = ({ setDesigns }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [polaroidImages, setPolaroidImages] = useState([
    'https://images.unsplash.com/photo-1635648116223-bce260c0dc1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474&q=80',
    'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    'https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  ]);
  const [currSide, setCurrSide] = useState('front');
  const [pageStatus, setPageStatus] = useState('loaded');
  const [itemImage, setItemImage] = useState(
    '/new-designer-assets/img/crew_front.png'
  );

  const uploadImgRef = React.createRef();

  const renderColors = () => {
    return availableColors.map(color => (
      <li
        class="color-preview"
        title={color.slice(0, 1).toUpperCase() + color.slice(1)}
        style={{ backgroundColor: color }}
      ></li>
    ));
  };
  const renderFonts = () => {
    return availableFonts.map(font => (
      <option>
        <a tabindex="-1" class={font}>
          {font}
        </a>
      </option>
    ));
  };

  const renderPolaroidImages = () => {
    return polaroidImages.map(img => <img class="img-polaroid" src={img} />);
  };

  useEffect(() => {
    const js = [
      'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
      '/new-designer-assets/js/fabric.js',
      '/new-designer-assets/js/script.js',
      '/new-designer-assets/js/bootstrap.min.js',
      '/new-designer-assets/js/jquery.miniColors.min.js',
      '/new-designer-assets/js/tshirtEditor.js'
    ];

    // function scriptLoaded() {
    //   window.A.sort();
    // }

    js.forEach(link => {
      const script = document.createElement('script');
      script.src = link;
      script.defer = true;
      // script.onload = () => this.scriptLoaded();

      document.body.appendChild(script);
    });
  }, []);

  const createNotif = (type, message) => {
    searchParams.set(type, message);
    setSearchParams(searchParams);
  };

  return (
    <div class="container">
      <Preloader status={pageStatus} />

      <div class="page-header">
        <h2>Customize T-Shirt</h2>
      </div>

      {/* <!-- Headings & Paragraph Copy --> */}
      <div className="designer-container">
        <div style={{ maxWidth: '28rem', padding: '2rem 0' }}>
          <div class="tabbable">
            {/* <!-- Only required for left/right tabs --> */}
            <ul
              class="nav nav-tabs"
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <li class="active">
                <a className="toggle-tab-btn" href="#tab1" data-toggle="tab">
                  T-Shirt Options
                </a>
              </li>
              <li>
                <a className="toggle-tab-btn" href="#tab2" data-toggle="tab">
                  Gravatar
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active" id="tab1">
                <div class="well" style={{ padding: '1rem 0' }}>
                  <h4>Tee Styles</h4>
                  <select
                    id="tshirttype"
                    onChange={e => {
                      setItemImage(
                        e.target.selectedOptions[0].value.replace(
                          'front',
                          currSide
                        )
                      );
                    }}
                  >
                    <option
                      value="/new-designer-assets/img/crew_front.png"
                      selected="selected"
                    >
                      Short Sleeve Shirts
                    </option>
                    <option value="/new-designer-assets/img/mens_longsleeve_front.png">
                      Long Sleeve Shirts
                    </option>
                    <option value="/new-designer-assets/img/mens_hoodie_front.png">
                      Hoodies
                    </option>
                    <option value="/new-designer-assets/img/mens_tank_front.png">
                      Tank tops
                    </option>
                  </select>
                  {/* <!--						      </p>--> */}
                </div>
                <div class="well">
                  <h4>Try Colors</h4>
                  <ul class="nav">{renderColors()}</ul>
                </div>
              </div>
              <div class="tab-pane" id="tab2">
                <div class="well">
                  <form class="input-append" id="add-text">
                    <input
                      class="span2"
                      id="text-string"
                      type="text"
                      style={{ height: '3rem', paddingLeft: '0.8rem' }}
                      placeholder="Add text to shirt..."
                    />
                    <button
                      class="primary__btn"
                      title="Add text"
                      style={{
                        transform: 'scale(0.63) translate(-29%, 5%)'
                      }}
                    >
                      <i
                        class="fa-solid fa-share"
                        style={{ fontSize: '2rem' }}
                      ></i>
                    </button>
                    <hr />
                  </form>
                  <div id="avatarlist">{renderPolaroidImages()}</div>
                  <div>
                    <hr />
                    <input
                      ref={uploadImgRef}
                      style={{ display: 'none' }}
                      type="file"
                      accept="image/*"
                      name="fileToUpload"
                      id="fileToUpload"
                      onChange={e =>
                        setPolaroidImages([
                          ...polaroidImages,
                          URL.createObjectURL(e.target.files[0])
                        ])
                      }
                    />
                    <button
                      class="primary__btn"
                      style={{
                        transform: 'scale(0.8) translate(-16%)',
                        fontSize: '2rem'
                      }}
                      onClick={() => uploadImgRef.current.click()}
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="primary__btn"
              style={{ marginTop: '2rem', marginBottom: '0.5rem' }}
              onClick={() => {
                const firstSide = currSide;
                const secondSide = currSide === 'front' ? 'back' : 'front';

                setPageStatus('loading');

                const designs = {
                  [firstSide]: window.canvas
                    .toDataURL({
                      format: 'png',
                      multiplier: 12
                    })
                    .split('base64,')[1]
                };

                // setCurrSide(secondSide);
                window.changeSideNew(secondSide);

                // Setting a 200ms timeout cuz changing side takes 100ms to update the canvas
                setTimeout(() => {
                  designs[secondSide] = window.canvas
                    .toDataURL({
                      format: 'png',
                      multiplier: 12
                    })
                    .split('base64,')[1];

                  setDesigns(designs);
                  window.changeSideNew(firstSide);
                  setPageStatus('loaded');
                  createNotif('success', 'Design saved succesfully!');
                }, 200);
              }}
            >
              Save Design
            </button>
            <p>
              Click <i class="fa-solid fa-arrow-up"></i> Save Design after
              finishing your design!
            </p>
          </div>
          {/* <div class="span6"> */}
        </div>

        {/* <!--	EDITOR      --> */}
        <div className="editor">
          <div align="center" style={{ minHeight: '32px' }}>
            <div class="clearfix">
              <div
                class="btn-group inline pull-left"
                id="texteditor"
                style={{ display: 'none' }}
              >
                {/* <button
                  id="font-family"
                  class="btn dropdown-toggle"
                  data-toggle="dropdown"
                  title="Font Style"
                >
                  <i
                    class="icon-font"
                    style={{ width: '19px', height: '19px' }}
                  ></i>
                </button> */}
                {/* <div> */}
                <select
                  name="font"
                  id="font-list"
                  aria-labelledby="font-family-X"
                >
                  <option value={'comic sans ms'} selected disabled>
                    Font
                  </option>
                  {renderFonts()}
                </select>
                {/* </div> */}
                {/* <select
                  id="font-list"
                  class="dropdown-menu"
                  role="menu"
                  aria-labelledby="font-family-X"
                >
                  {renderFonts()}
                </select> */}
                <button id="text-bold" class="btn" data-original-title="Bold">
                  <img src="/new-designer-assets/img/font_bold.png" />
                </button>
                <button
                  id="text-italic"
                  class="btn"
                  data-original-title="Italic"
                >
                  <img src="/new-designer-assets/img/font_italic.png" />
                </button>
                <button id="text-strike" class="btn" title="Strike">
                  <img src="/new-designer-assets/img/font_strikethrough.png" />
                </button>
                <button id="text-underline" class="btn" title="Underline">
                  <img src="/new-designer-assets/img/font_underline.png" />
                </button>
                <a
                  class="btn"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Font Color"
                >
                  <input
                    type="hidden"
                    id="text-fontcolor"
                    class="color-picker"
                    size="7"
                    value="#000000"
                  />
                </a>
                {/* <a
                  class="btn"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Font Border Color"
                >
                  <input
                    type="hidden"
                    id="text-strokecolor"
                    class="color-picker"
                    size="7"
                    value="#000000"
                  />
                </a> */}
                {/* <!--- Background <input type="hidden" id="text-bgcolor" class="color-picker" size="7" value="#ffffff"> ---> */}
              </div>
              <div
                class="pull-right"
                align=""
                id="imageeditor"
                style={{ display: 'none' }}
              >
                <div class="btn-group">
                  <button
                    id="remove-selected"
                    class="btn"
                    title="Delete selected item"
                  >
                    <i class="icon-trash" style={{ height: '19px' }}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (currSide === 'front') {
                setCurrSide('back');
                window.changeSideNew('back');
              }

              if (currSide === 'back') {
                setCurrSide('front');
                window.changeSideNew('front');
              }
            }}
            id="flipback"
            style={{ transform: 'scale(0.75) translate(50px)' }}
            type="button"
            class="primary__btn"
            title="Rotate View"
            data-original-title="Show Back View"
          >
            <i class="fa-solid fa-rotate" style={{ fontSize: '2rem' }}></i>
          </button>

          <div
            id="shirtDiv"
            class="page"
            style={{
              width: '530px',
              height: '630px',
              position: 'relative',
              backgroundColor: 'rgb(255, 255, 255)',
              transition: 'background 0.3s'
            }}
          >
            <img name="tshirtview" id="tshirtFacing" src={itemImage} />

            <div
              onMouseEnter={e =>
                (e.target.style.borderColor = 'var(--secondary-color)')
              }
              onMouseLeave={e => (e.target.style.borderColor = 'transparent')}
              id="drawingArea"
              style={{
                position: 'absolute',
                top: '100px',
                left: '160px',
                zIndex: 10,
                width: '204px',
                height: '400px',
                border: '1px dotted var(--secondary-color)'
              }}
            >
              <canvas
                id="tcanvas"
                width="203"
                height="400"
                class="hover"
                // style="-webkit-user-select: none"
              ></canvas>
            </div>
          </div>
        </div>

        {/* <!--	/EDITOR		--> */}
      </div>

      {/* </div> */}
      <style>
        @import url(/new-designer-assets/css/jquery.miniColors.css); @import
        url(/new-designer-assets/css/style.css);
      </style>
    </div>
  );
};

export default TNew;
