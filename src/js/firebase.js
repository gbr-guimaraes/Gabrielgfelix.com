// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABTyrcnUlGIUCUGg3iV5LAidx4UDidF-4",
  authDomain: "site-pessoal-9231e.firebaseapp.com",
  databaseURL: "https://site-pessoal-9231e-default-rtdb.firebaseio.com",
  projectId: "site-pessoal-9231e",
  storageBucket: "site-pessoal-9231e.appspot.com",
  messagingSenderId: "84515703295",
  appId: "1:84515703295:web:ff18c41e6818f332517fca",
  measurementId: "G-J8WB9PC9FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

