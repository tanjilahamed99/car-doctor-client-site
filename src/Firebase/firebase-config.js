// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE0ZwlKFFJIfg5jgs3y7ySsawYH5Pvfd8",
    authDomain: "cardoctor-639d6.firebaseapp.com",
    projectId: "cardoctor-639d6",
    storageBucket: "cardoctor-639d6.appspot.com",
    messagingSenderId: "948357200869",
    appId: "1:948357200869:web:7e6bbec3db67b5b518cd0c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
