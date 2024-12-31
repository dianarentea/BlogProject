import React from "react";
import "./card-reverse.css";
import mountainImage from "../../assets/card/c2.jpg";



const CardReverse = ({title, description, image}) => {
    return (
        <div className="card-reverse"> 

            <div className="card-text-reverse">
            <h2>{description}</h2>
            <p>{title}</p>
            </div>

            <div className="card-image-reverse">
            <img src={image} alt="Mountain"/>
            </div>
            
        </div>
    );
}

export default CardReverse;