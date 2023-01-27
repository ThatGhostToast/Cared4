import React from 'react';
import NavBar from '../Components/NavBar';
import LoginForm from '../Components/LoginForm';
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'

const Login = () => {
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
};

export default Login;