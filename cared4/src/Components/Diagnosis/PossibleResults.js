import React from "react";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'
import ResultCard from "./ResultCard";

const PossibleResults = () => {
    return (
        <div>
            <h1 className="title is-4">While less likely, you could also have:</h1>
            <ResultCard />
        </div>
    );
};

export default PossibleResults;