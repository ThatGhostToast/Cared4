import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import ResultCard from "./ResultCard";

const ProbableResults = () => {
    return (
      <div>
        <h1 class="title is-3">You most likely have:</h1>
        <ResultCard />
      </div>
    );
};

export default ProbableResults;