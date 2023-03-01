import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import ProbableResults from "../Components/Diagnosis/ProbableResults";
import PossibleResults from "../Components/Diagnosis/PossibleResults";

/**
 * Results page that displays the illnesses returned form a search
 * @returns Returns the results page
 */
const Results = (props) => {
    //Return the page created with components
    return (
        <div>
            <section className="section">
                <NavBar />
            </section>
            <section className="section content-squish-bottom">
                <h1 className="title is-3">You most likely have:</h1>
                <ProbableResults />
            </section>
            <section className="section content-squish">
                <PossibleResults />
            </section>
        </div>
    );
};

export default Results;