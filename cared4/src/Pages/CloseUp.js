import React from "react";
import NavBar from "../Components/Navbars/NavBar";

/**
 * Closeup page that displays illness information
 * @returns Returns the closeup page
 */
const CloseUp = () => {
    //Return the page created with components
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
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <label className="label">Illness Name</label>
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