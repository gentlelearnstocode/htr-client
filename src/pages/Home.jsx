import React, { useEffect, useState } from 'react';

import '../sass/main.scss';
import { homeLogo, homeImg1, homeImg2, homeImg3 } from '../assets/img';
import { TourCard } from '../components';

const Home = () => {
  const [popularTours, setPopularTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const homeInitialFetch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3001/api/v2/roads/top-3-cheap');
      if (response.ok) {
        const data = await response.json();
        setPopularTours(data.data.roads);
        setIsLoading(false);
      } else {
        throw new Error('Could not fetch data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homeInitialFetch();
  }, []);

  console.log(popularTours);
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src={homeLogo} alt="logo" />
        </div>
        <div className="header__box">
          k
          <h1 className="heading-primary">
            <span className="heading-primary--main">Explore</span>
            <span className="heading-primary--sub">Nature in your hand</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Start Discover
          </a>
        </div>
      </header>
      <main>
        {/* about section */}
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-8">
            <h2 className="heading-secondary">Exciting tour for adventurous people</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary">You are going to fall in love with the nature</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste neque repellat suscipit
                reprehenderit laboriosam, doloribus, temporibus sequi soluta blanditiis ex vel quae possimus deserunt
                ipsam dolor et sed eius?
              </p>
              <h3 className="heading-tertiary">You are going to fall in love with the tour</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste neque repellat suscipit
                reprehenderit laboriosam, doloribus, temporibus sequi soluta blanditiis ex vel quae possimus deserunt
                ipsam dolor et sed eius?
              </p>
              <a href="#" className="btn-text">
                Click here &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img src={homeImg1} alt="halong" className="composition__photo composition__photo--p1" />
                <img src={homeImg2} alt="mucangchai" className="composition__photo composition__photo--p2" />
                <img src={homeImg3} alt="mientay" className="composition__photo composition__photo--p3" />
              </div>
            </div>
          </div>
        </section>
        {/* feature section */}
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary">Explore the world</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse temporibus rem ipsum
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary">Navigate to nature</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse temporibus rem ipsum
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary">See the best places</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse temporibus rem ipsum
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary">Memories, Memories, Memories</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse temporibus rem ipsum adsadw
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* display tour section */}
        <section className="section-tours">
          <div className="u-center-text">
            <h2 className="heading-secondary">Most popular tours</h2>
            <div className="row">
              {popularTours.length !== 0 &&
                popularTours.map((tour) => {
                  const { imageCover, name, _id } = tour;
                  return <TourCard key={_id} src={imageCover} name={name} />;
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
