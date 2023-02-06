import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

const SBNForm = () => {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Search By Name</p>
            </div>
          </div>

          <div className="content">
            <div className="field">
              <label className="label">Please enter the name of the illness</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Illness Name"
                />
              </div>
            </div>

            <div className="customCard">
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SBNForm;