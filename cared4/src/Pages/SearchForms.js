import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import NavBarSI from "../Components/Navbars/NavBarSI"
import SBNForm from "../Components/Diagnosis/SBNForm";
import SBSForm from "../Components/Diagnosis/SBSForm";

/**
 * Search forms page that displays the search forms users can use to search for an illness
 * @returns Returns the search forms page
 */
const SearchForms = () => {
    //Document the tab
    document.title = "Cared4 - Search";

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
        <div>
            <section className="section">
                {chooseNav()}
            </section>
            <section className="section">
                <div className="container is-max-desktop columns search-forms">
                    <div className="column">
                        <SBSForm />
                    </div>
                    <div className="column">
                        <SBNForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchForms;