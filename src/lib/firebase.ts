// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AYg6LhwF7OyypCIKg7nJZkqNNkejg9g",
  authDomain: "nexiogbl.firebaseapp.com",
  projectId: "nexiogbl",
  storageBucket: "nexiogbl.firebasestorage.app",
  messagingSenderId: "660630828095",
  appId: "1:660630828095:web:f481195d6244a1ac96b48a",
  measurementId: "G-9PYNYR6VTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
