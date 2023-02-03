import React from "react";
import NavBar from "../Components/NavBar";
import AccountDetails from "../Components/AccountDetails";

const Account = () => {
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