import React from 'react';
import NavBar from '../Components/Navbars/NavBar';
import NavBarSI from '../Components/Navbars/NavBarSI';
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

/**
 * Terms and conditions page that displays the terms of creating an account with Cared4
 * @returns Returns the account page
 */
const Terms = () => {
    //Document the tab
    document.title = "Cared4 - Terms";

    //Checking to see what navbar needs to be displayed
    var loggedIn = sessionStorage.getItem('loggedInUserEmail');
    const chooseNav = () => {
      if (!loggedIn){
        return (<NavBar />)
      } else {
        return (<NavBarSI />)
      }
    };

    //Return the page created with components
    return (
        <div>
            <section className="section">
                {chooseNav()}
            </section>
            <section className="section">
                <p>
                    Hello
                </p>
            </section>
        </div>
    );
};

export default Terms;