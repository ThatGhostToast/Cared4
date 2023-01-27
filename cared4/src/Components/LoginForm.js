import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from '../Assets/OriginalLogos/Cared4-logos_transparent.png'

const LoginForm = () => {
    return (
      <div className="container is-max-desktop">
        <section>
          <div className="cared4Logo">
            <img src={logo} alt="logo" />
          </div>
        </section>
        <section className="section">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-primary is-medium"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-primary is-medium"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="customCard">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary">Login</button>
              </div>
              <div class="control">
                <a class="button is-primary is-outlined" href="/register">Register</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default LoginForm;