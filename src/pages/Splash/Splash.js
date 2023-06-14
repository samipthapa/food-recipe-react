import React, { useContext, useEffect, Suspense, useLayoutEffect, useRef } from "react";
import chef from "../../assets/chef.png";
import background from "../../assets/background.png";
import SplashCSS from "./Splash.module.css";
import { TokenContext } from "../../context/TokenContext";
import { Link, useNavigate } from "react-router-dom";
import fallbackRender from "../../components/ErrorBoundary/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import "../../style.css";

const ButtonComponent = React.lazy(() => import("../../components/Button/ButtonComponent"));

const Splash = () => {
    const { data, setData } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (data.token) {
            navigate('/home');
        }
    }, [data.token]);

    // useEffect(() => {
    //     console.log("useEffect");
    // }, []);

    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect");
    // }, []);

    return (
        <div className="container" style={{ backgroundImage: `url(${background})` }}>
            <img src={chef} className={SplashCSS.image} />
            <h2 id={SplashCSS['premium-recipe']}>100K+ Premium Recipe</h2>
            <h1 id={SplashCSS['get-cooking']}>Get<br />Cooking</h1>
            <p id={SplashCSS['tasty-recipe']}>Simple way to find Tasty Recipe</p>

            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ErrorBoundary
                    FallbackComponent={fallbackRender}
                    onReset={() => { }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <ButtonComponent text="Start Cooking" />
                    </Suspense>
                </ErrorBoundary>

            </Link>

        </div>
    )
};

export default Splash;