import React from 'react';
import NavBar from '../Components/Navbars/NavBar';
import LoginForm from '../Components/Login/LoginForm';
import LoginFormPassFail from '../Components/Login/LoginFormPassFail';
import LoginFormEmailFail from '../Components/Login/LoginFormEmailFail';
import { useSearchParams } from "react-router-dom";
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

const Login = () => {
    const [searchparams] = useSearchParams();

    if (searchparams.get("id") === "emailFail"){
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
    } else if (searchparams.get("id") === 'passFail') {
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
    } else {
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