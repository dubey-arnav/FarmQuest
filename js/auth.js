// Handles login and signup
const auth = firebase.auth();

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => window.location.href = "dashboard.html")
      .catch(err => alert(err.message));
  });
}

// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        return userCredential.user.updateProfile({ displayName: username });
      })
      .then(() => {
        alert("Account created!");
        window.location.href = "login.html";
      })
      .catch(err => alert(err.message));
  });
}
