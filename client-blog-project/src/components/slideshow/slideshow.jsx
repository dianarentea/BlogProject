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
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;