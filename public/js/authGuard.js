import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export function protectPage() {
  onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = 'login.html'; // redirect if not signed in
  });
}

export async function logoutAndRedirect() {
  await signOut(auth);
  window.location.href = 'index.html';
}
