import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import headshot from '../Assets/img/Almas_Zachary_Headshot.png'

const DevCards = () => {
    return (
      <div className="profile-cards cardStyles">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div class="columns">
                  <div class="column">
                    <img src={headshot} alt="headshot" className="headshot-style" />
                  </div>
                  <div class="column">
                    <label class="label">Zachary Almas</label>
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