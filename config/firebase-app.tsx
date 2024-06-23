// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwEeepy7icIFpz5HBPz9CWhet3c3D7aY",
  authDomain: "ogj-portfolio.firebaseapp.com",
  projectId: "ogj-portfolio",
  storageBucket: "ogj-portfolio.appspot.com",
  messagingSenderId: "164587659036",
  appId: "1:164587659036:web:b88aa6cf6745667cd8a4d9",
  measurementId: "G-SCLLRVKSNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics}