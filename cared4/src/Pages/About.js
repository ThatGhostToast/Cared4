import React from "react";
import NavBar from "../Components/NavBar";
import AboutUs from "../Components/AboutUs";
import DevCards from "../Components/DeveloperCards";
  
const About = () => {
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