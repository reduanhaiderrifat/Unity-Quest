import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleUser = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User login with google successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const githubUser = () => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User login with github successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
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
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);
  const authInfo = {
    createUser,
    singInUser,
    googleUser,
    githubUser,
    logOut,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
