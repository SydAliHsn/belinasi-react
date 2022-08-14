import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Preloader from '../components/Preloader';
import belinasiApi from '../apis/belinasiApi';

const categories = [
  'education',
  'orphanage',
  'disabled',
  'community',
  'humanity',
  'animals',
  'religious',
  'sports',
  'lifestyle',
  'business',
  'family',
  'environment',
  'others'
];

const CreateCampaign = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const imagesRef = React.createRef();
  const videoRef = React.createRef();

  const [pageStatus, setPageStatus] = useState('loaded');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('education');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState();
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [endDate, setEndDate] = useState('');

  useEffect(() => window.scrollTo(0, 0), []);

  const createNotif = (type, message) => {
    searchParams.append(type, message);
    setSearchParams(searchParams);
  };

  const createCampaign = async e => {
    try {
      e.preventDefault();

      if (!images[0])
        return createNotif(
          'error',
          'Please specify the images for the campaign as well.'
        );

      if (!title || !category || !startDate || !endDate || !description) {
        return createNotif('error', 'Please fill all the fields');
      }

      setPageStatus('loading');

      const res = await belinasiApi.get('/users/getMe');

      const formData = new FormData();

      // formData.append('images', images);
      images.forEach(img => formData.append('images', img));
      formData.append('title', title);
      formData.append('category', category);
      formData.append('description', description);
      formData.append('video', video);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);

      const { data } = await belinasiApi.post('/campaigns', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      navigate(
        `/campaigns/${data.data.campaign.id}?success=${data.data.campaign.title} Campaign created successfully!`,
        { replace: 'true' }
      );

      setPageStatus('loaded');
    } catch (err) {
      setPageStatus('loaded');
      if (err.response.data && err.response.status === 401) {
        return navigate(
          `/signup-login?redirectTo=/createCampaign&error=${err.response.data.message}`,
          { replace: 'true' }
        );
      }

      if (err.response.data)
        return createNotif('error', err.response.data.message);

      createNotif('err', 'Something went wrong!');
    }
  };

  const renderCategories = () => {
    return categories.map(categ => (
      <option value={categ}>
        {categ.slice(0, 1).toUpperCase() + categ.slice(1)}
      </option>
    ));
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} loadingText="Creating Campaign..." />

      <Header />
      <Breadcrumb pageName={'Create Campaign'} />

      <main class="main__content_wrapper py-5">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>Create Campaign</h1>

          <form className="create-campaign-form" onSubmit={createCampaign}>
            <div className="create-campaign-form__section">
              <div>
                <label>Campaign Title: </label>
                <input
                  required
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label>Category: </label>
                <select
                  required
                  onChange={e => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                >
                  {renderCategories()}
                </select>
              </div>
            </div>

            <div className="create-campaign-form__section">
              <div>
                <label>Description & Goal: </label>
                <textarea
                  required
                  type="text"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label>Images (max 5): </label>
                <input
                  style={{ display: 'none' }}
                  ref={imagesRef}
                  type={'file'}
                  accept="image/*"
                  multiple
                  required
                  onChange={e => {
                    setImages([...e.target.files]);
                  }}
                />
                <a
                  className="primary__btn"
                  onClick={() => imagesRef.current.click()}
                >
                  Choose Images
                </a>

                <p>{images.length} images selected.</p>
              </div>
            </div>

            <div className="create-campaign-form__section">
              <div>
                <label>Video (max size 200MB): </label>
                <input
                  style={{ display: 'none' }}
                  ref={videoRef}
                  type={'file'}
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={e => {
                    setVideo(e.target.files[0]);
                  }}
                />
                <a
                  className="primary__btn"
                  onClick={() => videoRef.current.click()}
                >
                  Choose Video
                </a>

                <p>{video ? video.name : 'No video'} selected.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ paddingRight: '2rem' }}>
                  <label>Start Date: </label>
                  <input
                    min={new Date().toISOString().split('T')[0]}
                    required
                    style={{ cursor: 'pointer' }}
                    type="date"
                    name="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div>
                  <label>End Date: </label>
                  <input
                    required
                    min={
                      new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split('T')[0]
                    }
                    style={{ cursor: 'pointer' }}
                    type="date"
                    name="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="primary__btn" style={{ marginTop: '1rem' }}>
              Create Campaign
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default CreateCampaign;
