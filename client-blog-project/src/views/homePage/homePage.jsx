import React from 'react';
import { Slideshow, Navbar, Card, ArticleList, About, Footer } from "@components";
import "./homePage.css";
import { CardReverse } from '../../components';

const HomePage = () => {
  return (
    <div>
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
          <hr/>
          <h3>Articles...</h3>
          <ArticleList/>
        </div>
        
        <div className="footer">
        <hr/>
        <h3>About me...</h3>
          <About/>
        </div>


      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;