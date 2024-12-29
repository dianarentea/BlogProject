import React from "react";
import "./about.css";
import aboutImage from "../../assets/about/a1.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="about-title">
            <h1>About</h1>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="about" />
            </div>

            <div className="about-text">
                <h2>Who I am?</h2>
                <p>
                    Hello, I am Diana-Andreea Rențea, a passionate traveler and nature lover.
                    I am a freelance writer and photographer, and I love to explore the world
                    and share my experiences with others. I believe that travel is the best way
                    to learn about different cultures, meet new people, and discover the beauty
                    of our planet. I hope that my articles and photos will inspire you to
                    travel more and explore the wonders of the world.
                </p>
            </div>
        </div>
    );
}

export default About;