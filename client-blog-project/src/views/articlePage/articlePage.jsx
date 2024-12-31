import React from 'react';
import { ArticleList, Navbar, Slideshow, Footer} from '@components';
import "../homePage/homePage.css";

const ArticlePage = () => {
    return (
        <div>
            <div className='container'>

                <div className="slideshow-container">
                    <Slideshow/>
                </div>

                <Navbar/>
                <hr/> 
                <div className='article-container'>
                    <ArticleList/>
                </div>
            </div>
            <Footer/>
        </div>
       
    );
}

export default ArticlePage;