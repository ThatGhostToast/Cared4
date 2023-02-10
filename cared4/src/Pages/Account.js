import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import AccountDetails from "../Components/AccountDetails";

/**
 * Account page that displays user information
 * @returns Returns the account page
 */
const Account = () => {
    //Return the page created with components
    return (
      <div>
        <section className="section">
          <NavBar />
        </section>
        <section>
          <AccountDetails />
        </section>
      </div>
    );
};

export default Account;