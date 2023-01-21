import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imgUrl} alt="Juice Pic" />
            <div className="card-body">
                <h5 className="card-title">{props.juiceName}</h5>
                <p className="card-text">{props.juiceBenefits}</p>      
            </div>
        </div>
    );
}

export default Card;