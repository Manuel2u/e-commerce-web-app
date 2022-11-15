import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBr0hS_6wi1hYvBTAl0XKhcQnaCKlZ5VaM",
  authDomain: "e-commerce-web-app-e4afd.firebaseapp.com",
  projectId: "e-commerce-web-app-e4afd",
  storageBucket: "e-commerce-web-app-e4afd.appspot.com",
  messagingSenderId: "1033866940689",
  appId: "1:1033866940689:web:08ee6dd5dc0f7d65b7bcb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)