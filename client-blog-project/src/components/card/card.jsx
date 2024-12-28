import React from "react";
import "./card.css";
import mountainImage from "../../assets/card/c1.jpg";

const Card = () => {
    return (
        <div className="card"> 

            <div className="card-image">
            <img src={mountainImage} alt="Mountain"/>
            </div>

            <div className="card-text">
            <h2>Mountains</h2>
            <p>Mountains are the beginning and the end of all natural scenery.</p>
            </div>
            
        </div>
    );
}

export default Card;
