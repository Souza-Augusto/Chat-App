import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyAkO3G99Ky-zvyhJJmYsjJqtXeqGkH6zTo",
  authDomain: "chatapp-73197.firebaseapp.com",
  projectId: "chatapp-73197",
  storageBucket: "chatapp-73197.appspot.com",
  messagingSenderId: "1026713878307",
  appId: "1:1026713878307:web:141f9c8680d42cff629696",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const dataBase = getFirestore();
