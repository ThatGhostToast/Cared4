import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const AccountDetails = () => {
    let userImage = "https://bulma.io/images/placeholders/128x128.png";

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
                  <strong>First Name</strong>
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
                  <strong>Last Name</strong>
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
                  <strong href="/">Email</strong>
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
                  <strong href="/">Password</strong>
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
                  <strong href="/">Birthday</strong>
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
                  <strong href="/">Sex</strong>
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
                  <strong href="/">Previous Conditions</strong>
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
        <a className="button is-primary logout" href="/">Logout</a>
      </div>
    );
};

export default AccountDetails;