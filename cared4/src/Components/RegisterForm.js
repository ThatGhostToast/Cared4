import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const RegisterForm = () => {
    return (
      <div className="container is-max-desktop">
        <section>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

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
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-primary is-medium"
                type="email"
                placeholder="Confirm Email"
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

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-primary is-medium"
                type="password"
                placeholder="Confirm Password"
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
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="/">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <a class="button is-primary is-outlined" href="/login">
                Login
              </a>
            </div>
          </div>
        </section>
      </div>
    );
};

export default RegisterForm;