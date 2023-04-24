import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../../dataSource";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Form used to display a form the user can use to search the illness database by symptoms
 * @returns Returns the search by symptoms form
 */
const SBSForm = () => {
    // Illness symptoms being used to search the database
    const [illnessSymptoms, setIllnessSymptoms] = useState('');

    // Navigational tool used to navigate the user and their data
    const navigate = useNavigate();

    // Function to update the variable 'illnessSymptoms' when a user inputs a value in the form
    const updateSymptoms = (event) => {
      setIllnessSymptoms(event.target.value);
    };

    // Function used to handle the search form being submitted 
    const handleFormSubmit = (event) => {
      //Prevents the defaul action so we can use our own submit function
      event.preventDefault();

      //Console log to ensure the form submitted
      console.log("submit");

      //Calling saveIllness which will call the api
      saveIllness(illnessSymptoms);
    };

    // Function used to call the API
    const saveIllness = async (symptoms) => {
      //Getting the user info
      var loggedIn = JSON.parse(sessionStorage.getItem('loggedInUserEmail'));

      //If else that sends a different request based on if the user is signed in.
      let probResponse;
      if (loggedIn)
      {
        //Calling the API and saving the response 
        console.log("CALLING API");
        probResponse = await dataSource.post("/sicknesses/search/symptoms/" + symptoms, loggedIn);
      } else {
        //Calling the API and saving the response 
        probResponse = await dataSource.post("/sicknesses/search/symptoms/" + symptoms);
      }

      //If the API responds with a status of 200 then the process was a success and the application can continue
      if (probResponse.status === 200) {
        var probIllnessData = JSON.stringify(probResponse.data);
        
        sessionStorage.setItem('probIllness', probIllnessData);
        //Navigate to the results of the search
        navigate("/results");
      //If the API responds with a status of 201 then no results were found from the search
      } else if (probResponse.status === 201) {
        //Navigate back to the search form with an error to display.
        navigate({
          pathname: "/search",
          search: createSearchParams({
            id: "noFound",
          }).toString(),
        });
      }
    };

    //Returns the search by symptoms form
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