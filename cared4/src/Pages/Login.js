import React from 'react';
import NavBar from '../Components/Navbars/NavBar';
import LoginForm from '../Components/Login/LoginForm';
import LoginFormPassFail from '../Components/Login/LoginFormPassFail';
import LoginFormEmailFail from '../Components/Login/LoginFormEmailFail';
import { useSearchParams } from "react-router-dom";
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

/**
 * Login form page that displays the login form
 * @returns Returns the login form page
 */
const Login = () => {
    //Saving the error (if there is one) that will determine which form is displayed
    const [searchparams] = useSearchParams();

    // If the user has tried to sign in and failed, and was redirected with the emailFail status, this form with the appropriate error will be displayed
    if (searchparams.get("id") === "emailFail"){
        //Return the page created with components
        return (
            <div>
                <section className="section">
                    <NavBar/>
                </section>
                <section className="section">
                    <LoginFormEmailFail />
                </section>
            </div>
        );
    // If the user has tried to sign in and failed, and was redirected with the passFail status, this form with the appropriate error will be displayed
    } else if (searchparams.get("id") === 'passFail') {
        //Return the page created with components
        return (
            <div>
                <section className="section">
                    <NavBar/>
                </section>
                <section className="section">
                    <LoginFormPassFail />
                </section>
            </div>
        );
    // If there are no errors then display the the regular form
    } else {
        //Return the page created with components
        return (
            <div>
                <section className="section">
                    <NavBar/>
                </section>
                <section className="section">
                    <LoginForm />
                </section>
            </div>
        );
    }

};

export default Login;