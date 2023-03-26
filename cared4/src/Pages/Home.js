import React, { useState, useEffect } from "react";
import NavBar from '../Components/Navbars/NavBar';
import NavBarSI from '../Components/Navbars/NavBarSI'
import HomeButtons from "../Components/HomeButtons/HomeButtons";
import HomeButtonsSI from "../Components/HomeButtons/HomeButtonsSI";
import HomeCards from '../Components/HomeCards';
import dataSource from "../dataSource.js";
import '../Styles/CustomStyles.css'
import '../Styles/Bulma.css'
  
/**
 * Home page that displays the main page of the application
 * @returns Returns the home page
 */
const Home = () => {
  //Document the tab
  document.title = "Cared4";

  //List of random illnesses returned from the api
  const [randomIllnesses, setRandomIllnesses] = useState([]);

  //Set the refresh to false
  let refresh = false;

  //Method to get the illnesses from the API
  const loadIllnesses = async () => {
    //Calling the api and saving the response
    const response = await dataSource.get("/sicknesses/random");
    //Updating the list
    setRandomIllnesses(response.data);
  };

  //Function to load users from the database when the page is accessed
  useEffect(() => {
    loadIllnesses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  //Getting the user info
  var loggedIn = sessionStorage.getItem('loggedInUserEmail');

  //Checking to see what navbar needs to be displayed
  const chooseNav = () => {
    if (!loggedIn){
      return (<NavBar />)
    } else {
      return (<NavBarSI />)
    }
  };

  //Checking to see what buttons need to be displayed
  const chooseButtons = () => {
    if (!loggedIn){
      return (<HomeButtons />)
    } else {
      return (<HomeButtonsSI />)
    }
  }

  //Return the page created with components
  return (
    <div className="page">
      <section className="section">
        <div>
          {chooseNav()}
        </div>
      </section>
      <div className="content">
        <section className="section content-squish-bottom content-squish">
          <div className="homeCardPositions">
            <HomeCards data={randomIllnesses}/>
          </div>
        </section>
        <section className="section">
          {chooseButtons()}
        </section>
      </div>
    </div>
  );
};
  
export default Home;