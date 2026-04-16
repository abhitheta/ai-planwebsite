import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup as firebaseSignInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

// Firebase Configuration - Theta Dynamics Authentication
const firebaseConfig = {
  apiKey: "AIzaSyClVRzELcI0VfU73bXQaXun58ZbMl6MLb0",
  authDomain: "saas-421ae.firebaseapp.com",
  projectId: "saas-421ae",
  appId: "1:101673631672:web:02556aa4ca2f1f6209d94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);

// Export Google Provider
export const googleProvider = new GoogleAuthProvider();

// Export authentication methods
export const signInWithPopup = firebaseSignInWithPopup;
export const signOut = firebaseSignOut;

// Export GoogleAuthProvider class for creating new instances
export { GoogleAuthProvider };
