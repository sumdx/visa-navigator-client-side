import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password)=>{
        setLoading(true);
        console.log(email,password);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider);
    }

    
    const authInfo ={
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;