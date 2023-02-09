import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'
import logo from '../../Assets/OriginalLogos/Cared4-logos_transparent.png'
import dataSource from "../../dataSource";

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();
    const API_KEY = process.env.REACT_APP_API_KEY

    const updateEmail = (event) => {
      setUserEmail(event.target.value);
    };
    const updatePassword = (event) => {
      setUserPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      console.log("submit");
      const User = {
        email: userEmail,
        password: userPassword,
        key: API_KEY
      };
  
      saveUser(User);
    };
  
    const saveUser = async (user) => {
      let response;

      response = await dataSource.post("/users/login", user);

      //TODO remove the log statements after we dont need them anymore
      console.log(response);
      console.log(response.data);
      console.log(response.status);
      if (response.status === 200)
      {
        navigate("/");
      } else if (response.status === 201) {
        //Incorrect Password
        navigate({
            pathname: "/login",
            search: createSearchParams({
              id: "passFail"
            }).toString()
        });
      } else {
        //User not found
        navigate({
            pathname: "/login",
            search: createSearchParams({
              id: "emailFail"
            }).toString()
        });
      }
    };  

    return (
      <div className="container is-max-desktop">
        <section>
          <div className="cared4Logo">
            <img src={logo} alt="logo" />
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
                  <button className="button is-primary" type="submit">Login</button>
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