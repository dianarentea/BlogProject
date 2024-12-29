import React from 'react';
import { ArticleList, Navbar, Slideshow } from '@components';
import "../homePage/homePage.css";

const ArticlePage = () => {
    return (
        <div className='container'>

            <div className="slideshow-container">
                    <Slideshow/>
            </div>

             <Navbar/>

            <div className='article-container'>
                <ArticleList/>
            </div>
        </div>
       
    );
}

export default ArticlePage;