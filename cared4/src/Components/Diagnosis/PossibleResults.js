import React from "react";
import ResultCard from "./ResultCard";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Component responsible for displaying the possible results in cards.
 * TODO A for loop needs to be implemented to display a result card for everything returned from the API
 * @returns Returns a section that displays the illness cards 
 */
const PossibleResults = (props) => {
    return (
        <div>
            <h1 className="title is-4">While less likely, you could also have:</h1>
            <ResultCard />
        </div>
    );
};

export default PossibleResults;