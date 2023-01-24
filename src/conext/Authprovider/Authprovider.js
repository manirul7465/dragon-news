import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providrLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserprofile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const logOUt = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        providrLogin,
        logOUt,
        createUser,
        signIn,
        loading, updateUserprofile, verifyEmail, setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;