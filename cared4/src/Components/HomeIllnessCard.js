import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const HomeIllnessCard = (props) => {
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
        requirements: props.requirements
        }
      });
    }

    return (
      <div className="card">
        <div className="homeCardImage">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder"
            className="hici"
          />
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{props.commonName}</p>
            <p className="subtitle is-6">{props.name}</p>
          </div>
          <div className="content">
            <p>
              <strong>Commonly Affects: </strong>
              {props.commonTargets}
            </p>
            <p>
              <strong>Symptoms: </strong>
              {props.symptoms}
            </p>
          </div>
          <footer className="card-footer homeViewButton">
            <button className="button is-primary" onClick={onClickHandler}>View</button>
          </footer>
        </div>
      </div>
    );
}

export default HomeIllnessCard;