// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuaLFaMln37ByF25V9aySu3oJGOhiTA3w",
    authDomain: "projeto-teste-aae2b.firebaseapp.com",
    projectId: "projeto-teste-aae2b",
    storageBucket: "projeto-teste-aae2b.appspot.com",
    messagingSenderId: "741810255463",
    appId: "1:741810255463:web:eb6caf7e2b63ef473c46c2",
    measurementId: "G-PX1L6MF60M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
