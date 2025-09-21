const auth = firebase.auth();
const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");

auth.onAuthStateChanged(user => {
  if (user) {
    userName.textContent = user.displayName || user.email;
    // Dummy stats — later connect to Firestore if you want points/badges
    document.getElementById("points").textContent = "150";
    document.getElementById("badges").textContent = "Soil Saver, Water Guardian";
  } else {
    window.location.href = "login.html";
  }
});

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => window.location.href = "index.html");
  });
}
