import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import NavBarSI from "../Components/Navbars/NavBarSI";
import { useLocation } from "react-router-dom";

/**
 * Closeup page that displays illness information
 * @returns Returns the closeup page
 */
const CloseUp = () => {
    //Document the tab
    document.title = "Cared4 - Close Up";

    //Getting the illness information of the selected illness
    const {state} = useLocation();
    //Saving the illness data into usable variables
    const {id, commonName, name, symptoms, commonTargets, description, rarity, severity, requirements, treatment, image} = state;

    //Logging the ID of the illness
    console.log("Illness ID: " + id);

    //Checking to see what navbar needs to be displayed
    var loggedIn = sessionStorage.getItem('loggedInUserEmail');
    const chooseNav = () => {
      if (!loggedIn){
        return (<NavBar />)
      } else {
        return (<NavBarSI />)
      }
    };

    //Return the page created with components
    return (
      <div className="container is-max-desktop">
        <section className="section">
          {chooseNav()}
        </section>
        <section className="section content-squish content-squish-bottom">
          <div className="columns">
            <div className="column">
              <img src={image} alt="sicknessImg" className="sickness-image" />
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <label className="label">{commonName}</label>
                      <label className="label">{name}</label>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section content-squish content-squish-bottom">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <h1><strong>Rarity: </strong>{rarity}</h1>
                      <h1><strong>Severity: </strong>{severity}</h1>
                      <h1><strong>Requirements: </strong>{requirements}</h1>
                      <h1><strong>Commonly Affects: </strong>{commonTargets}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p><strong>Symptoms: </strong>{symptoms}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section content-squish content-squish-bottom">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <label className="label">Treatment</label>
                      <p>{treatment}</p>
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