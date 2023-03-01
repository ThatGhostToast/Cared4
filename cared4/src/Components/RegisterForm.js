import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "../dataSource.js";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const RegisterForm = () => {
    // Progress bar showing the user how complete registration is
    //const [progress, setProgress] = useState(0);
    let progress = 0;

    // Variable used to hold the new user's first name
    const [newFirstName, setNewFirstName] = useState('');
    // Variable used to hold the new user's last name
    const [newLastName, setNewLastName] = useState('');
    // Variable used to hold the new user's email
    const [newEmail, setNewEmail] = useState('');
    // Variable used to hold the new user's password
    const [newPassword, setNewPassword] = useState('');
    // Variable used to hold the new user's birthday
    const [newBirthday, setNewBirthday] = useState('');
    // Variable used to hold the new user's sex
    const [newSex, setNewSex] = useState('');
    // Variable used to hold the new user's previous conditions
    const [newPreviousConditions, setNewPreviousConditions] = useState('');
    // Variable used to hold the new user's profile picture
    const [newImage, setNewImage] = useState('');
    // Key used to authenticate API access
    const API_KEY = process.env.REACT_APP_API_KEY
    // Navigational tool used to navigate the user and their data
    const navigate = useNavigate();

    // Function used to update the 'newFirstName' variable
    const updateFirstName = (event) => {
      setNewFirstName(event.target.value);
    };
    // Function used to update the 'newLastName' variable
    const updateLastName = (event) => {
      setNewLastName(event.target.value);
    };
    // Function used to update the 'newEmail' variable
    const updateEmail = (event) => {
      setNewEmail(event.target.value);
    };
    // Function used to update the 'newPassword' variable
    const updatePassword = (event) => {
      setNewPassword(event.target.value);
    };
    // Function used to update the 'newBirthday' variable
    const updateBirthday = (event) => {
      setNewBirthday(event.target.value);
    };
    // Function used to update the 'newSex' variable
    const updateSex = (event) => {
      setNewSex(event.target.value);
    };
    // Function used to update the 'newPreviousConditions' variable
    const updateConditions = (event) => {
      setNewPreviousConditions(event.target.value);
    };
    // Function used to update the 'newImage' variable
    const updateImage = (event) => {
      setNewImage(event.target.value);
    };
  
    // Function used to handle form submission
    const handleFormSubmit = (event) => {
      //Prevents the defaul action so we can use our own submit function
      event.preventDefault();
  
      //Logging that the form was submitted
      console.log("submit");

      //Creating the new user object to be sent to the API
      const newUser = {
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        password: newPassword,
        birthday: newBirthday,
        sex: newSex,
        conditions: newPreviousConditions,
        image: newImage,
        key: API_KEY
      };
  
      //Calling saveUser to send the information to the database
      saveUser(newUser);
    };
  
    // Function used to call the API
    const saveUser = async (user) => {
      //Calling the API and saving the response 
      let response = await dataSource.post("/users", user);

      //Logging the registration status
      console.log("REGISTRATION STATUS: " + response.status);
      //Navigate back to the homepage
      navigate("/");
    };  

    //Return the register form
    return (
      <div className="container is-max-desktop">
        <progress className="progress is-primary" value={progress} max="100" />
        <form onSubmit={handleFormSubmit}>
          <section>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="First Name"
                  id="firstNameInput"
                  onChange={updateFirstName}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Last Name"
                  id="lastNameInput"
                  onChange={updateLastName}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="email"
                  placeholder="Email"
                  id="emailInput"
                  onChange={updateEmail}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="email"
                  placeholder="Confirm Email"
                  id="confirmEmailInput"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="password"
                  placeholder="Password"
                  id="passwordInput"
                  onChange={updatePassword}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPasswordInput"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Birthday</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="date"
                  placeholder="Birthday"
                  id="birthdayInput"
                  onChange={updateBirthday}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Sex</label>
              <div className="control">
                <div className="select is-primary is-medium">
                  <select onChange={updateSex}>
                    <option selected="true" disabled>
                      Please select your sex
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Previous Medical Conditions</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Please input any past medical issues seperated with a comma"
                  id="conditionsInput"
                  onChange={updateConditions}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Profile Picture</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="file"
                  accept="image/*"
                  id="imageInput"
                  onChange={updateImage}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />I agree to the{" "}
                  <a href="/terms">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit">Submit</button>
              </div>
              <div className="control">
                <a className="button is-primary is-outlined" href="/login">
                  Login
                </a>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
};

export default RegisterForm;