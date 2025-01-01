import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import './slideshow.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../assets/slideshow', false, /\.(png|jpe?g|svg)$/));

const Slideshow = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
      new Carousel(carouselElement);
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide slideshow-container" data-bs-ride="carousel">
  
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
  
  );
};

export default Slideshow;