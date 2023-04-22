import React, { useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, OAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider= new FacebookAuthProvider() ;
const yahooProvider = new OAuthProvider('yahoo.com')
const Login = () => {

    const [userInfo, setUserInfo] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUserInfo(user)
                console.log(user)
            })
            .catch((error) => {
                const errorMsg = error.message;
                console.log(errorMsg);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const userData = result.user;
                setUserInfo(userData)
            })
            .catch(err => {

                console.log(err.message);
            })
    }
    const handleFacebookSignIn = () => {
        signInWithPopup(auth , facebookProvider)
        .then(result => {
            const fbData = result.user ;
            setUserInfo(fbData)
            console.log(fbData) ;
        })
        .catch(err => {
            console.log(err.message);
        })
            
    }
    const handleYahooSignIn = () => {
        signInWithPopup(auth , yahooProvider)
        .then(result => {
            const yahooData = result.user ;
            setUserInfo(yahooData)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUserInfo(null)
            })
            .catch((err) => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }
    return (
        <div>
            {
                userInfo ? <button onClick={handleSignOut} >Sign out</button> : <>
                    <button onClick={handleGoogleSignIn} >Sign in With Google</button>
                    <button onClick={handleGithubSignIn} >Sign in With Git Hub</button>
                    <button onClick={handleFacebookSignIn} >Sign in With Facebook</button>
                    <button onClick={handleYahooSignIn} >Sign in With Yahoo</button>
                </>
            }
            {
                userInfo && <div>
                    <h1>{userInfo.displayName}</h1>
                    <p>{userInfo.email}</p>
                </div>
            }

        </div>
    );
};

export default Login;