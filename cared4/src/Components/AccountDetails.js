import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadToS3 } from "../s3.js";
import dataSource from "../dataSource.js";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

/**
 * Component used to hold user account details and display them to the user
 * @returns Returns the users formatted information 
 */
const AccountDetails = () => {
    //Getting the user data from the session
    const user = JSON.parse(sessionStorage.getItem('loggedInUserEmail'));

    // Variable used to hold the new user's first name
    const [updatedFirstName, setUpdatedFirstName] = useState(user.firstName);
    // Variable used to hold the new user's last name
    const [updatedLastName, setUpdatedLastName] = useState(user.lastName);
    // Variable used to hold the new user's email
    const [updatedEmail, setUpdatedEmail] = useState(user.email);
    // Variable used to hold the new user's password
    const [updatedPassword, setUpdatedPassword] = useState(user.password);
    // Variable used to hold the new user's birthday
    const [updatedBirthday, setUpdatedBirthday] = useState(user.birthday);
    // Variable used to hold the new user's sex
    const [updatedSex, setUpdatedSex] = useState(user.sex);
    // Variable used to hold the new user's previous conditions
    const [updatedPreviousConditions, setUpdatedPreviousConditions] = useState(user.conditions);
    // Variables used to set the user image
    const [userImage, setUserImage] = useState(user.image);
    const [newImageFile, setNewImageFile] = useState(null);
    // Variable used to check if a required input is not included
    const [errors, setErrors] = useState(false);
    // Error messages
    const [fnErrorMessage, setFnErrorMessage] = useState('');
    const [lnErrorMessage, setLnErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passErrorMessage, setPassErrorMessage] = useState('');
    // Key used to authenticate API access
    const API_KEY = process.env.REACT_APP_API_KEY
    //Navigational tool used to get around the application
    const navigate = useNavigate();

    //Variable used to set the readonly status of the firstName input field
    const [firstNameReadonly, setFirstNameReadonly] = useState(true);
    const setFNReadonly = (event) => {
      setFirstNameReadonly(false);
    }
    //Variable used to set the readonly status of the lastName input field
    const [lastNameReadonly, setLastNameReadonly] = useState(true);
    const setLNReadonly = (event) => {
      setLastNameReadonly(false);
    }
    //Variable used to set the readonly status of the email input field
    const [emailReadonly, setEmailReadonly] = useState(true);
    const setMailReadonly = (event) => {
      setEmailReadonly(false);
    }
    //Variable used to set the readonly status of the password input field
    const [passwordReadonly, setPasswordReadonly] = useState(true);
    const setPassReadonly = (event) => {
      setPasswordReadonly(false);
    }
    //Variable used to set the readonly status of the birthday input field
    const [birthdayReadonly, setBirthdayReadonly] = useState(true);
    const setBirthReadonly = (event) => {
      setBirthdayReadonly(false);
    }
    //Variable used to set the readonly status of the sex input field
    const [sexReadonly, setSexReadonly] = useState(true);
    const setGenderReadonly = (event) => {
      setSexReadonly(false);
    }
    //Variable used to set the readonly status of the previous conditions input field
    const [conditionsReadonly, setConditionsReadonly] = useState(true);
    const setPrevConditionsReadonly = (event) => {
      setConditionsReadonly(false);
    }

    //Function used to logout the user
    const logoutHandler = (event) => {
      //Prevents the defaul action so we can use our own submit function
      event.preventDefault();

      //Removing the user details from session storage
      sessionStorage.removeItem('loggedInUserEmail');

      //Writing to the console the status of the logout
      console.log('logged out');

      //Navigate the user back to home
      navigate("/");
    }

    //Function used to check all form inputs to check if there's a value in each
    const validateForm = () => {
      if (
        !fnErrorMessage &&
        !lnErrorMessage &&
        !emailErrorMessage &&
        !passErrorMessage
      ) {
        setErrors(false);
      } else {
        setErrors(true);
      }
    }; 

    // Function used to handle form submission
    const handleFormSubmit = async (event) => {
      //Prevents the defaul action so we can use our own submit function
      event.preventDefault();
  
      //Logging that the form was submitted
      console.log("saved");

      if(newImageFile)
      {
        //Uploading the new image to the S3 bucket
        const response = await uploadToS3(newImageFile);
        console.log('File uploaded successfully:', response);
    
        // Get the pre-signed URL
        setUserImage(response.Location);
        console.log('Image URL:', userImage);
      } else {
        console.log("No new image selected.");
      }

      //Creating the new user object to be sent to the API
      const updatedUser = {
        id: user.id,
        firstName: updatedFirstName,
        lastName: updatedLastName,
        email: updatedEmail,
        password: updatedPassword,
        birthday: updatedBirthday,
        sex: updatedSex,
        conditions: updatedPreviousConditions,
        image: userImage,
        key: API_KEY
      };

      const emailCheck = await dataSource.post("/users/search/foruser/email/", updatedUser);
      console.log(emailCheck.status);
      if (emailCheck.status === 200) {
        //If a user was found with this email then the user needs to enter a new email
        setEmailErrorMessage('Email already taken! Please enter a new email.');
      } else {
        //Calling updateUser to send the information to the database
        updateUser(updatedUser);
      }
    };

    // Function used to call the API
    const updateUser = async (user) => {
      //Calling the API and saving the response 
      let response = await dataSource.put("/users", user);

      //Regenerating the signed in user to reflect changes
      const newInfo = {
        email: user.email,
        password: user.password,
        key: API_KEY,
      }

      if(response.status === 200) {
        //Getting user verification and signing in the user
        let userApiResponse = await dataSource.post("/users/search/user/" + user.id, newInfo);
        var userRespo = JSON.stringify(userApiResponse.data);

        //Registering the new user info so it can be displayed inside the account page
        sessionStorage.setItem('loggedInUserEmail', userRespo);

        //Navigate back to the account page
        navigate(0);
      } else {
        console.log("Uh Oh... Something went wrong! API response: " + response.status);
      }
    };  

    // Function used to update the 'updatedFirstName' variable
    const updateFirstName = (event) => {
      setUpdatedFirstName(event.target.value);

      // check for special characters and numbers
      if (/[^a-zA-Z]/.test(event.target.value)) {
        setFnErrorMessage('Please enter only letters');
      } else {
        setFnErrorMessage('');
        if (event.target.value.length < 1)
        {
          setFnErrorMessage('Please enter a first name');
        } else {
          setFnErrorMessage('');
        }
      }

      validateForm();
    };
    // Function used to update the 'updatedLastName' variable
    const updateLastName = (event) => {
      setUpdatedLastName(event.target.value);

      // check for special characters and numbers
      if (/[^a-zA-Z]/.test(event.target.value)) {
        setLnErrorMessage('Please enter only letters');
      } else {
        setLnErrorMessage('');
        if (event.target.value.length < 1)
        {
          setLnErrorMessage('Please enter a last name');
        } else {
          setLnErrorMessage('');
        }
      }

      validateForm();
    };
    // Function used to update the 'updatedEmail' variable
    const updateEmail = (event) => {
      setUpdatedEmail(event.target.value);
      setEmailErrorMessage('');
      validateForm();
    };
    // Function used to update the 'updatedPassword' variable
    const updatePassword = (event) => {
      setUpdatedPassword(event.target.value);

      // check for semi colons
      if (/;/.test(event.target.value))
      {
        setPassErrorMessage("Please remove the ';' symbol");
      }
      //Check the input length
      if (event.target.value.length < 8)
      {
        setPassErrorMessage('Password must be 8 characters long');
      } else {
        setPassErrorMessage('');
        
        //Check if the password contains at least one special character
        if (!/[!@#$%^&*()_+\-={}[\]:"'<>,.?~`]/.test(event.target.value)) {
          setPassErrorMessage('Please enter at least one special character');
        } else {
          setPassErrorMessage('');
        }
      }

      validateForm();
    };
    // Function used to update the 'updatedBirthday' variable
    const updateBirthday = (event) => {
      setUpdatedBirthday(event.target.value);
    };
    // Function used to update the 'updatedSex' variable
    const updateSex = (event) => {
      setUpdatedSex(event.target.value);
    };
    // Function used to update the 'updatedPreviousConditions' variable
    const updateConditions = (event) => {
      setUpdatedPreviousConditions(event.target.value);
    };
    // Function used to update the 'newImage' variable
    const updateImage = (event) => {
      setNewImageFile(event.target.files[0]);
    };

    //Return the users formatted information
    return (
      <div className="container is-max-desktop custom-container">
        <section className="section">
          <figure className="image is-128x128 profile-picture">
            <img src={userImage} alt="profilePicture" />
          </figure>
        </section>
        <section className="section account-details">
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
                  value={updatedFirstName}
                  onChange={updateFirstName}
                  readOnly={firstNameReadonly}
                />
              </div>
              {fnErrorMessage && <div className="errorMessages">{fnErrorMessage}</div>}
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setFNReadonly}>Edit</button>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Last Name"
                  value={updatedLastName}
                  id="lastNameInput"
                  onChange={updateLastName}
                  readOnly={lastNameReadonly}
                />
              </div>
              {lnErrorMessage && <div className="errorMessages">{lnErrorMessage}</div>}
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setLNReadonly}>Edit</button>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="email"
                  placeholder="Email"
                  id="emailInput"
                  value={updatedEmail}
                  onChange={updateEmail}
                  readOnly={emailReadonly}
                />
              </div>
              {emailErrorMessage && <div className="errorMessages">{emailErrorMessage}</div>}
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setMailReadonly}>Edit</button>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Password"
                  id="passwordInput"
                  value={updatedPassword}
                  onChange={updatePassword}
                  readOnly={passwordReadonly}
                />
              </div>
              {passErrorMessage && <div className="errorMessages">{passErrorMessage}</div>}
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setPassReadonly}>Edit</button>
            </div>
            <div className="field">
              <label className="label">Birthday</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="date"
                  value={updatedBirthday}
                  id="birthdayInput"
                  onChange={updateBirthday}
                  readOnly={birthdayReadonly}
                />
              </div>
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setBirthReadonly}>Edit</button>
            </div>
            <div className="field">
              <label className="label">Sex</label>
              <div className="control">
                <div className="select is-primary is-medium">
                  <select onChange={updateSex} disabled={sexReadonly}>
                    <option selected="true" disabled>
                      {user.sex}
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setGenderReadonly}>Edit</button>
            </div>
            <div className="field">
              <label className="label">Previous Medical Conditions</label>
              <div className="control">
                <input
                  className="input is-primary is-medium"
                  type="text"
                  placeholder="Conditions"
                  id="conditionsInput"
                  value={updatedPreviousConditions}
                  onChange={updateConditions}
                  readOnly={conditionsReadonly}
                />
              </div>
              <button type="button" className="button is-primary is-inverted is-small edit-Buttons" onClick={setPrevConditionsReadonly}>Edit</button>
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
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit" disabled={errors}>Save</button>
              </div>
            </div>
          </section>
        </form>
        </section>
        <button className="button is-danger logout" onClick={logoutHandler}>Logout</button>
      </div>
    );
};

export default AccountDetails;