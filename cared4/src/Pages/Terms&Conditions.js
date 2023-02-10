import React from 'react';
import NavBar from '../Components/Navbars/NavBar';
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

/**
 * Terms and conditions page that displays the terms of creating an account with Cared4
 * @returns Returns the account page
 */
const Terms = () => {
    //Return the page created with components
    return (
        <div>
            <section className="section">
                <NavBar />
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