import React from 'react';
import { Slideshow, Navbar, Card, Article, About } from "@components";
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
        </div>
      </div>

      <div className="articles-container">
        <h1>Articles...</h1>
        <Article />
      </div>
      
      <div className="footer">
      <hr/>
        <About/>
      </div>

    </div>
  );
};

export default HomePage;