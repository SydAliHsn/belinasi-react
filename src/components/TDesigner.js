import React, { useEffect } from 'react';

// import '../designer-css/index.css';
// import '../designer-css/bootstrap.min.css';
// import '../designer-css/bootstrap-responsive.min.css';
// import topi from "./topi";

const TDesigner = () => {
  useEffect(() => {
    const js = [
      'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.2.3/fabric.js',
      './designer-tool-assets/js/script.js',
      './designer-tool-assets/js/bootstrap.min.js',
      './designer-tool-assets/js/tshirtEditor.js',
      './designer-tool-assets/js/jquery.miniColors.min.js'
    ];

    function scriptLoaded() {
      window.A.sort();
    }

    js.forEach(link => {
      const script = document.createElement('script');
      script.src = link;
      script.defer = true;
      // script.onload = () => this.scriptLoaded();

      document.body.appendChild(script);
    });
  }, []);

  const config = {
    colors: [
      {
        title: 'White',
        color: '#ffffff'
      },
      {
        title: 'Dark Heather',
        color: '#616161'
      },
      {
        title: 'Gray',
        color: '#f0f0f0'
      },
      {
        title: 'Charcoal',
        color: '#5b5b5b'
      },
      {
        title: 'Black',
        color: '#222222'
      },
      {
        title: 'Heather Orange',
        color: '#fc8d74'
      },
      {
        title: 'Heather Dark Chocolate',
        color: '#432d26'
      },
      {
        title: 'Salmon',
        color: '#eead91'
      },
      {
        title: 'Chesnut',
        color: '#806355'
      },
      {
        title: 'Dark Chocolate',
        color: '#382d21'
      },
      {
        title: 'Citrus Yellow',
        color: '#faef93'
      },
      {
        title: 'Avocado',
        color: '#aeba5e'
      },
      {
        title: 'Kiwi',
        color: '#8aa140'
      },
      {
        title: 'Irish Green',
        color: '#1f6522'
      },
      {
        title: 'Scrub Green',
        color: '#13afa2'
      },
      {
        title: 'Teal Ice',
        color: '#b8d5d7'
      },
      {
        title: 'Heather Sapphire',
        color: '#15aeda'
      },
      {
        title: 'Sky',
        color: '#a5def8'
      },
      {
        title: 'Antique Sapphire',
        color: '#0f77c0'
      },
      {
        title: 'Heather Navy',
        color: '#3469b7'
      },
      {
        title: 'Cherry Red',
        color: '#c50404'
      }
    ],

    fonts: [{}]
  };

  const renderColors = () => {
    return config.colors.map(el => {
      return (
        <li
          className="color-preview"
          title={el.title}
          style={{ backgroundColor: el.color }}
        ></li>
      );
    });
  };

  return (
    <div className="container">
      <section id="typography">
        <div className="page-header">
          <h1>Customize T-Shirt</h1>
        </div>

        {/* <!-- Headings & Paragraph Copy --> */}
        <div className="row">
          <div className="span3">
            <div className="tabbable">
              {/* <!-- Only required for left/right tabs --> */}
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab1" data-toggle="tab">
                    T-Shirt Options
                  </a>
                </li>
                <li>
                  <a href="#tab2" data-toggle="tab">
                    Gravatar
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tab1">
                  <div className="well">
                    {/* <!--<h3>Tee Styles</h3>--> */}
                    {/* <!--<p>--> */}
                    <select id="tshirttype">
                      <option
                        value="/designer-tool-assets/img/crew_front.png"
                        selected="selected"
                      >
                        Short Sleeve Shirts
                      </option>
                      <option value="/designer-tool-assets/img/mens_longsleeve_front.png">
                        Long Sleeve Shirts
                      </option>
                      <option value="/designer-tool-assets/img/mens_hoodie_front.png">
                        Hoodies
                      </option>
                      <option value="/designer-tool-assets/img/mens_tank_front.png">
                        Tank tops
                      </option>
                    </select>
                  </div>

                  <div className="well">
                    <ul className="nav">{renderColors()}</ul>
                  </div>
                </div>
                <div className="tab-pane" id="tab2">
                  <div className="well">
                    <div className="input-append">
                      <input
                        className="span2"
                        id="text-string"
                        type="text"
                        placeholder="add text here..."
                      />
                      <button id="add-text" className="btn" title="Add text">
                        <i className="icon-share-alt"></i>
                      </button>
                      <hr />
                    </div>
                    <div id="avatarlist">
                      <img
                        className="img-polaroid"
                        src="https://images.unsplash.com/photo-1635648116223-bce260c0dc1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474&q=80"
                      />
                      <img
                        className="img-polaroid"
                        src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                      />
                      <img
                        className="img-polaroid"
                        src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                      />
                      <img
                        className="img-polaroid"
                        src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      />
                      <img
                        className="img-polaroid"
                        src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      />
                    </div>
                    <div>
                      <hr />
                      <form
                        action=""
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="file"
                          name="fileToUpload"
                          id="fileToUpload"
                        />
                        <button
                          className="btn btn-primary btn-upload"
                          type="submit"
                          value="Upload Custom Image"
                          name="submit"
                        >
                          Upload Image
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="span6">
            <div align="center" style={{ minHeight: '32px' }}>
              <div className="clearfix">
                <div
                  className="btn-group inline pull-left"
                  id="texteditor"
                  style={{ display: 'none' }}
                >
                  <button
                    id="font-family"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    title="Font Style"
                  >
                    <i
                      className="icon-font"
                      style={{ width: '19px', height: '19px' }}
                    ></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="font-family-X"
                  >
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Arial');"
                        className="Arial"
                      >
                        Arial
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Helvetica');"
                        className="Helvetica"
                      >
                        Helvetica
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Myriad Pro');"
                        className="MyriadPro"
                      >
                        Myriad Pro
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Delicious');"
                        className="Delicious"
                      >
                        Delicious
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Verdana');"
                        className="Verdana"
                      >
                        Verdana
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Georgia');"
                        className="Georgia"
                      >
                        Georgia
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Courier');"
                        className="Courier"
                      >
                        Courier
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Comic Sans MS');"
                        className="ComicSansMS"
                      >
                        Comic Sans MS
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Impact');"
                        className="Impact"
                      >
                        Impact
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Monaco');"
                        className="Monaco"
                      >
                        Monaco
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Optima');"
                        className="Optima"
                      >
                        Optima
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Hoefler Text');"
                        className="Hoefler Text"
                      >
                        Hoefler Text
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Plaster');"
                        className="Plaster"
                      >
                        Plaster
                      </a>
                    </li>
                    <li>
                      <a
                        tabindex="-1"
                        href="#"
                        onClick="setFont('Engagement');"
                        className="Engagement"
                      >
                        Engagement
                      </a>
                    </li>
                  </ul>
                  <button
                    id="text-bold"
                    className="btn"
                    data-original-title="Bold"
                  >
                    <img
                      src="/designer-tool-assets/img/font_bold.png"
                      height=""
                      width=""
                    />
                  </button>
                  <button
                    id="text-italic"
                    className="btn"
                    data-original-title="Italic"
                  >
                    <img
                      src="/designer-tool-assets/img/font_italic.png"
                      height=""
                      width=""
                    />
                  </button>
                  <button id="text-strike" className="btn" title="Strike">
                    <img
                      src="/designer-tool-assets/img/font_strikethrough.png"
                      height=""
                      width=""
                    />
                  </button>
                  <button id="text-underline" className="btn" title="Underline">
                    <img src="/designer-tool-assets/img/font_underline.png" />
                  </button>
                  <a
                    className="btn"
                    href="#"
                    rel="tooltip"
                    data-placement="top"
                    data-original-title="Font Color"
                  >
                    <input
                      type="hidden"
                      id="text-fontcolor"
                      className="color-picker"
                      size="7"
                      value="#000000"
                    />
                  </a>
                  <a
                    className="btn"
                    href="#"
                    rel="tooltip"
                    data-placement="top"
                    data-original-title="Font Border Color"
                  >
                    <input
                      type="hidden"
                      id="text-strokecolor"
                      className="color-picker"
                      size="7"
                      value="#000000"
                    />
                  </a>
                  {/* <!--- Background <input type="hidden" id="text-bgcolor" className="color-picker" size="7" value="#ffffff"> ---> */}
                </div>
                <div
                  className="pull-right"
                  align=""
                  id="imageeditor"
                  style={{ display: 'none' }}
                >
                  <div className="btn-group">
                    <button
                      className="btn"
                      id="bring-to-front"
                      title="Bring to Front"
                    >
                      <i
                        className="icon-fast-backward rotate"
                        style={{ height: '19px' }}
                      ></i>
                    </button>
                    <button
                      className="btn"
                      id="send-to-back"
                      title="Send to Back"
                    >
                      <i
                        className="icon-fast-forward rotate"
                        style={{ height: '19px' }}
                      ></i>
                    </button>
                    <button
                      id="flip"
                      type="button"
                      className="btn"
                      title="Show Back View"
                    >
                      <i
                        className="icon-retweet"
                        style={{ height: '19px' }}
                      ></i>
                    </button>
                    <button
                      id="remove-selected"
                      className="btn"
                      title="Delete selected item"
                    >
                      <i className="icon-trash" style={{ height: '19px' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--	EDITOR      --> */}
            <button
              id="flipback"
              type="button"
              className="btn"
              title="Rotate View"
            >
              <i className="icon-retweet" style={{ height: '19px' }}></i>
            </button>
            <div
              id="shirtDiv"
              className="page"
              style={{
                width: '530px',
                height: '630px',
                position: 'relative',
                backgroundColor: 'rgb(255, 255, 255)'
              }}
            >
              <img
                name="tshirtview"
                id="tshirtFacing"
                src="/designer-tool-assets/img/crew_front.png"
              />
              <div
                id="drawingArea"
                style={{
                  position: 'absolute',
                  top: '100px',
                  left: '160px',
                  zIndex: '10',
                  width: '200px',
                  height: '400px'
                }}
              >
                <canvas
                  id="tcanvas"
                  width="200"
                  height="400"
                  className="hover"
                  //   style="-webkit-user-select: none"
                ></canvas>
              </div>
            </div>
          </div>

          <button className="btn-large btn-success" id="btn-save">
            Save Design
          </button>
        </div>
      </section>

      <style>
        @import url(/designer-tool-assets/css/bootstrap.min.css); @import
        url(/designer-tool-assets/css/bootstrap-responsive.min.css); @import
        url(/designer-tool-assets/css/index.css);
      </style>
    </div>
  );
};

export default TDesigner;
