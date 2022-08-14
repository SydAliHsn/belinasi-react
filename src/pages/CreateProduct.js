import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Preloader from '../components/Preloader';
import belinasiApi from '../apis/belinasiApi';
import TNew from '../components/TNew';

const CreateProduct = () => {
  const { campaignId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loaded');
  const [selectedColors, setSelectedColors] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sizes, setSizes] = useState([]);
  const [type, setType] = useState('t-shirt');
  const [designs, setDesigns] = useState({ front: '', back: '' });
  // const [images, setImages] = useState(['']);
  const [margin, setMargin] = useState([100]);

  const minPrices = {
    't-shirt': 600,
    hoodie: 900
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createNotif = (type, message) => {
    searchParams.append(type, message);
    setSearchParams(searchParams);
  };

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
  const availabeSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  const createProduct = async e => {
    try {
      e.preventDefault();

      if (!designs.front)
        return createNotif(
          'error',
          'Please design your product and click Save Design button before creating it!'
        );

      if (!selectedColors.length || !sizes.length || !name || !message) {
        return createNotif('error', 'Please fill all the fields');
      }

      setPageStatus('loading');

      const res = await belinasiApi.get('/users/getMe');

      const productData = {
        name,
        sizes,
        message,
        type,
        availableColors: selectedColors,
        price: minPrices[type] + margin,
        // images,
        designs,
        campaign: campaignId,
        creator: res.data.data.user.id
      };

      const { data } = await belinasiApi.post('/products', productData);

      navigate(
        `/products/${data.data.product.id}?success=${data.data.product.name} (${data.data.product.type}) created successfully.`
      );

      setPageStatus('loaded');
    } catch (err) {
      if (err.response.data && err.response.status === 401) {
        setPageStatus('loaded');
        return navigate(
          `/signup-login?redirectTo=/start&error=${err.response.data.message}`
        );
      }

      setPageStatus('loaded');

      if (err.response.data)
        return createNotif('error', err.response.data.message);

      createNotif('err', 'Something went wrong!');
    }
  };

  const renderSizes = () => {
    return availabeSizes.map(size => {
      return (
        <React.Fragment>
          <input
            checked={sizes.includes(size)}
            onClick={() => {
              const index = sizes.findIndex(el => el === size);

              if (index !== -1) {
                const newColors = [...sizes];
                newColors.splice(index, 1);
                return setSizes(newColors);
              }

              setSizes([...sizes, size]);
            }}
            id={size}
            name={size}
            type="checkbox"
          />
          <label
            className="variant__size--value red"
            htmlFor={size}
            style={{ padding: 0 }}
          >
            {size}
          </label>
        </React.Fragment>
      );
    });
  };

  const renderColors = () => {
    return availableColors.map(color => {
      return (
        <React.Fragment>
          <input
            id={`color-${color}`}
            name="color"
            type="checkbox"
            checked={selectedColors.includes(color)}
            onClick={() => {
              const index = selectedColors.findIndex(cl => cl === color);

              if (index !== -1) {
                const newColors = [...selectedColors];
                newColors.splice(index, 1);
                return setSelectedColors(newColors);
              }

              selectedColors.length === 6
                ? createNotif(
                    'error',
                    "You can't have more than 6 available colors for a Product."
                  )
                : setSelectedColors([...selectedColors, color]);
            }}
          />
          <label
            className={`variant__color--value ${color}`}
            htmlFor={`color-${color}`}
            title={color}
            style={{ backgroundColor: color }}
          ></label>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

      <Header />
      <Breadcrumb pageName={'Create Product'} />

      <main class="main__content_wrapper py-5">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>Create Product</h1>

          <div style={{ paddingTop: '5rem' }}>
            <TNew setDesigns={setDesigns} />
          </div>

          <form className="create-product-form" onSubmit={createProduct}>
            <div className="create-product-form__section">
              <div>
                <label>Product Name: </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div>
                <label>Type: </label>
                <select
                  required
                  onChange={e => {
                    setType(e.target.value);
                  }}
                  value={type}
                >
                  <option value="t-shirt">T-Shirt</option>
                  <option value="hoodie">Hoodie</option>
                </select>
              </div>
            </div>

            <div className="create-product-form__section">
              <div>
                <fieldset className="create-product__colors">
                  <label>Available Colors: (max 6)</label>
                  <div className="py-3"> {renderColors()}</div>
                </fieldset>
              </div>

              <div>
                <fieldset className="create-product__colors">
                  <label>Available Sizes: </label>
                  <div className="py-3"> {renderSizes()}</div>
                </fieldset>
              </div>
            </div>

            <div className="create-product-form__section">
              <div>
                <label>Message for buyers: </label>
                <input
                  required
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="price">Margin:</label>
                <input
                  type="number"
                  name="price"
                  value={margin}
                  onChange={e => setMargin(e.target.value)}
                />

                <label>
                  Base price for {type} :{minPrices[type]} Rp
                </label>
              </div>

              {/* <div>
                <label>Images (URL): </label>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '1rem'
                  }}
                >
                  {images.map((img, i) => (
                    <input
                      type="text"
                      value={img}
                      onChange={e => {
                        const newImgs = [...images];
                        newImgs[i] = e.target.value;
                        setImages(newImgs);
                      }}
                    />
                  ))}

                  <a
                    className="primary__btn"
                    style={{ width: '90%', textAlign: 'center' }}
                    onClick={e => {
                      e.preventDefault();
                      const newImgs = [...images];
                      newImgs.push('');

                      newImgs[newImgs.length - 2]
                        ? setImages(newImgs)
                        : createNotif('error', 'Please give a valid URL!');
                    }}
                  >
                    Add More+
                  </a>
                </div>
              </div> */}
            </div>

            <div className="create-product-form__section"></div>

            <button className="primary__btn" style={{ marginTop: '1rem' }}>
              Create Product
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default CreateProduct;
