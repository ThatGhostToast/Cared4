import React from "react";
import logo from '../../Assets/Logos/ColoredLogoMark.png'
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Navbar for when the user is signed in
 * @returns Returns the navbar
 */
const NavBarSI = () => {
    return (
      <nav
        className="navbar is-fixed-top backdrop"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Logo" />
          </a>

          <a
            href="https://google.com"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu navBar">
          <div className="navBar-link">
            <a className="button is-primary is-inverted" href="/search">
              Search for an Illness
            </a>
          </div>
          <div className="navBar-link">
            <a className="button is-primary is-inverted" href="/about">
              About Us
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/account">
                  Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBarSI;