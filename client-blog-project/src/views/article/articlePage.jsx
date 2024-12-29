import React from 'react';
import articleImage from '../../assets/card/c3.jpg';
import { Article, Navbar, Slideshow } from '@components';
import "../homePage/homePage.css";

const ArticlePage = () => {
    return (
        <div className='container'>

            <div className="slideshow-container">
                    <Slideshow/>
            </div>

             <Navbar/>

            <div className='article-container'>
            <Article />
            </div>
        </div>
       
    );
}

export default ArticlePage;