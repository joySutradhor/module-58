import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.init';


const Login = () => {
    const [info, setInfo] = useState('');

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const handleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((data) => {
                // const userName = user.user.displayName ;
                // const userEmail = user.user.email ;
                const userData = data.user;
                setInfo(userData)

            })
            .catch((error) => {
                const errorMsg = error.message;
                console.log(errorMsg);
            })
    }

    const handleSingOut =() => {
        signOut(auth)
        .then ((result) => {
            console.log(result)
            setInfo('')
        })
        .catch((error) => {
           console.log(error.message)
        })
    }

    const githubProvider = new GithubAuthProvider() ;
    const handleGitSingIn =() => {
        signInWithPopup(auth , githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setInfo(user)
        })
        .catch((error) => {
            const errorMsg = error.message ;
            console.log(errorMsg)
        })
    }

    return (
        <div>
            {
                info ? <button className='p-2 bg-red-200 my-3' onClick={handleSingOut} >Sign Out </button> :
                <div className='flex gap-3'> <button className='p-2 bg-green-200' onClick={handleSingIn}>Google Login</button>
                    <button className='p-2 bg-green-400' onClick={handleGitSingIn}>Git Login</button></div>
            }
            {
                info && <div>
                    <h4>Name : {info.displayName}</h4>
                    <h4>Email : {info.email}</h4>
                    <img src={info.photoURL} alt="" />

                </div>
            }
        </div>
    );
};

export default Login;