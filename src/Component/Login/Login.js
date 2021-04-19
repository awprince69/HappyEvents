import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Login.css'
import logo from '../../images/Login/icon/google.png'
import { Button } from 'react-bootstrap';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { email, displayName } = result.user;
                const signInGoogle = { email, name: displayName }
                setLoggedIn(signInGoogle)
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div className="loginContainer text-center">
            <button className='loginButton' onClick={googleSignIn}><img src={logo} alt="" width='200'/></button>
        </div>
    );
};

export default Login;
