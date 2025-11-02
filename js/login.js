const loginAkun = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
  },
];

// Validasi email
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// Cek login
function checkLogin(email, password) {
  return loginAkun.some(
    (account) => account.email === email && account.password === password
  );
}

// Event Listener
document
  .getElementById("formLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLgn").value.trim();
    const password = document.getElementById("passwordLgn").value;

    // Form Validation
    if (!email) {
      alert("Email harus di isi!");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Format email tidak valid!");
      return;
    }
    if (!password) {
      alert("Password harus di isi!");
      return;
    }

    //Cek Login
    if (checkLogin(email, password)) {
      alert("Login Berhasil");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 10);
    } else {
      alert("Email atau Password salah!");
    }
  });

// Modal Lupa Password
const lupaModal = document.getElementById("lupaPassm");
const akunBarum = document.getElementById("buatAkun");

document.getElementById("lupaPass").onclick = () =>
  (lupaModal.style.display = "block");
document.getElementById("regisBtn").onclick = () =>
  (akunBarum.style.display = "block");

document.querySelectorAll(".close").forEach(
  (close) =>
    (close.onclick = () => {
      lupaModal.style.display = "none";
      akunBarum.style.display = "none";
    })
);

// Modal Akun Baru
