import React from "react";
import "./ButtonComponent.css";

const Button = ({ text }) => {
    return (
        <div class="button">
            <p id="button-text">{text}</p>
        </div>
    )
};

export default Button;
