import '../css/Login.css';
import React from 'react';
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";


function Login({setIsAuth}){

    let navigate = useNavigate();


    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) =>{
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/")
        })
    };

    return(
        
        <div className="loginpage">
            <div className='img1'></div>
            <p className='login-text'>Prisijungite su Google, kad galėtumete testi!</p>
            <button className="login-btn-google" onClick={SignInWithGoogle}>Prisijungite su Google</button>
            </div>
            
        )
}

export default Login;