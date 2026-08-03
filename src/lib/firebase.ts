// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";

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

// Initialize Firebase app eagerly (small, sync cost)
const app: FirebaseApp = initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics> | null = null;

/**
 * Lazily initializes Firebase Analytics only when explicitly needed,
 * deferring the analytics SDK chunk load so it doesn't block first paint.
 */
export function initAnalytics(): Promise<Analytics> {
  if (analyticsPromise) return analyticsPromise;
  analyticsPromise = import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
    if (!isSupported()) return Promise.reject(new Error("Firebase Analytics not supported"));
    return getAnalytics(app);
  });
  return analyticsPromise;
}

export { app };
