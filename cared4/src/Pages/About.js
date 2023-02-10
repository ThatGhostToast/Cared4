import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import AboutUs from "../Components/AboutUs";
import DevCards from "../Components/DeveloperCards";

/**
 * About us page that displays some content about the developer
 * @returns Returns the about us page
 */
const About = () => {
    //Return the page created with components
    return (
      <div className="page">
        <section className="section">
          <NavBar />
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