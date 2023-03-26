import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import logo from '../../Assets/Logos/ColoredLogo.png'
import dataSource from "../../dataSource";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Login form component to allow the user to sign in
 * @returns Returns the login form
 */
const LoginForm = () => {
  // User email being used to find the user in the database
  const [userEmail, setUserEmail] = useState("");
  // User password being used to validate the user
  const [userPassword, setUserPassword] = useState("");
  // Key used to authenticate a user accessing the API
  const API_KEY = process.env.REACT_APP_API_KEY;
  // Navigational tool used to navigate the user and their data
  const navigate = useNavigate();

  // Function to update the variable 'userEmail' when a user inputs a value in the form
  const updateEmail = (event) => {
    setUserEmail(event.target.value);
  };
  // Function to update the variable 'userPassword' when a user inputs a value in the form
  const updatePassword = (event) => {
    setUserPassword(event.target.value);
  };

  // Function used to handle the login form being submitted
  const handleFormSubmit = (event) => {
    //Prevents the defaul action so we can use our own submit function
    event.preventDefault();

    // Console log to ensure the form submitted
    console.log("submit");

    // Creating a User object to be sent to the API
    const User = {
      email: userEmail,
      password: userPassword,
      key: API_KEY,
    };

    //Calling saveUser which will call the api
    saveUser(User);
  };

  // Function used to call the API
  const saveUser = async (user) => {
    //Calling the API and saving the response
    let response = await dataSource.post("/users/login", user);

    //If the API responds with a status of 200 then the process was a success and the application can continue
    if (response.status === 200) {
      //Saving the logged in user's email
      var apiResponse = JSON.stringify(response.data);
      
      //Setting the email to a session variable
      sessionStorage.setItem('loggedInUserEmail', apiResponse);

      //Navigate back to the homepage
      navigate("/");
      //If the API responds with a status of 201 then the user entered the wrong password
    } else if (response.status === 201) {
      //Navigate back to the login page with a error message
      navigate({
        pathname: "/login",
        search: createSearchParams({
          id: "passFail",
        }).toString(),
      });
      //If the API responds with another status then the user entered the wrong email
    } else {
      //Navigate back to the login page with a error message
      navigate({
        pathname: "/login",
        search: createSearchParams({
          id: "emailFail",
        }).toString(),
      });
    }
  };

  //Return the login form
  return (
    <div className="container is-max-desktop">
      <section>
        <div className="cared4Logo">
          <img src={logo} alt="logo" className="loginLogoImage"/>
        </div>
      </section>
      <form onSubmit={handleFormSubmit}>
        <section className="section">
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-primary is-medium"
                type="email"
                placeholder="Email"
                onChange={updateEmail}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-primary is-medium"
                type="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="customCard">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Login
                </button>
              </div>
              <div className="control">
                <a className="button is-primary is-outlined" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default LoginForm;