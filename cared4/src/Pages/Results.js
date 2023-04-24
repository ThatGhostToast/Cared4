import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import NavBarSI from "../Components/Navbars/NavBarSI";
import ProbableResults from "../Components/Diagnosis/ProbableResults";

/**
 * Results page that displays the illnesses returned form a search
 * @returns Returns the results page
 */
const Results = (props) => {
    //Document the tab
    document.title = "Cared4 - Results";

    //Checking to see what navbar needs to be displayed
    var loggedIn = sessionStorage.getItem('loggedInUserEmail');
    const chooseNav = () => {
      if (!loggedIn){
        return (<NavBar />)
      } else {
        return (<NavBarSI />)
      }
    };

    //TODO Implement possible results

    //Return the page created with components
    return (
        <div>
            <section className="section">
                {chooseNav()}
            </section>
            <section className="section content-squish-bottom">
                <h1 className="title is-3">You most likely have:</h1>
                <ProbableResults />
            </section>
        </div>
    );
};

export default Results;