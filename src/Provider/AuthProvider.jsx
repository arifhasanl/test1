import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    const subscrib=onAuthStateChanged(auth,courentUser=>{
        setUser(courentUser)
    })
    return()=>{
        return subscrib()
    }
},[])
const authInfo={
    user,
    createUser,
    loginUser
}

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;