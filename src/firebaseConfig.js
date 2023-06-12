import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAN0H6RF8VqrPq-NTwf5duWPdJO7Tfm-2c",
    authDomain: "food-recipe-62859.firebaseapp.com",
    projectId: "food-recipe-62859",
    storageBucket: "food-recipe-62859.appspot.com",
    messagingSenderId: "126295967813",
    appId: "1:126295967813:web:15777c48871d3c4f23bb2c",
    measurementId: "G-RL6SK9PWD7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };