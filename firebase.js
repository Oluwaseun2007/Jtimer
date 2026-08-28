import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { 
  getFirestore,
  doc,
  setDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyA_9Tt5KVym3BGOxiD4iPX_2_F7Ba7f0vM",
  authDomain: "church-timer-2026.firebaseapp.com",
  projectId: "church-timer-2026",
  storageBucket: "church-timer-2026.firebasestorage.app",
  messagingSenderId: "678089049290",
  appId: "1:678089049290:web:0315d834d862ad6b8ae033"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
  doc,
  setDoc,
  onSnapshot
};
