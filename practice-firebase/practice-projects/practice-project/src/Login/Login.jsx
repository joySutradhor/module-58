import React, { useState } from 'react';
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
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