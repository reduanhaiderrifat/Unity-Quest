import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reloader, setReloader] = useState(false);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubUser = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updateUser = async (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    }).then(() => {
      setReloader(Math.random());
    });
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      const loggedUser = { email: currentuser?.email };
      if (currentuser) {
        axios
          .post(`${import.meta.env.VITE_URL_SERVER}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("tokenresponse", res.data);
          });
      } else {
        axios
          .post(`${import.meta.env.VITE_URL_SERVER}/logout`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
      setLoading(false);
    });
    return () => unsuscribe();
  }, [reloader]);
  const authInfo = {
    createUser,
    singInUser,
    googleUser,
    githubUser,
    updateUser,
    logOut,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
