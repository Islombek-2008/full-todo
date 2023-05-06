import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoMBnyVE-Tvhna6TH-YFJE_vvvcDQfdv0",
  authDomain: "todo-1811b.firebaseapp.com",
  projectId: "todo-1811b",
  storageBucket: "todo-1811b.appspot.com",
  messagingSenderId: "108563061512",
  appId: "1:108563061512:web:d3aef234ffd833e130aabd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
