import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

const ResultCard = () => {
    return (
      <div>
        <div className="card">
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
                <p className="title is-4">Common Illness Name</p>
                <p className="subtitle is-6">Scientific Illness Name</p>
              </div>
            </div>

            <div className="content">
              <p>Symptom list</p>
            </div>
            <div className="content">
              <a className="button is-primary" href="/closeup">View</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResultCard;