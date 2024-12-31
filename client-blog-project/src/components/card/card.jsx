import React from "react";
import "./card.css";
import mountainImage from "../../assets/card/c1.jpg";

const Card = ({title, description, image}) => {
    return (
        <div className="card"> 

            <div className="card-image">
            <img src={image} alt="Mountain"/>
            </div>

            <div className="card-text">
            <h2>{description}</h2>
            <p>{title}</p>
            </div>
            
        </div>
    );
}

export default Card;
