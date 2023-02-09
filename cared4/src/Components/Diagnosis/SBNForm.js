import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../../dataSource";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

const SBNForm = () => {
    const [illnessName, setIllnessName] = useState('');
    const navigate = useNavigate();

    const updateName = (event) => {
      setIllnessName(event.target.value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      console.log("submit");
      const name = illnessName;
  
      saveIllness(name);
    };

    const saveIllness = async (name) => {
      let response;

      console.log(name);

      response = await dataSource.get("/sicknesses/search/name/" + name);

      console.log(response.data);

      if (response.status === 200)
      {
        navigate("/results");
      } else if (response.status === 201) {
        //Incorrect Password
        navigate({
            pathname: "/search",
            search: createSearchParams({
              id: "noFound"
            }).toString()
        });
      }
    };  

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Search By Name</p>
            </div>
          </div>

          <div className="content">
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <label className="label">Please enter the name of the illness</label>
                <div className="control">
                  <input
                    className="input is-primary is-medium"
                    type="text"
                    placeholder="Illness Name"
                    onChange={updateName}
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

export default SBNForm;