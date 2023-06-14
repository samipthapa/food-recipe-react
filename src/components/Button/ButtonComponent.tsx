import React from "react";
import "./ButtonComponent.css";

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <div className="button">
            <p id="button-text">{text}</p>
        </div>
    )
};

export default Button;
