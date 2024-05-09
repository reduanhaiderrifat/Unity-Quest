// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlUNQoZY_dwtaoJRpER-Cay5fSoY3edFI",
  authDomain: "volunteer-management-web.firebaseapp.com",
  projectId: "volunteer-management-web",
  storageBucket: "volunteer-management-web.appspot.com",
  messagingSenderId: "640044481513",
  appId: "1:640044481513:web:6e5dcc3e5d916b814d2978",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
