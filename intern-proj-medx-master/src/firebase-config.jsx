import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdD_epnUlvd3ocGz5-R4IiJgx8sk8WRRw",
  authDomain: "medx-c7fbb.firebaseapp.com",
  projectId: "medx-c7fbb",
  storageBucket: "medx-c7fbb.appspot.com",
  messagingSenderId: "207853246495",
  appId: "1:207853246495:web:0c7ee107c4498501465d2a",
  measurementId: "G-N0JKHC47ZS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
