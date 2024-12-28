import React from 'react';
import { Slideshow, Navbar } from "@components";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="slideshow-container">
        <Slideshow/>
      </div>
      <div className="title">
        <p>Mountain's lovers</p>
        </div>
      <hr/>
      <Navbar/>
    </div>
  );
};

export default HomePage;