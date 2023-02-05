import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'
  
const Home = () => {
  return (
    <div className="page">
      <section className="section">
        <div>
          <NavBar />
        </div>
      </section>
      <div className="content">
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Middle box</p>
                    <p className="subtitle">With an image</p>
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="Placeholder"
                      />
                    </figure>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Middle box</p>
                    <p className="subtitle">With an image</p>
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="Placeholder"
                      />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Middle box</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt="Placeholder"
                  />
                </figure>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="homeButtons">
            <a href="/search" className="button is-large is-primary is-rounded button-spacing homeButton">
              Diagnose Yourself Now!
            </a>
            <a className="button is-large is-primary is-rounded button-spacing homeButton" href="/register">
              Want More Accurate Results?
              <br /> Create an Account!
            </a>
            <button className="button is-large is-primary is-rounded button-spacing homeButton">
              Feeling a Little Ill?
              <br /> See Most Common Illnesses
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
  
export default Home;