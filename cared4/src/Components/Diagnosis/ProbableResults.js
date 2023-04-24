import React from "react";
import ResultCard from "./ResultCard";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Component responsible for displaying the more likely results in cards.
 * @returns Returns a section that displays the illness cards 
 */
const ProbableResults = (props) => {
  var illnesses = sessionStorage.getItem('probIllness');
  var illnessParse = JSON.parse(illnesses);

  const cards = illnessParse.map((data) => {
    return (
      <div>
        <ResultCard  
          key={data.id} id={data.id} commonName={data.commonName} name={data.name} symptoms={data.symptoms} commonTargets={data.commonTargets} description={data.description} rarity={data.rarity} severity={data.severity} requirements={data.requirements} treatment={data.treatment} image={data.image}/>
          <br />
      </div>
    );
  });
  return <div>{cards}</div>
};

export default ProbableResults;