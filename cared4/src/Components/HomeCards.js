import React from "react";
import HomeIllnessCard from "./HomeIllnessCard";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

/**
 * Component responsible for displaying the more likely results in cards.
 * @returns Returns a section that displays the illness cards 
 */
const HomeCards = (props) => {
  //Logging the sickness data
  console.log(props.data);  

  //Mapping the illnesses to cards
  const cards = props.data.map((data) => {
    return (
      <div className="cusCard">
        <HomeIllnessCard  
          key={data.id} id={data.id} commonName={data.commonName} name={data.name} symptoms={data.symptoms} commonTargets={data.commonTargets} description={data.description} rarity={data.rarity} severity={data.severity} requirements={data.requirements} treatment={data.treatment}/>
          <br />
      </div>
    );
  });
  return <div className="cardFlex">{cards}</div>
};

export default HomeCards;