import React from "react";
import "./article.css";
import articleImage from "../../assets/card/c2.jpg";

const Article = () => {
    return (
        <div className="article-container">

            <div className='article-image'>
                <img src={articleImage} alt='article' />
            </div>

            <div className="article-text">
                <div className='article-title'>
                    <h1>Munții Bucegi</h1>
                    <h2>Rasarit de soare la Refugiul Țigănești</h2>
                </div>
                <div className='article-author'>
                    <p>Diana Rențea, dec 29 2024</p>
                </div>
                <div className='article-content'>
                    <p>Răsăriturile de soare de la Refugiul Țigănești oferă o experiență de neuitat, 
                        un spectacol al naturii care îți taie respirația. În primele ore ale dimineții, 
                        când soarele își face timid apariția de după crestele Munților Bucegi, întreaga 
                        vale este scăldată într-o lumină caldă și aurie. Norii care plutesc jos în depărtare 
                        se colorează în nuanțe de roz, portocaliu și violet, creând un peisaj aproape suprarealist.

                    De la refugiu, privirea se pierde pe întinderile nesfârșite ale munților, unde liniștea dimineții 
                    este întreruptă doar de sunetele naturii – ciripitul păsărilor sau foșnetul ușor al vântului 
                    printre pini. Este locul perfect pentru a contempla măreția și frumusețea pură a munților, 
                    în timp ce primești energia și liniștea pe care doar natura le poate oferi. Răsăritul aici 
                    nu este doar un moment al zilei, ci o invitație la meditație și recunoștință.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Article;