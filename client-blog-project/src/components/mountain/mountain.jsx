import React, {useState, useEffect} from "react";
import "./mountain.css";

const Mountain = ({ title, subtitle, author, date, image, content }) => {
    return (
        <div className="mountain-container">

            <div className="mountain-image">
                <img src={image} alt='mountain' />
            </div>

            <div className="mountain-text">
                <div className='mountain-title'>
                    <h1>{title}</h1>
                    <h2>{subtitle} - <span>{author}, {date}</span></h2>
                </div>
                <div className='mountain-content'>
                    <p>{content}</p>
                    <br/><br/>
                </div>
            </div>
        </div>

    );
};

const MountainList = () => {
    const [mountains, setMountains] = useState([]);

    useEffect(() => {
        const fetchMountains = async () => {
            try{
                const response = await fetch("http://localhost:5000/mountains");
                const data = await response.json();
                setMountains(data);
            } catch (error) {
                console.error("An error occurred while fetching mountains", error);
            }
        };
        fetchMountains();
    }, []);

    return (
        <div>
          {mountains.map((mountain, index) => (
            <Mountain
              key={index}
              title={mountain.title}
              subtitle={mountain.subtitle}
              author={mountain.author}
              date={mountain.date}
              image={mountain.image}
              content={mountain.content}
            />
          ))}
        </div>
      );
}

export default MountainList;