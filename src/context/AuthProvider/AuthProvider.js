import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const providerLogin = (provider) => {
        signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
        
    }, [])
    const [user, setUser] = useState(null)
    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;