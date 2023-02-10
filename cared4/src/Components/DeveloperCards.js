import React from "react";
import headshot from '../Assets/img/Almas_Zachary_Headshot.png'
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

/**
 * Card used to display the developer and their intro
 * @returns Returns a card displaying the developer
 */
const DevCards = () => {
    //Return the dev card
    return (
      <div className="profile-cards cardStyles">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="columns">
                  <div className="column">
                    <img src={headshot} alt="headshot" className="headshot-style" />
                  </div>
                  <div className="column">
                    <label className="label">Zachary Almas</label>
                    <p>Some intro here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DevCards;