import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Preloader from '../components/Preloader';
import belinasiApi from '../apis/belinasiApi';

const CreateCampaign = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loaded');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('education');
  const [video, setVideo] = useState('');
  const [images, setImages] = useState(['']);
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

      if (
        !title ||
        !category ||
        !video ||
        !images[0] ||
        !startDate ||
        !endDate ||
        !description
      ) {
        return createNotif('error', 'Please fill all the fields');
      }

      setPageStatus('loading');

      const res = await belinasiApi.get('/users/getMe');

      const campaignData = {
        title,
        category,
        description,
        images,
        video,
        startDate,
        endDate,
        creator: res.data.data.user.id
      };

      const { data } = await belinasiApi.post('/campaigns', campaignData);

      navigate(
        `/campaigns/${data.data.campaign.id}?success=${data.data.campaign.title} Campaign created successfully!`
      );

      setPageStatus('loaded');
    } catch (err) {
      if (err.response.data && err.response.status === 401) {
        setPageStatus('loaded');
        return navigate(
          `/signup-login?redirectTo=/createCampaign&error=${err.response.data.message}`
        );
      }

      setPageStatus('loaded');

      if (err.response.data)
        return createNotif('error', err.response.data.message);

      createNotif('err', 'Something went wrong!');
    }
  };

  return (
    <React.Fragment>
      <Preloader status={pageStatus} />

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
                  <option value="education">Education</option>
                  <option value="medical">Medical</option>
                  <option value="adoption">Adoption</option>
                  <option value="political">political</option>
                  <option value="other">Other</option>
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
              </div>
            </div>

            <div className="create-campaign-form__section">
              <div>
                <label>Video (URL): </label>
                <input
                  type="text"
                  name="video"
                  value={video}
                  onChange={e => setVideo(e.target.value)}
                />
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
