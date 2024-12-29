import React from 'react';
import { Slideshow, Navbar, Card } from "@components";
import "./homePage.css";
import { CardReverse } from '../../components';

const HomePage = () => {
  return (
    <div className="container">

      <div className="title">
        <p>Mountain's lovers blog</p>
      </div>
      <hr/>

      <div className="slideshow-container">
        <Slideshow/>
      </div>

      <Navbar/>

      <div className="card-container">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <CardReverse />    
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <div className="about-container">
              About Me
            </div>
          </div>
        </div>
      </div>

      <div className="articles-container">
        Articles
      </div>

    </div>
  );
};

export default HomePage;