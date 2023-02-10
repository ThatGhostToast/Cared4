import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../../dataSource";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Form used to display a form the user can use to search the illness database by illness name
 * @returns Returns the search by name form
 */
const SBNForm = () => {
    // Illness name being used to search the database
    const [illnessName, setIllnessName] = useState('');
    // Navigational tool used to navigate the user and their data
    const navigate = useNavigate();

    // Function to update the variable 'illnessName' when a user inputs a value in the form 
    const updateName = (event) => {
      setIllnessName(event.target.value);
    };

    // Function used to handle the search form being submitted 
    const handleFormSubmit = (event) => {
      //Prevents the defaul action so we can use our own submit function
      event.preventDefault();
  
      //Console log to ensure the form submitted
      console.log("submit");
  
      //Calling saveIllness which will call the api
      saveIllness(illnessName);
    };

    // Function used to call the API
    const saveIllness = async (name) => {
      //Calling the API and saving the response 
      let response = await dataSource.get("/sicknesses/search/name/" + name);

      //Logging the response for testing purposes NOTE: WILL BE REMOVED IN FULL RELEASE
      //TODO remove this when application is fully operational
      console.log(response.data);

      //If the API responds with a status of 200 then the process was a success and the application can continue
      if (response.status === 200)
      {
        //Navigate to the results of the search
        navigate("/results");
      //If the API responds with a status of 201 then no results were found from the search
      } else if (response.status === 201) {
        //Navigate back to the search form with an error to display.
        navigate({
            pathname: "/search",
            search: createSearchParams({
              id: "noFound"
            }).toString()
        });
      }
    };  

    //Returns the search by name form
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