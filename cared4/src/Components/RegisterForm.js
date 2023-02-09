import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import { useNavigate } from "react-router-dom";
import dataSource from "../dataSource.js";

const RegisterForm = () => {
    let progress = 0;

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newBirthday, setNewBirthday] = useState('');
    const [newSex, setNewSex] = useState('');
    const [newPreviousConditions, setNewPreviousConditions] = useState('');
    const [newImage, setNewImage] = useState('');
    const navigate = useNavigate();
    const API_KEY = process.env.REACT_APP_API_KEY

    const updateFirstName = (event) => {
      setNewFirstName(event.target.value);
    };
    const updateLastName = (event) => {
      setNewLastName(event.target.value);
    };
    const updateEmail = (event) => {
      setNewEmail(event.target.value);
    };
    const updatePassword = (event) => {
      setNewPassword(event.target.value);
    };
    const updateBirthday = (event) => {
      setNewBirthday(event.target.value);
    }
    const updateSex = (event) => {
      setNewSex(event.target.value);
    };
    const updateConditions = (event) => {
      setNewPreviousConditions(event.target.value);
    };
    const updateImage = (event) => {
      setNewImage(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      console.log("submit");
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
  
      saveUser(newUser);
    };
  
    const saveUser = async (user) => {
      let response;

      response = await dataSource.post("/users", user);

      //TODO remove the log statements after we dont need them anymore
      console.log(response);
      console.log(response.data);
      navigate("/");
    };  

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