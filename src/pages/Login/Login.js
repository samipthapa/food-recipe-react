import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "../../assets/google.png";
import FacebookLogo from "../../assets/facebook.png";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { auth, googleProvider, facebookProvider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { TokenContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { data, setData } = useContext(TokenContext);

    const navigate = useNavigate();

    const handleLogin = (provider) => {
        signInWithPopup(auth, provider)
            .then(data => {
                console.log(data.user.displayName);
                // updateData(data._tokenResponse.idToken, data.user.displayName);
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
        <div className="container-login">
            <h1 id="greeting-login">Hello,</h1>
            <h2 id="welcome-login">Welcome Back!</h2>

            <form>
                <label for="email">
                    <p className="label-login">Email</p>
                </label><br />
                <input type="text" id="email" placeholder="Enter Email" className="form-login" />

                <label for="password">
                    <p className="label-login">Password</p>
                </label><br />
                <input type="password" id="password" placeholder="Enter Password" className="form-login" />
            </form>

            <p id="forget-password">Forgot Password?</p>

            <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ButtonComponent text="Sign In" />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <hr className="horizontal-line" />
                <p id="signin-text">Or Sign in With</p>
                <hr className="horizontal-line" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className="logo-container" onClick={() => handleLogin(googleProvider)}>
                    <img src={GoogleLogo} className="img-logo" />
                </div>
                <div className="logo-container" onClick={() => handleLogin(facebookProvider)}>
                    <img src={FacebookLogo} className="img-logo" />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <p id="noaccount-login">
                    Don't have an account?
                </p>
                <p id="signup-login">
                    Sign Up
                </p>
            </div>
        </div>
    )
}

export default Login;