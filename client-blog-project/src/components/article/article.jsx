import React from "react";
import "./article.css";
import articleImage from "../../assets/card/c2.jpg";

const Article = () => {
    return (
    <div className="article">
        <div className="article-image">
            <img src={articleImage} alt="Article"/>
        </div>
        <div className="article-text">
            <h2></h2>
            <p></p>
        </div>
    </div>
    );
}

export default Article;