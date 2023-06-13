import React, { useContext, useEffect } from "react";
import chef from "../../assets/chef.png";
import ButtonComponent from "../../components/Button/ButtonComponent";
import background from "../../assets/background.png";
import "./Splash.css";
import { TokenContext } from "../../context/TokenContext";
import { Link, useNavigate } from "react-router-dom";

const Splash = () => {
    const { data, setData } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (data.token) {
            navigate('/home');
        }
    }, [data.token]);

    return (
        <div className="container" style={{ backgroundImage: `url(${background})` }}>
            <img src={chef} className="image" />
            <h2 id="premium-recipe">100K+ Premium Recipe</h2>
            <h1 id="get-cooking">Get<br />Cooking</h1>
            <p id="tasty-recipe">Simple way to find Tasty Recipe</p>

            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ButtonComponent text="Start Cooking" />
            </Link>

        </div>
    )
};

export default Splash;