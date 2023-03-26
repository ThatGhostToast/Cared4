import React from "react";
import NavBarSI from "../Components/Navbars/NavBarSI";
import AccountDetails from "../Components/AccountDetails";

/**
 * Account page that displays user information
 * @returns Returns the account page
 */
const Account = () => {
    //Document the tab
    document.title = "Cared4 - Account";

    //Return the page created with components
    return (
      <div>
        <section className="section">
          <NavBarSI />
        </section>
        <section>
          <AccountDetails />
        </section>
      </div>
    );
};

export default Account;