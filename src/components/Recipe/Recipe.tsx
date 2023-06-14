import React from "react";
import "./Recipe.css";

type Props = {
    name: string;
    image: string;
}

const Recipe = ({ name, image }: Props) => {
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