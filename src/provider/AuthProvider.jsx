import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login =(email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password);
  }

  const logOut =() =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, currentUser=>{
      setuser(currentUser);
      // console.log('current user', currentUser);
      setLoading(false);
    })
    return () =>{
      return unsubscribe();
    }
  },[])

  const authIfo = {
    user,
    loading,
    createUser,
    login,
    logOut
  }

  return (
    <AuthContext.Provider value={authIfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;