import React, {useState, useEffect}from "react";
import "./article.css";

const Article = ({ title, subtitle, author, date, image, content }) => {
    return (
        <div className="article-container">

            <div className='article-image'>
                <img src={image} alt='article' />
            </div>

            <div className="article-text">
                <div className='article-title'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className='article-author'>
                    {author}, {date}
                </div>
                <div className='article-content'>
                    <p>{content}</p>
                    <br/><br/>
                </div>
            </div>
        </div>

    );
};

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try{
                const response = await fetch("http://localhost:5000/articles");
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error("An error occurred while fetching articles", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
          {articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              subtitle={article.subtitle}
              author={article.author}
              date={article.date}
              image={article.image}
              content={article.content}
            />
          ))}
        </div>
      );
};

export default ArticleList;