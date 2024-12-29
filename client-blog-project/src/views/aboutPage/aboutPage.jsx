import React from 'react';
import {About, Navbar, Slideshow, Footer} from "@components";
import "./aboutPage.css";
import "../homePage/homePage.css";
import "../../components/about/about.css";

const AboutPage = () => {
    return(
    <div>
        <div className='container'>

            <div className="slideshow-container">        
                    <Slideshow/>
            </div>
            
            <Navbar/>   

            <About/>

            <div className="about-text">
                    <h2>What is this blog about?</h2>
                    <p>
                        This blog is a <span>collection of my travel stories and photos</span> from around the world.
                        I write about my adventures, share tips and recommendations for other travelers,
                        and document the beauty of nature and different cultures. 
                    </p>

                    <h2>Why Romania and not other countries?</h2>
                    <p>
                        Romania is my home country, and I am proud to be Romanian. I believe that Romania
                        is a hidden gem in Europe, with stunning landscapes, rich history, and welcoming people.
                        I want to show the world the beauty of Romania and encourage travelers to visit this
                        amazing country. 
                    </p>
                    <p>
                        I traveled to many countries around the world, but Romania will always have a special
                        place in my heart.I saw the Alpes, Dolomities, fiords from Norway, each having their particularities
                        but Romania has different landscapes and views that are unique in the world.
                        Definetly each place has its own beauty, but Romania isn't as much promoted as other countries.
                    </p>

                    <h2>How to reach me?</h2>
                <p>
                        You can follow me on social media to see
                        more of my photos and travel updates:

                        <br/>

                        <ul>
                            <li>Instagram: @diana.rentea</li>
                            <li>Facebook: Diana Rențea</li>
                            <li>Email: rentea88@gmail.com</li>
                        </ul>
                    
                    </p>

                            
                </div>
        </div>
        <Footer/>
    </div>
    );
   
};



export default AboutPage;