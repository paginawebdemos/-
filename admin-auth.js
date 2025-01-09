import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCk5ewxEc66qZ_z2twDZxuy7IiCsZxw0fI",
    authDomain: "iniciar-976bb.firebaseapp.com",
    projectId: "iniciar-976bb",
    storageBucket: "iniciar-976bb.firebasestorage.app",
    messagingSenderId: "197984073992",
    appId: "1:197984073992:web:b595961df52cd60f0494bd"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginSection = document.getElementById("login-section");
const adminSection = document.getElementById("admin-section");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Acceso concedido. Bienvenido al administrador.");
            loginSection.style.display = "none";
            adminSection.style.display = "block";  // Mostrar la sección de administración
        })
        .catch((error) => {
            alert("Error al iniciar sesión: " + error.message);
        });
});
