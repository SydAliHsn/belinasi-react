import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import Breadcrumb from '../components/Breadcrumb';
import belinasiApi from '../apis/belinasiApi';
import Spinner from '../components/Spinner';

const SignupLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState();
  const [signupStatus, setSignupStatus] = useState();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const [signupName, setSignupName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const redirect = (type, name) => {
    let redirectTo = searchParams.get('redirectTo') || '/';

    redirectTo +=
      type === 'signedIn'
        ? `?success=Thanks ${name} for Signing Up to Belinasi!`
        : `?success=Welcome Back ${name}! Let's continue Buying %26 Donating.`;

    navigate(redirectTo, { replace: true });
  };

  const createNotif = (type, text) => {
    searchParams.append(type, text);
    setSearchParams(searchParams);
  };

  const login = async e => {
    try {
      e.preventDefault();

      setLoginStatus('loading');

      const { data } = await belinasiApi.post('/users/login', {
        email: loginEmail,
        password: loginPassword
      });

      localStorage.setItem('userId', data.data.user.id);
      setLoginStatus('loggedIn');

      redirect('loggedIn', data.data.user.name);
    } catch (err) {
      setLoginStatus('error');

      createNotif('error', err.response.data.message);
    }
  };

  const signup = async e => {
    try {
      e.preventDefault();

      setSignupStatus('loading');

      if (signupPassword !== signupPasswordConfirm) {
        createNotif('error', 'Both passwords must be the same!');
        return setSignupStatus('error');
      }

      const { data } = await belinasiApi.post('/users/signup', {
        email: signupEmail,
        password: signupPassword,
        passwordConfirm: signupPasswordConfirm,
        name: signupName
      });

      localStorage.setItem('userId', data.data.user.id);
      setSignupStatus('signedIn');

      redirect('signedIn', data.data.user.name);
    } catch (err) {
      setSignupStatus('error');
      createNotif('error', err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <Header />

      <main class="main__content_wrapper">
        {/* <!-- Start breadcrumb section --> */}
        <Breadcrumb pageName="Signup Login" />
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- Start login section  --> */}
        <div class="login__section section--padding">
          <div class="container">
            <div class="login__section--inner">
              <div class="row row-cols-md-2 row-cols-1">
                <div class="col">
                  <div class="account__login">
                    <div class="account__login--header mb-25">
                      <h2 class="account__login--header__title h3 mb-10">
                        Login
                      </h2>
                      <p class="account__login--header__desc">
                        Login if you already have an account
                      </p>
                    </div>
                    <div class="account__login--inner">
                      <form class="form--login" onSubmit={login}>
                        <input
                          class="account__login--input login--email"
                          placeholder="Email Address"
                          type="email"
                          value={loginEmail}
                          onChange={e => setLoginEmail(e.target.value)}
                        />
                        <input
                          class="account__login--input login--password"
                          value={loginPassword}
                          onChange={e => setLoginPassword(e.target.value)}
                          type="password"
                          placeholder={'Password'}
                          required
                        />
                        <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                          <a
                            href="forgot-password.html"
                            class="account__login--forgot"
                          >
                            Forgot Your Password?
                          </a>
                        </div>

                        {loginStatus === 'loading' ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center'
                            }}
                          >
                            <Spinner />
                          </div>
                        ) : (
                          <button
                            class="account__login--btn primary__btn"
                            type="submit"
                          >
                            Login
                          </button>
                        )}
                      </form>
                      <div class="account__login--divide">
                        <span class="account__login--divide__text">OR</span>
                      </div>
                      <div class="account__social d-flex justify-content-center mb-15">
                        <a
                          class="account__social--link facebook"
                          target="_blank"
                          href="https://www.facebook.com/"
                        >
                          Facebook
                        </a>
                        <a
                          class="account__social--link google"
                          target="_blank"
                          href="https://www.instagram.com/"
                        >
                          Instagram
                        </a>
                        <a
                          class="account__social--link twitter"
                          target="_blank"
                          href="https://twitter.com/"
                        >
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Login section */}

                {/* Start Signup Section */}
                <div class="col">
                  <div class="account__login register">
                    <div class="account__login--header mb-25">
                      <h2 class="account__login--header__title h3 mb-10">
                        Create an Account
                      </h2>
                      <p class="account__login--header__desc">
                        Register here if you are a new user
                      </p>
                    </div>
                    <div class="account__login--inner">
                      <form class="form--signup" onSubmit={signup}>
                        <input
                          class="account__login--input signup--name"
                          placeholder="Name"
                          type="text"
                          value={signupName}
                          onChange={e => setSignupName(e.target.value)}
                          required
                        />
                        <input
                          class="account__login--input signup--email"
                          placeholder="Email Address"
                          type="email"
                          value={signupEmail}
                          onChange={e => setSignupEmail(e.target.value)}
                          required
                        />
                        <input
                          class="account__login--input signup--password"
                          type="password"
                          placeholder={'Password'}
                          value={signupPassword}
                          onChange={e => setSignupPassword(e.target.value)}
                          required
                        />
                        <input
                          class="account__login--input signup--password-confirm"
                          placeholder="Confirm Password"
                          type="password"
                          value={signupPasswordConfirm}
                          onChange={e =>
                            setSignupPasswordConfirm(e.target.value)
                          }
                          required
                        />

                        {signupStatus === 'loading' ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center'
                            }}
                          >
                            <Spinner />
                          </div>
                        ) : (
                          <button
                            class="account__login--btn primary__btn mb-10"
                            type="submit"
                          >
                            Submit & Register
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Shipping />
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SignupLogin;
