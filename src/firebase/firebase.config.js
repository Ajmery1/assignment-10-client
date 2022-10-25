// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUdioDZJuda5hOd2aCSmiBNPPQHyDObtQ",
  authDomain: "assignment-10-cf1b2.firebaseapp.com",
  projectId: "assignment-10-cf1b2",
  storageBucket: "assignment-10-cf1b2.appspot.com",
  messagingSenderId: "878517184025",
  appId: "1:878517184025:web:ce9f87e6ebb74a9bc06c88",
  measurementId: "G-ZG2SRB3Y1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;