import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from '../Assets/OriginalLogos/Cared4-logos_transparent.png'

const NavBar = () => {
    return (
        <nav className="navbar is-fixed-top backdrop" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} alt="Logo"/>
                </a>

                <a href="https://google.com" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu navBar">
                <div className="navBar-link">
                    <a className="navbar-item" href="/about">
                        Search for an Illness
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary" href="https://google.com">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-primary is-outlined" href="https://google.com">
                            Log in
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;