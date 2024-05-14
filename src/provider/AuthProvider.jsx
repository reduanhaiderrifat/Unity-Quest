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
import useAxiosSecure from "../hooks/useAxiosSecure";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reloader, setReloader] = useState(false);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
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
        axiosSecure.post(`/jwt`, loggedUser).then(() => {
          setLoading(false);
        });
      } else {
        axiosSecure.post(`/logout`, loggedUser).then(() => {
          setLoading(false);
        });
      }
    });
    return () => unsuscribe();
  }, [reloader, axiosSecure]);
  const authInfo = {
    createUser,
    singInUser,
    googleUser,
    githubUser,
    updateUser,
    logOut,
    setLoading,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
