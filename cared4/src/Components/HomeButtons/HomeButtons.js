import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Component that displays the buttons on the home page
 * @returns Returns the buttons displayed on the home page
 */
const HomeButtons = () => {
    //Return the buttons
    return (
        <div className="homeButtons">
        <a
          href="/search"
          className="button is-large is-primary is-rounded button-spacing homeButton"
        >
          Diagnose Yourself Now!
        </a>
        <a
          className="button is-large is-primary is-rounded button-spacing homeButton"
          href="/register"
        >
          Want More Accurate Results?
          <br /> Create an Account!
        </a>
        <a
          className="button is-large is-primary is-rounded button-spacing homeButton"
          href="/results"
        >
          Feeling a Little Ill?
          <br /> See Most Common Illnesses
        </a>
      </div>
    );
};

export default HomeButtons;