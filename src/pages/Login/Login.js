import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import GoogleLogo from "../../assets/google.png";
import FacebookLogo from "../../assets/facebook.png";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { auth, googleProvider, facebookProvider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { TokenContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";
import "../../style.css";

const Login = () => {
    const { data, setData } = useContext(TokenContext);

    const navigate = useNavigate();

    const handleLogin = (provider) => {
        signInWithPopup(auth, provider)
            .then(data => {
                console.log(data.user.displayName);
                setData({ token: data._tokenResponse.idToken, name: data.user.displayName });
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (data.token) {
            navigate('/home');
        }
    }, [data]);

    return (
        <div className="container">
            <h1 id={style["greeting-login"]}>Hello,</h1>
            <h2 id={style["welcome-login"]}>Welcome Back!</h2>

            <form>
                <label for="email">
                    <p className={style.labelLogin}>Email</p>
                </label><br />
                <input type="text" placeholder="Enter Email" className={style.formLogin} />

                <label for="password">
                    <p className={style.labelLogin}>Password</p>
                </label><br />
                <input type="password" placeholder="Enter Password" className={style.formLogin} />
            </form>

            <p id={style["forget-password"]}>Forgot Password?</p>

            <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ButtonComponent text="Sign In" />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <hr className={style.horizontalLine} />
                <p id="signin-text">Or Sign in With</p>
                <hr className={style.horizontalLine} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className={style.logoContainer} onClick={() => handleLogin(googleProvider)}>
                    <img src={GoogleLogo} />
                </div>
                <div className={style.logoContainer} onClick={() => handleLogin(facebookProvider)}>
                    <img src={FacebookLogo} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <p id={style["noaccount-login"]}>
                    Don't have an account?
                </p>
                <p id={style["signup-login"]}>
                    Sign Up
                </p>
            </div>
        </div>
    )
}

export default Login;