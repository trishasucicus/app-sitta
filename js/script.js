// Fungsi untuk membuat greeting

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return "Selamat Pagi,";
  } else if (hour < 15) {
    return "Selamat Siang,";
  } else if (hour < 18) {
    return "Selamat Sore,";
  } else {
    return "Selamat Malam,";
  }
}

// Menampilkan greeting
document.getElementById("greeting").innerHTML = getGreeting();

// Logout btn
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmLogout) {
      alert("Anda telah keluar");
      window.location.href = "index.html";
    }
  });
});
