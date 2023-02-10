import React from "react";
import ResultCard from "./ResultCard";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Component responsible for displaying the more likely results in cards.
 * TODO A for loop needs to be implemented to display a result card for everything returned from the API
 * @returns Returns a section that displays the illness cards 
 */
const ProbableResults = () => {
    return (
      <div>
        <h1 className="title is-3">You most likely have:</h1>
        <ResultCard />
      </div>
    );
};

export default ProbableResults;