import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import NavBarSI from "../Components/Navbars/NavBarSI";
import AboutUs from "../Components/AboutUs";
import DevCards from "../Components/DeveloperCards";

/**
 * About us page that displays some content about the developer
 * @returns Returns the about us page
 */
const About = () => {
    //Document the tab
    document.title = "Cared4 - About";

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
      <div className="page">
        <section className="section">
          {chooseNav()}
        </section>
        <section className="section">
          <DevCards />
        </section>
        <section className="section content-squish">
          <AboutUs />
        </section>
      </div>
    );
};
  
export default About;