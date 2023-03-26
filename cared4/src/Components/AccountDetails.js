import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

/**
 * Component used to hold user account details and display them to the user
 * @returns Returns the users formatted information 
 */
const AccountDetails = () => {
    //Navigational tool used to get around the application
    const navigate = useNavigate();

    //Getting the user data from the session
    const user = JSON.parse(sessionStorage.getItem('loggedInUserEmail'));

    //Setting the profile picture to this default image (NOTE: THIS WILL BE REPLACED WITH A USER'S PROFILE PICTURE)
    let userImage = "https://bulma.io/images/placeholders/128x128.png";

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

    //Return the users formatted information
    return (
      <div className="container is-max-desktop custom-container">
        <section className="section">
          <figure className="image is-128x128 profile-picture">
            <img src={userImage} alt="profilePicture" />
          </figure>
        </section>
        <section className="section account-details">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>{user.firstName}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.lastName}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a href="/">Edit</a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.email}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="/"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.password}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="/"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.birthday}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="/"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.sex}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="/"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{user.conditions}</strong>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="/"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <button className="button is-danger logout" onClick={logoutHandler}>Logout</button>
      </div>
    );
};

export default AccountDetails;