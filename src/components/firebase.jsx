import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2nRU6nozipJNLORz93dDP2cqqiYnRwK8",
  authDomain: "clone-c0d96.firebaseapp.com",
  projectId: "clone-c0d96",
  storageBucket: "clone-c0d96.appspot.com",
  messagingSenderId: "969608146673",
  appId: "1:969608146673:web:cb5f2d9716acfcbbe58350",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
