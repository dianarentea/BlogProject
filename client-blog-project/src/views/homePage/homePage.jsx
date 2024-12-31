import React from 'react';
import { Slideshow, Navbar, Card, ArticleList, About, Footer, CardReverse } from "@components";
import "./homePage.css";
import mountainImage1 from "../../assets/card/c1.jpg";
import mountainImage2 from "../../assets/card/c2.jpg";
import mountainImage3 from "../../assets/card/c3.jpg";

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
              <Card title="Sir Edmund Hillary" description="'Is not the mountain we conquer, but ourselves.'" image={mountainImage1}/>
            </div>
            <div className="col">
              <CardReverse title="Greg Child" description="'Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb.'" image={mountainImage3} />    
            </div>
            <div className="col">
              <Card title="Reinhold Messner" description="'Mountains are not unfair, they are just dangerous'" image={mountainImage2}/>
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