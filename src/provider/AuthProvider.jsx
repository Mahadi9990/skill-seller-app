import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleSubmit =()=>{
    return signInWithPopup(auth, googleProvider)
  }
  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  
  };
const forgotEmail = (email)=>{
  return sendPasswordResetEmail(auth, email)
}
const updataUser =(object)=>{
  return updateProfile(auth.currentUser,object )
}
  const singOutUser =()=>{
   return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser)
        setloading(false)
    });
    return ()=>{
        unSubscribe()
    }
  }, []);
  const authData = {
    user,
    setuser,
    createUser,
    singIn,
    singOutUser,
    setloading,
    loading,
    forgotEmail,
    googleSubmit,
    updataUser
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
