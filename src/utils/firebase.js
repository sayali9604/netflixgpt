// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuNJoPUsRNt0IbB7pEqYJbOsLRtnolqFw",
  authDomain: "netflixgpt-e811a.firebaseapp.com",
  projectId: "netflixgpt-e811a",
  storageBucket: "netflixgpt-e811a.firebasestorage.app",
  messagingSenderId: "814530547985",
  appId: "1:814530547985:web:e2f5ba4d25e95dba567cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();