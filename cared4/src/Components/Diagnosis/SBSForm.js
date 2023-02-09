import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../../dataSource";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

const SBSForm = () => {
    const [illnessSymptoms, setIllnessSymptoms] = useState('');
    const navigate = useNavigate();

    const updateSymptoms = (event) => {
      setIllnessSymptoms(event.target.value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();

      console.log("submit");
      const symptoms = illnessSymptoms;

      saveIllness(symptoms);
    };

    const saveIllness = async (symptoms) => {
      let response;

      response = await dataSource.get("/sicknesses/search/symptoms/" + symptoms);

      console.log(response.data);

      if (response.status === 200) {
        navigate("/results");
      } else if (response.status === 201) {
        //Incorrect Password
        navigate({
          pathname: "/search",
          search: createSearchParams({
            id: "noFound",
          }).toString(),
        });
      }
    };

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Search By Symptoms</p>
            </div>
          </div>

          <div className="content">
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <label className="label">Please enter your symptoms</label>
                <div className="control">
                  <input
                    className="input is-primary is-medium"
                    type="text"
                    placeholder="Symptoms"
                    onChange={updateSymptoms}
                  />
                </div>
              </div>

              <div className="customCard">
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-primary" type="submit">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SBSForm;