import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASAYscilSX9sfF53pC6aAJuQX-JTpJt_s",
    authDomain: "broker-app-202ae.firebaseapp.com",
    projectId: "broker-app-202ae",
    storageBucket: "broker-app-202ae.appspot.com",
    messagingSenderId: "785510833280",
    appId: "1:785510833280:web:97690d4c3a1eb0c7c5da65",
    measurementId: "G-KBC7G0PMBC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth };