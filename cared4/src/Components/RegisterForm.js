import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const RegisterForm = () => {
    let progress = 0;

    return (
      <div className="container is-max-desktop">
        <progress class="progress is-primary" value={progress} max="100">15%</progress>
        <section>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="text"
                placeholder="First Name"
                id="firstNameInput"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="text"
                placeholder="Last Name"
                id="lastNameInput"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="email"
                placeholder="Email"
                id="emailInput"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="email"
                placeholder="Confirm Email"
                id="confirmEmailInput"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="password"
                placeholder="Password"
                id="passwordInput"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="password"
                placeholder="Confirm Password"
                id="confirmPasswordInput"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Birthday</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="date"
                placeholder="Birthday"
                id="birthdayInput"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Sex</label>
            <div class="control">
              <div class="select is-primary is-medium">
                <select>
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

          <div class="field">
            <label class="label">Previous Medical Conditions</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="text"
                placeholder="Please input any past medical issues seperated with a comma"
                id="conditionsInput"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Profile Picture</label>
            <div class="control">
              <input
                class="input is-primary is-medium"
                type="file" accept="image/*"
                id="imageInput"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />I agree to the{" "}
                <a href="/terms">terms and conditions</a>
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