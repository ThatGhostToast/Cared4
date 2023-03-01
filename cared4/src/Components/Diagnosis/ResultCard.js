import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Card used to display basic illness details. A user can see more details if they click the button at the bottom of the card
 * TODO take in illness information
 * @returns Returns a card of data
 */
const ResultCard = (props) => {
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
                <p className="title is-4">{props.commonName}</p>
                <p className="subtitle is-6">{props.name}</p>
              </div>
            </div>

            <div className="content">
              <p><strong>Commonly Affects: </strong>{props.commonTargets}</p>
              <p><strong>Symptoms: </strong>{props.symptoms}</p>
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