import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "progectlearnlingo.firebaseapp.com",
  projectId: "progectlearnlingo",
  storageBucket: "progectlearnlingo.appspot.com",
  messagingSenderId: "977160093093",
  appId: "1:977160093093:web:8717fa7292462eab36fc4c",
};

export const app = initializeApp(firebaseConfig);
