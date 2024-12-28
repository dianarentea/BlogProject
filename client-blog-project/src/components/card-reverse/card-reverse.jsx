import React from "react";
import "./card-reverse.css";
import mountainImage from "../../assets/card/c1.jpg";



const CardReverse = () => {
    return (
        <div className="card-reverse"> 

            <div className="card-text-reverse">
            <h2>Mountains</h2>
            <p>Mountains are the beginning and the end of all natural scenery.</p>
            </div>

            <div className="card-image-reverse">
            <img src={mountainImage} alt="Mountain"/>
            </div>
            
        </div>
    );
}

export default CardReverse;