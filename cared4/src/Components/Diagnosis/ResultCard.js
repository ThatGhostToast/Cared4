import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Styles/Bulma.css'
import '../../Styles/CustomStyles.css'

/**
 * Card used to display basic illness details. A user can see more details if they click the button at the bottom of the card
 * @returns Returns a card of data
 */
const ResultCard = (props) => {
      // Navigational tool used to navigate the user and their data
    const navigate = useNavigate();

    //Function used to navigate the user and the illness properties
    const onClickHandler = () =>{
      navigate('/closeup', { state: {
        id: props.id,
        commonName: props.commonName,
        name: props.name,
        symptoms: props.symptoms,
        commonTargets: props.commonTargets,
        description: props.description,
        rarity: props.rarity,
        severity: props.severity,
        treatment: props.treatment,
        requirements: props.requirements,
        image: props.image
        }
      });
    }
  
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={props.image}
                    alt="Placeholderimage"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{props.commonName}</p>
                <p className="subtitle is-6">{props.name}</p>
              </div>
            </div>

            <div className="content">
              <p><strong>Commonly Affects: </strong>{props.commonTargets}</p>
              <p><strong>Symptoms: </strong>{props.symptoms}</p>
            </div>
            <div className="content">
              <button className="button is-primary" onClick={onClickHandler}>View</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResultCard;