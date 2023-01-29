import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const SBNForm = () => {
    return (
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Search By Name</p>
            </div>
          </div>

          <div class="content">
            <div class="field">
              <label class="label">Please enter the name of the illness</label>
              <div class="control">
                <input
                  class="input is-primary is-medium"
                  type="text"
                  placeholder="Illness Name"
                />
              </div>
            </div>

            <div className="customCard">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SBNForm;