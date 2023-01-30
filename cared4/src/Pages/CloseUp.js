import React from "react";
import NavBar from "../Components/NavBar";

const CloseUp = () => {
    return (
      <div className="container is-max-desktop">
        <section className="section">
          <NavBar />
        </section>
        <section className="section">
          <div className="columns">
            <div className="column">
              <img src="" alt="sicknessImg" className="sickness-image" />
            </div>
            <div className="column">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <label class="label">Illness Name</label>
                      <p>This is eventually going to be filled with lots of information about the illness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default CloseUp;