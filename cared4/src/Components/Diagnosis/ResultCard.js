import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

const ResultCard = () => {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholderimage"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholderimage"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a href="/">@bulmaio</a>.<a href="/">#css</a>{" "}
              <a href="/">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResultCard;