import React from "react";
import ResultCard from "./ResultCard";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Component responsible for displaying the more likely results in cards.
 * TODO A for loop needs to be implemented to display a result card for everything returned from the API
 * @returns Returns a section that displays the illness cards 
 */
const ProbableResults = (props) => {
  var illnesses = sessionStorage.getItem('probIllness');
  var illnessParse = JSON.parse(illnesses);

  const cards = illnessParse.map((data) => {
    return (
      <div>
        <ResultCard  
          commonName = {data.commonName} name={data.name} symptoms={data.symptoms} commonTargets={data.commonTargets}/>
          <br />
      </div>
    );
  });
  return <div>{cards}</div>
};

export default ProbableResults;