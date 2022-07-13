import React from 'react';

import '../sass/main.scss';
import { homeLogo } from '../assets/img';

const Home = () => {
  return (
    <>
      <body>
        <header className="header">
          <div className="header__logo-box">
            <img className="header__logo" src={homeLogo} alt="logo" />
          </div>
          <div className="header__box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Explore</span>
              <span className="heading-primary--sub">Nature in your hand</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">
              Start Discover
            </a>
          </div>
        </header>
      </body>
    </>
  );
};

export default Home;
