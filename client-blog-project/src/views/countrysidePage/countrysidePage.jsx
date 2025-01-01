import React from "react";
import { Navbar, CountrysideList, Slideshow, Footer } from "@components";
import "./countrysidePage.css";

const CountrysidePage = () => {
    return (
        <div>
            <div className='container'>

                <div className="slideshow-container">
                        <Slideshow/>
                </div>

                 <Navbar/>
                 <hr/>

                <div className="title"><h1>Countryside</h1></div>
                <div className='countryside-container'>
                    <CountrysideList/>
                </div>
            </div>
            <Footer/>
        </div>
        );
}

export default CountrysidePage;

