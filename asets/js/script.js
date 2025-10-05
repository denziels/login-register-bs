const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "index.html";
  });
}

// === LOGIN ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("Belum ada akun terdaftar. Silakan daftar terlebih dahulu!");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login berhasil!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau kata sandi salah!");
    }
  });
}

const userName = document.getElementById("userName");
if (userName) {
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "index.html";
  } else {
    userName.textContent = storedUser?.name || "Pengguna";
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logout berhasil!");
    window.location.href = "index.html";
  });
}
