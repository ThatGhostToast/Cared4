import React from 'react';
import NavBar from '../Components/Navbars/NavBar';
import RegisterForm from '../Components/RegisterForm'
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

/**
 * Register page that displays the register form
 * @returns Returns the register page
 */
const Register = () => {
    //Return the page created with components
    return (
        <div>
            <section className="section">
                <NavBar/>
            </section>
            <section className="section">
                <RegisterForm />
            </section>
        </div>
    );
};

export default Register;