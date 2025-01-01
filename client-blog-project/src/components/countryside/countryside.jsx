import React, {useState, useEffect} from "react";
import "./countryside.css";

const Countryside = ({ title, subtitle, author, date, image, content }) => {
    return (
            <div className="countryside-container">
                <div className="countryside-header">
                    <div className="countryside-image">
                        <img src={image} alt="countryside" />
                    </div>
                    <div className="countryside-title">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p className="countryside-author">
                            By <span>{author}</span> on <span>{date}</span>
                        </p>
                    </div>
                </div>
                <div className="countryside-content">
                    <p>{content}</p>
                </div>
            </div>
    );
}

const CountrysideList = () => {
    const [countryside, setCountryside] = useState([]);

    useEffect(() => {
        const fetchCountryside = async () => {
            try{
                const response = await fetch("http://localhost:5000/countryside");
                const data = await response.json();
                setCountryside(data);
            } catch (error) {
                console.error("An error occurred while fetching countryside", error);
            }
        };
        fetchCountryside();
    }, []);

    return (
        <div>
          {countryside.map((countryside, index) => (
            <Countryside
              key={index}
              title={countryside.title}
              subtitle={countryside.subtitle}
              author={countryside.author}
              date={countryside.date}
              image={countryside.image}
              content={countryside.content}
            />
          ))}
        </div>
      );
}   

export default CountrysideList;