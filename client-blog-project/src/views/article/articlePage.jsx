import React from 'react';
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
            <Article />
            <Article />
            </div>
        </div>
       
    );
}

export default ArticlePage;