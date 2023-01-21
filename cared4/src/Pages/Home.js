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
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Middle box</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="Placeholder"
                      />
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Middle box</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="Placeholder"
                      />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Middle box</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
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
          <div class="homeButtons">
            <button className='button is-large is-primary is-rounded button-spacing homeButton'>Diagnose Yourself Now!</button>
            <button className='button is-large is-primary is-rounded button-spacing homeButton'>Want More Accurate Results?<br/> Create an Account!</button>
            <button className='button is-large is-primary is-rounded button-spacing homeButton'>Feeling a Little Ill?<br/> See Most Common Illnesses</button>
          </div>
        </section>
      </div>
    </div>
  );
};
  
export default Home;