import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googelProvider = new GoogleAuthProvider();

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

  // *******
  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googelProvider);
  }

  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, currentUser=>{
      setuser(currentUser);
      // console.log('current user', currentUser);
      if(currentUser && currentUser.email){
        const loggedUserEmail={
          email:currentUser.email
        }
        fetch('http://localhost:5000/jwt',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(loggedUserEmail)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          localStorage.setItem('car-doctor-access', data.token);          
        })
      }
      else{
        localStorage.removeItem('car-doctor-access')
      }
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
    googleSignIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authIfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;