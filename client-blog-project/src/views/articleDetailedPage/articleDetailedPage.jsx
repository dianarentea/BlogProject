import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Navbar, Slideshow, Footer } from "@components";
import "../homePage/homePage.css";
import "./articleDetailedPage.css";

const ArticleDetailedPage = () => {

    const { id } = useParams(); //extract the id from the URL
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/articles/${id}`);
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error("An error occurred while fetching the article", error);
            }
        };
        fetchArticle();
    }, [id]);

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <div className="container">
            <div className="slideshow-container">
            <Slideshow />
            </div>
            <Navbar />

            <div className="article-container">

                <div className='article-image'>
                    <img src={article.image} alt='article' />
                </div>

                <div className="article-text">
                    <div className='article-title'>
                        <h1>{article.title}</h1>
                        <h2>{article.subtitle}</h2>
                    </div>
                    <div className='article-author'>
                        {article.author}, {article.date}
                    </div>
                    <div className='article-content'>
                        <p>{article.fullContent} </p>                   
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default ArticleDetailedPage;