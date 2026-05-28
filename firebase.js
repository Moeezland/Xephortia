import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider,
  deleteUser
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDvRFkA5mDchs0gb24cqtL5AB1fL-7zLd8",
    authDomain: "xephortia-micronation.firebaseapp.com",
    projectId: "xephortia-micronation",
    storageBucket: "xephortia-micronation.firebasestorage.app",
    messagingSenderId: "521046704756",
    appId: "1:521046704756:web:8ca26309135109d0608721"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔴 GOOGLE LOGIN
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  if (result._tokenResponse.isNewUser) {
    alert("Access denied: You are not registered as a citizen.");

    // 🔥 DELETE USER
    await deleteUser(result.user);

    return;
  }

  window.location.href = "index.html";
}

// 🔵 MICROSOFT LOGIN
export async function loginWithMicrosoft() {
  const provider = new OAuthProvider('microsoft.com');
  const result = await signInWithPopup(auth, provider);

  if (result._tokenResponse.isNewUser) {
    alert("Access denied: You are not registered as a citizen.");

    // 🔥 DELETE USER
    await deleteUser(result.user);

    return;
  }

  window.location.href = "index.html";
}