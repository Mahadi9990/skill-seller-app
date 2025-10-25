import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  
  };

  const singOutUser =()=>{
   return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser)
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
    singOutUser
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
