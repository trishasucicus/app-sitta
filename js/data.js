var dataPengguna = [
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

const dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg",
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg",
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg",
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg",
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpeg",
  },
];

// Isi Tabel
function isiTabel() {
  const tbody = document.querySelector("#tabelBahanAjar tbody");
  dataBahanAjar.forEach((item, index) => {
    const row = document.createElement("tr");

    // No otomatis
    const noCell = document.createElement("td");
    noCell.textContent = index + 1;
    row.appendChild(noCell);

    // Cover
    const coverTabel = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.cover;
    img.alt = "Cover";
    coverTabel.appendChild(img);
    row.appendChild(coverTabel);

    // Kode Lokasi
    const kodeLokasiTabel = document.createElement("td");
    kodeLokasiTabel.textContent = item.kodeLokasi;
    row.appendChild(kodeLokasiTabel);

    // Kode Barang
    const kodeBarangTabel = document.createElement("td");
    kodeBarangTabel.textContent = item.kodeBarang;
    row.appendChild(kodeBarangTabel);

    // Nama Barang
    const namaTabel = document.createElement("td");
    namaTabel.textContent = item.namaBarang;
    row.appendChild(namaTabel);

    // Jenis Barang
    const jenisTabel = document.createElement("td");
    jenisTabel.textContent = item.jenisBarang;
    row.appendChild(jenisTabel);

    // Edisi
    const edisiTabel = document.createElement("td");
    edisiTabel.textContent = item.edisi;
    row.appendChild(edisiTabel);

    //  Stok
    const stokTabel = document.createElement("td");
    stokTabel.textContent = item.stok;
    row.appendChild(stokTabel);

    tbody.appendChild(row);
  });
}

window.onload = isiTabel;

const dataTracking = {
  2023001234: {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  2023005678: {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};

// untuk data tracking
const searchBtn = document.getElementById("searchBtn");
const nomorDOInput = document.getElementById("nomorDO");
const resultDiv = document.getElementById("result");
const modal = document.getElementById("modalData");
const closeBtn = document.getElementsByClassName("close")[0];

searchBtn.addEventListener("click", function () {
  const nomor = nomorDOInput.value.trim();
  if (nomor in dataTracking) {
    const data = dataTracking[nomor];
    displayResult(data);
  } else {
    showModal();
  }
});

function displayResult(data) {
  resultDiv.innerHTML = `
   <div class="detail">
      <h2>Detail Pengiriman</h2>
      <p><s>Nomor DO : </s> ${data.nomorDO}</p>
      <p><s>Nama : </s> ${data.nama}</p>
      <p><s>Status : </s> ${data.status}</p>
      <p><s>Ekspedisi : </s> ${data.ekspedisi}</p>
      <p><s>Tanggal Kirim : </s> ${data.tanggalKirim}</p>
      <p><s>Paket : </s> ${data.paket}</p>
      <p><s>Total : </s> ${data.total}</p>
    </div>
    <div class="table-paket">
        <h3>Perjalanan Paket</h3>
        <table class="tabel-tracking">
            <thead>
                <tr>
                    <th>Waktu</th>
                    <th>Keterangan</th>
                </tr>
            </thead>
            <tbody>
             ${data.perjalanan
               .map(
                 (item) => `
             <tr>
              <td>${item.waktu}</td>
              <td>${item.keterangan}</td>
              </tr>
              `
               )
               .join("")}
            </tbody>
        </table>
    </div>
    `;
}

function showModal() {
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
