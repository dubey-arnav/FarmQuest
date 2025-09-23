import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVsFW1PaDDz9ytQQ1TvojlPgiHP1AqBwg",
  authDomain: "farmquest-a5343.firebaseapp.com",
  projectId: "farmquest-a5343",
  storageBucket: "farmquest-a5343.firebasestorage.app",
  messagingSenderId: "423474578623",
  appId: "1:423474578623:web:09754402bdec15cc86320a",
  measurementId: "G-20J3WMNJNV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
