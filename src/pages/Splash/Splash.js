import React, { useContext } from "react";
import chef from "../../assets/chef.png";
import ButtonComponent from "../../components/Button/ButtonComponent";
import background from "../../assets/background.png";
import "./Splash.css";
import { TokenContext } from "../../context/TokenContext";
import { Link, useNavigate } from "react-router-dom";

const Splash = () => {
    const { token, updateToken } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (token) {
            navigate("/home");
        } else {
            navigate("/login");
        }
    }

    return (
        <div className="container" style={{ backgroundImage: `url(${background})` }}>
            <img src={chef} className="image" />
            <h2 id="premium-recipe">100K+ Premium Recipe</h2>
            <h1 id="get-cooking">Get<br />Cooking</h1>
            <p id="tasty-recipe">Simple way to find Tasty Recipe</p>

            <div
                style={{ cursor: 'pointer' }}
                onClick={handleNavigation}
            >
                <ButtonComponent text="Start Cooking" />
            </div>

        </div>
    )
};

export default Splash;