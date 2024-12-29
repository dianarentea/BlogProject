import React from "react";
import { Navbar, MountainList, Slideshow, Footer } from "@components";
import "./mountainPage.css";

const MountainPage = () => {
     return (
        <div>
            <div className='container'>
    
                <div className="slideshow-container">
                        <Slideshow/>
                </div>
    
                 <Navbar/>
    
                <div className='mountain-container'>
                    <MountainList/>
                </div>
            </div>
        </div>
        );
}

export default MountainPage;
