import React from "react";
import "./Recipe.css";

interface Props {
    name: string;
    image: string;
}

const Recipe: React.FC<Props> = ({ name, image }) => {
    return (
        <div id="card">
            <img
                src={image}
                className="food-image"
            />
            <p className="heading-recipe">{name}</p>
            <p className="time-text">Time</p>
            <p className="time">15 Mins</p>
        </div>
    )
};

export default Recipe;