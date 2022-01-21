// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo65m8T8d_NCDk6U0v9hpWuv7H5k1w8mI",
  authDomain: "myworld-b449e.firebaseapp.com",
  projectId: "myworld-b449e",
  storageBucket: "myworld-b449e.appspot.com",
  messagingSenderId: "707192292885",
  appId: "1:707192292885:web:e1f006eea06548442db01c",
  measurementId: "G-09WND5Q6MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);