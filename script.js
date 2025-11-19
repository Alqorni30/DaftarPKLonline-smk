// === DATA MINAT & LOKASI ===
const dataMinatLokasi = {
  "ATR": {
    "Pembibitan Ternak": [
      "BAROKAH FARM - Ngadiluwih, Kediri",
      "UPTPT-HMT BATU - Junrejo, Batu",
      "BBPP BATU - Songgokerto, Batu",
      "NGANTANG KUD - Ngantang, Malang"
    ],
    "Penggemukan": [
      "IRFA'I GROUP - Plosoklaten",
      "SPR NGUDI REJEKI - Ngadiluwih",
      "SPR NGUDI RUKUN - Gondang, Plosoklaten"
    ],
    "Produksi Susu Sapi": [
      "TRISON - Ngasem, Kediri",
      "UD SULTONI - Garum, Blitar"
    ]
  },
  "ATU": {
    "Pembibitan Ternak": [
      "PT SIDOAGUNG UNGGAS DJAYA - Malang",
      "UPT BRANGGAHAN - Kediri",
      "PT CITRA GIANDRA - Brebes",
      "PT CIPTA TERANG UNGGUL - Kandangan",
      "PT PUTRA PRIMA MANDIRI - Pare",
      "PT SUMBER REJEKI FARM - Gurah",
      "PT SUPER UNGGAS JAYA - Jombang",
      "PT DINAMIKA MEGATAMA CITRA - Mojokerto",
      "PT BUMI LINTANG JAUHAR - Puncu"
    ],
    "Produksi Ayam Petelur": [
      "PT JATINOM INDAH FARM - Kunjang",
      "PT SIDHOTA - Kras",
      "PT MORODADI FARM - Srengat",
      "PT BUKIT KAPUR - Wates",
      "PT ALAM SUBUR - Srengat, Blitar"
    ],
    "Penggemukan": [
      "AMANAH FARM - Gurah"
    ]
  },
  "APAT": {
    "Pembenihan": [
      "Pokdakan Berkah Lele - Kediri",
      "PT. Top Lele - Kediri",
      "Pokdakan Sa Jaya - Kediri",
      "Pokdakan Mina Tani Lestari - Kediri"
    ],
    "Pembesaran": [
      "Kilang Tilapia - Kediri",
      "CV.Kusuma Karya Catfish - Kediri",
      "Pokdakan Ikan Makmur - Kediri",
      "Republik Lele - Kediri"
    ],
    "Budidaya Ikan Hias": [
      "UD. Agung Koi Farm - Kediri",
      "CV. Molly Jaya Indonesia - Kediri",
      "Sarjana Aquatic - Kediri",
      "Sutris Beta Farm - Kediri",
      "Mina Maju Mandiri - Kediri",
      "Agro Koi - Kediri"
    ]
  },
  "APHP": {
    "Bakery & Pastry": [
      "Khiar Bakery - Kediri",
      "Laksana Jaya - Kediri",
      "New Darrel - Kediri",
      "Pie Candaria - Kediri",
      "Roti Josh - Kediri"
    ],
    "Agroindustri": [
      "Kampung Coklat - Blitar",
      "Permata Agroindustri - Batu",
      "Ramayana Agroindustri - Batu",
      "Abon Sapi Najwa - Kediri"
    ],
    "Snack & Olahan": [
      "Violet Snack And Catering - Kediri",
      "Viva Snack - Kediri",
      "Wingko Londo - Kediri",
      "Susu Karunia - Kediri"
    ]
  },
  "ATPH": {
    "Perbenihan": [
      "PT Benih Kelud Nusantara - Kediri",
      "PT Wira Agro Nusantara Sejahtera - Kediri",
      "PT Agri Makmur Pertiwi - Kediri",
      "PT Bisi Internasional Tbk. - Kediri",
      "CV Aura Seed - Kediri",
      "PT Koreana Seed Indonesia - Kediri",
      "Halbanero - Kediri",
      "PT. Restu Agropro Jayamas - Kediri"
    ],
    "Budidaya Hortikultura": [
      "BSIP Jestro Batu - Batu",
      "P4s Hikmah Farm - Kediri",
      "Cv Asri Garden - Kediri",
      "P4S PTO/ Mas Tani Nusantara - Kediri",
      "Kampung Anggrek - Kediri",
      "Hidroponik Melon - Kediri",
      "Petani Muda Agrapana - Kediri"
    ],
    "Pestisida & Pupuk": [
      "PT. Petrosida Gresik - Gresik",
      "PT Syngenta - Kediri"
    ]
  },
  "Broadcasting": {
    "Televisi": [
      "PT Dhoho Media Televisi (Dhoho TV) - Kediri",
      "PT Kediri Global Mediatama (KSTV) - Kediri"
    ],
    "Multimedia Production": [
      "PT. Sonni Media Partner Equipment - Kediri",
      "Mega Film Production - Kediri"
    ]
  },
  "TKR": {
    "Bengkel Mobil": [
      "Prima AC - Kediri",
      "Bengkel Fuad - Kediri",
      "Suzuki UMC Kediri - Kediri",
      "Bengkel Mobil YAP - Kediri",
      "Iqbal Jaya - Kediri",
      "Putra Jaya - Kediri",
      "A Rayyan Auto Service - Kediri",
      "Fauzen Garage - Kediri",
      "FI-Tech Auto Car - Kediri",
      "Raqhma Mobil - Kediri",
      "Sandy Speed - Kediri",
      "Irfai Group - Kediri",
      "Bayu Sakti Auto - Kediri",
      "Yudi Bengkel - Kediri",
      "Banyumili - Kediri"
    ]
  }
};

// === DATA DUDI (Tempat PKL) ===
const rawData = [
  // 1. Agribisnis Ternak Unggas (ATU)
  {
    section: "1. Agribisnis Ternak Unggas (ATU)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "PT. Sidoagung Unggas Djaya", BIDANG_USAHA: "Kemitraan Ayam Pedaging", ALAMAT: "Malang" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "PT. Cipta Terang Unggul", BIDANG_USAHA: "Breeding Ayam Pedaging", ALAMAT: "Kediri" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "PT. Bhumi Lintang Jauhar", BIDANG_USAHA: "Kemitraan Ayam Pedaging", ALAMAT: "Kediri" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Hartawan Farm", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "Cv. Buana Intan Sejati", BIDANG_USAHA: "Ayam Pedaging", ALAMAT: "Blitar" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "Pt. Morodadi", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Blitar" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "Cv. Cahaya Gemilang", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Blitar" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "PT. Sidhota", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "DMC", BIDANG_USAHA: "Breeding Ayam Pedaging", ALAMAT: "Mojokerto" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "PT. Choroen Phokphand", BIDANG_USAHA: "Breeding Ayam Petelur", ALAMAT: "Jombang" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "Cv. Mukti Mulyo", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "Cv. Arga Mulia", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "Cv. Amanah", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 14, TUJUAN_TEMPAT_PKL: "PT. Bukit Kapur", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 15, TUJUAN_TEMPAT_PKL: "Rabbani Fram", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 16, TUJUAN_TEMPAT_PKL: "UPT. Branggahan", BIDANG_USAHA: "Breeding Itik", ALAMAT: "Kediri" },
      { NO: 17, TUJUAN_TEMPAT_PKL: "Pojok PS", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" },
      { NO: 18, TUJUAN_TEMPAT_PKL: "Cv. Matahari Damai Sejahtera", BIDANG_USAHA: "Ayam Petelur", ALAMAT: "Kediri" }
    ]
  },

  // 2. Agribisnis Ternak Ruminansia (ATR)
  {
    section: "2. Agribisnis Ternak Ruminansia (ATR)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "Arto Brother Farm", BIDANG_USAHA: "Budidaya Kambing Etawa", ALAMAT: "Kediri" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "Barokah Farm", BIDANG_USAHA: "Budidaya Domba Potong", ALAMAT: "Kediri" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "KUD Sumber Makmur Ngantang", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Malang" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Saspri Ngadiluwih", BIDANG_USAHA: "Penggemukan Sapi Dan Domba Potong", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "KUD Kasembon", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Malang" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "Trison", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Kediri" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "UPTD Pembibitan Ternak dan Hijauan Makanan Ternak", BIDANG_USAHA: "Peternakan Kambing Perah", ALAMAT: "Malang" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "UD Saputra Jaya", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Jombang" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "KUB Tirtasari Kresna Gumilang", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Malang" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "Saspri Ngadiluwih", BIDANG_USAHA: "Penggemukan Sapi Dan Domba Potong", ALAMAT: "Kediri" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "BBPP Batu", BIDANG_USAHA: "Peternakan Umum", ALAMAT: "Batu" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "Ngudi Rukun", BIDANG_USAHA: "Penggemukan Sapi Potong", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "KPUB Sapi Jaya Kandangan", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Kediri" },
      { NO: 14, TUJUAN_TEMPAT_PKL: "Irfa'i Farm", BIDANG_USAHA: "Penggemukan Sapi Potong Dan Budidaya Sapi Perah", ALAMAT: "Kediri" },
      { NO: 15, TUJUAN_TEMPAT_PKL: "Koperasi Margo Makmur Mandiri", BIDANG_USAHA: "Peternakan Sapi Perah", ALAMAT: "Batu" }
    ]
  },

  // 3. Agribisnis Tanaman Pangan dan Hortikultura (ATPH)
  {
    section: "3. Agribisnis Tanaman Pangan dan Hortikultura (ATPH)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "BSIP Jestro Batu", BIDANG_USAHA: "Budidaya Tanaman Hortikultura Dan Buah Subtropika", ALAMAT: "Batu" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "PT. Petrosida Gresik", BIDANG_USAHA: "Pestisida Dan Pupuk", ALAMAT: "Gresik" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "BSIP JATIM Karangploso", BIDANG_USAHA: "Balai Penerapan Standar Instrumen Pertanian Jatim", ALAMAT: "Malang" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "PT Benih Kelud Nusantara", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "PT Wira Agro Nusantara Sejahtera", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "PT Agri Makmur Pertiwi", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "PT Bisi Internasional Tbk.", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "CV Aura Seed", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "PT Koreana Seed Indonesia", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "P4s Hikmah Farm", BIDANG_USAHA: "Budidaya Tanaman Hortikultura Secara Hidroponik", ALAMAT: "Kediri" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "Cv Asri Garden", BIDANG_USAHA: "Budidaya Anggrek", ALAMAT: "Kediri" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "PT Syngenta", BIDANG_USAHA: "Pestisida Dan Perbenihan Tanaman Pangan", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "Halbanero", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 14, TUJUAN_TEMPAT_PKL: "P4S PTO/ Mas Tani Nusantara", BIDANG_USAHA: "Budidaya Tanaman Hortikultura Secara Organik Di Greenhouse", ALAMAT: "Kediri" },
      { NO: 15, TUJUAN_TEMPAT_PKL: "PT. Restu Agropro Jayamas", BIDANG_USAHA: "Perbenihan Tanaman Hortikultura", ALAMAT: "Kediri" },
      { NO: 16, TUJUAN_TEMPAT_PKL: "Petani Muda Agrapana", BIDANG_USAHA: "Pertanian Integrasi (Pengolahan Pupuk Organik, Hidroponik)", ALAMAT: "Kediri" },
      { NO: 17, TUJUAN_TEMPAT_PKL: "Kampung Anggrek", BIDANG_USAHA: "Budidaya Anggrek", ALAMAT: "Kediri" },
      { NO: 18, TUJUAN_TEMPAT_PKL: "Hidroponik Melon", BIDANG_USAHA: "Hidroponik", ALAMAT: "Kediri" }
    ]
  },

  // 4. Agribisnis Pengolahan Hasil Pertanian (APHP)
  {
    section: "4. Agribisnis Pengolahan Hasil Pertanian (APHP)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "Kampung Coklat - Blitar", BIDANG_USAHA: "Pengolahan Coklat", ALAMAT: "Blitar" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "Permata Agroindustri - Batu", BIDANG_USAHA: "Keripik Dan Dodol Buah", ALAMAT: "Batu" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "Ramayana Agroindustri - Batu", BIDANG_USAHA: "Keripik Dan Dodol Buah", ALAMAT: "Batu" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Abon Sapi Najwa - Kepung", BIDANG_USAHA: "Abon Sapi", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "Khiar Bakery", BIDANG_USAHA: "Bakery", ALAMAT: "Kediri" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "Laksana Jaya", BIDANG_USAHA: "Bakery", ALAMAT: "Kediri" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "New Darrel", BIDANG_USAHA: "Cake And Bakery", ALAMAT: "Kediri" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "Pie Candaria", BIDANG_USAHA: "Pastry", ALAMAT: "Kediri" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "Roti Josh", BIDANG_USAHA: "Bakery", ALAMAT: "Kediri" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "Susu Karunia", BIDANG_USAHA: "Susu", ALAMAT: "Kediri" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "Violet Snack And Catering", BIDANG_USAHA: "Snack Dan Catering", ALAMAT: "Kediri" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "Viva Snack", BIDANG_USAHA: "Snack", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "Wingko Londo", BIDANG_USAHA: "Wingko Dan Gethuk Pisang", ALAMAT: "Kediri" }
    ]
  },

  // 5. Agribisnis Perikanan Air Tawar (APAT)
  {
    section: "5. Agribisnis Perikanan Air Tawar (APAT)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "Pokdakan Berkah Lele", BIDANG_USAHA: "Pembenihan lele", ALAMAT: "Kediri" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "Kilang Tilapia", BIDANG_USAHA: "Pembesaran Nila", ALAMAT: "Kediri" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "CV.Kusuma Karya Catfish", BIDANG_USAHA: "Pembesaran Lele", ALAMAT: "Kediri" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Pokdakan Ikan Makmur", BIDANG_USAHA: "Pembesaran Lele", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "UD. Agung Koi Farm", BIDANG_USAHA: "Budidaya Koi", ALAMAT: "Kediri" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "CV. Molly Jaya Indonesia", BIDANG_USAHA: "Budidaya Ikan Hias", ALAMAT: "Kediri" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "Republik Lele", BIDANG_USAHA: "Pembesaran Lele", ALAMAT: "Kediri" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "PT. Top Lele", BIDANG_USAHA: "Pembenihan dan Pembesaran lele", ALAMAT: "Kediri" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "Pokdakan Sa Jaya", BIDANG_USAHA: "Pembenihan Lele", ALAMAT: "Kediri" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "Pokdakan Mina Tani Lestari", BIDANG_USAHA: "Pembenihan Lele", ALAMAT: "Kediri" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "Sarjana Aquatic", BIDANG_USAHA: "Budidaya Ikan Hias", ALAMAT: "Kediri" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "Sutris Beta Farm", BIDANG_USAHA: "Budidaya Ikan Hias", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "Mina Maju Mandiri", BIDANG_USAHA: "Budidaya Ikan Hias", ALAMAT: "Kediri" },
      { NO: 14, TUJUAN_TEMPAT_PKL: "Agro Koi", BIDANG_USAHA: "Budidaya Koi", ALAMAT: "Kediri" }
    ]
  },

  // 6. Teknik Kendaraan Ringan (TKR)
  {
    section: "6. Teknik Kendaraan Ringan (TKR)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "Prima AC", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "Bengkel Fuad", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "Suzuki UMC Kediri", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Bengkel Mobil YAP", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 5, TUJUAN_TEMPAT_PKL: "Iqbal Jaya", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 6, TUJUAN_TEMPAT_PKL: "Putra Jaya", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 7, TUJUAN_TEMPAT_PKL: "A Rayyan Auto Service", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 8, TUJUAN_TEMPAT_PKL: "Fauzen Garage", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 9, TUJUAN_TEMPAT_PKL: "FI-Tech Auto Car", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 10, TUJUAN_TEMPAT_PKL: "Raqhma Mobil", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 11, TUJUAN_TEMPAT_PKL: "Sandy Speed", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 12, TUJUAN_TEMPAT_PKL: "Irfai Group", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 13, TUJUAN_TEMPAT_PKL: "Bayu Sakti Auto", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 14, TUJUAN_TEMPAT_PKL: "Yudi Bengkel", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" },
      { NO: 15, TUJUAN_TEMPAT_PKL: "Banyumili", BIDANG_USAHA: "Bengkel Mobil", ALAMAT: "Kediri" }
    ]
  },

  // 7. Produksi & Siaran Program Televisi (PSPT)
  {
    section: "7. Produksi & Siaran Program Televisi (PSPT)",
    rows: [
      { NO: 1, TUJUAN_TEMPAT_PKL: "PT Dhoho Media Televisi ( Dhoho TV )", BIDANG_USAHA: "Pertelevisian", ALAMAT: "Kediri" },
      { NO: 2, TUJUAN_TEMPAT_PKL: "PT Kediri Global Mediatama ( KSTV )", BIDANG_USAHA: "Pertelevisian", ALAMAT: "Kediri" },
      { NO: 3, TUJUAN_TEMPAT_PKL: "PT. Sonni Media Partner Equipment", BIDANG_USAHA: "Multimedia", ALAMAT: "Kediri" },
      { NO: 4, TUJUAN_TEMPAT_PKL: "Mega Film Production Kota Kediri", BIDANG_USAHA: "Production House dan Persewaan peralatan Multimedia", ALAMAT: "Kediri" }
    ]
  }
];

// === STORAGE & DATABASE ===
const STORAGE_KEY = 'pkl_pendaftar_v1';
let db = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function saveDB() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

// === NAVIGATION ===
function showPage(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('show'));
  document.getElementById(id).classList.add('show');
}

// === FORM HANDLERS ===
function updateMinat() {
  const jur = document.getElementById('f_jurusan').value;
  const selMinat = document.getElementById('f_minat');
  selMinat.innerHTML = '<option value="">-- Pilih Minat & Bakat --</option>';

  if (dataMinatLokasi[jur]) {
    Object.keys(dataMinatLokasi[jur]).forEach(m => {
      selMinat.innerHTML += `<option value="${m}">${m}</option>`;
    });
  }

  updateLokasi();
}

function updateLokasi() {
  const jur = document.getElementById('f_jurusan').value;
  const minat = document.getElementById('f_minat').value;
  const list = (dataMinatLokasi[jur] && dataMinatLokasi[jur][minat]) ? dataMinatLokasi[jur][minat] : [];

  ['f_lokasi1', 'f_lokasi2', 'f_lokasi3'].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = list.length === 0
      ? '<option value="">-- Pilih Lokasi --</option>'
      : list.map(l => `<option value="${l}">${l}</option>`).join('');
  });
}

// === FORM PENDAFTARAN ===
document.addEventListener('DOMContentLoaded', function() {
  const formDaftar = document.getElementById('formDaftar');
  if (formDaftar) {
    formDaftar.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = f_nama.value.trim();
      const kelas = f_kelas.value.trim();
      const alamat = f_alamat.value.trim();
      const hpSiswa = f_hpSiswa.value.trim();
      const jurusan = f_jurusan.value;
      const lokasi1 = f_lokasi1.value;

      if (!nama || !kelas || !alamat || !hpSiswa || !jurusan || !lokasi1) {
        formMsg.textContent = "Lengkapi data wajib.";
        formMsg.className = "text-sm mt-2 text-red-600 font-semibold";
        return;
      }

      const exists = db.find(
        x => x.nama.toLowerCase() === nama.toLowerCase() &&
             x.kelas.toLowerCase() === kelas.toLowerCase()
      );
      
      if (exists) {
        formMsg.textContent = "Data sudah terdaftar.";
        formMsg.className = "text-sm mt-2 text-red-600 font-semibold";
        return;
      }

      db.push({
        id: Date.now().toString(),
        nama, kelas, alamat,
        hpSiswa, hpAyah: f_hpAyah.value.trim(), hpIbu: f_hpIbu.value.trim(),
        jurusan, minat: f_minat.value,
        lokasi1, lokasi2: f_lokasi2.value, lokasi3: f_lokasi3.value,
        status: 'Terdaftar',
        waktu: new Date().toISOString()
      });

      saveDB();
      formMsg.textContent = "Pendaftaran berhasil!";
      formMsg.className = "text-sm mt-2 text-green-600 font-semibold";
      this.reset();
      updateMinat();
    });
  }

  // Render tabel DUDI
  renderTables();
});

// === CEK STATUS ===
function cekStatus() {
  const q = s_cariNama.value.trim().toLowerCase();
  const rec = db.find(x => x.nama.toLowerCase() === q);

  if (!q) {
    s_hasil.innerHTML = "<p class='text-red-600 font-semibold mt-4'>Masukkan nama.</p>";
    return;
  }
  
  if (!rec) {
    s_hasil.innerHTML = "<p class='text-red-600 font-bold mt-4'>Anda belum mendaftar!</p>";
    return;
  }

  s_hasil.innerHTML = `
    <div class="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
      <table class="w-full">
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50">
            <th class="px-4 py-3 text-left font-semibold text-gray-700 bg-gray-100">Nama</th>
            <td class="px-4 py-3">${rec.nama}</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="px-4 py-3 text-left font-semibold text-gray-700 bg-gray-100">Kelas</th>
            <td class="px-4 py-3">${rec.kelas}</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="px-4 py-3 text-left font-semibold text-gray-700 bg-gray-100">Jurusan</th>
            <td class="px-4 py-3">${rec.jurusan}</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="px-4 py-3 text-left font-semibold text-gray-700 bg-gray-100">Status</th>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">${rec.status}</span></td>
          </tr>
        </tbody>
      </table>
      <div class="p-4 bg-gray-50">
        <button onclick="tampilBukti('${rec.id}')" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Lihat Bukti
        </button>
      </div>
    </div>
  `;
}

// === TAMPIL BUKTI ===
function tampilBukti(idOrName) {
  let rec = null;

  if (idOrName) {
    rec = db.find(x => x.id === idOrName);
  } else {
    const q = b_cariNama.value.trim().toLowerCase();
    rec = db.find(x => x.nama.toLowerCase() === q);
  }

  if (!rec) {
    b_isi.innerHTML = "<p class='text-red-600 font-semibold mt-4'>Data tidak ditemukan.</p>";
    return;
  }

  b_isi.innerHTML = `
    <div class="mt-6 p-6 border-2 border-dashed border-red-500 rounded-lg bg-white">
      <h3 class="text-2xl font-bold text-red-600 mb-4">Bukti Pendaftaran PKL</h3>
      <div class="space-y-2 text-gray-700">
        <p><span class="font-semibold">Nama:</span> ${rec.nama}</p>
        <p><span class="font-semibold">Kelas:</span> ${rec.kelas}</p>
        <p><span class="font-semibold">Alamat:</span> ${rec.alamat}</p>
        <p><span class="font-semibold">No HP Siswa:</span> ${rec.hpSiswa}</p>
        <p><span class="font-semibold">No HP Ayah:</span> ${rec.hpAyah || '-'}</p>
        <p><span class="font-semibold">No HP Ibu:</span> ${rec.hpIbu || '-'}</p>
        <p><span class="font-semibold">Jurusan:</span> ${rec.jurusan}</p>
        <p><span class="font-semibold">Minat:</span> ${rec.minat || '-'}</p>
        <p><span class="font-semibold">Lokasi 1:</span> ${rec.lokasi1}</p>
        <p><span class="font-semibold">Lokasi 2:</span> ${rec.lokasi2 || '-'}</p>
        <p><span class="font-semibold">Lokasi 3:</span> ${rec.lokasi3 || '-'}</p>
        <p><span class="font-semibold">Status:</span> <span class="text-green-600 font-bold">${rec.status}</span></p>
        <p class="text-sm text-gray-500 mt-4">ID: ${rec.id} • Waktu: ${new Date(rec.waktu).toLocaleString('id-ID')}</p>
      </div>
    </div>
  `;
  
  showPage('bukti');
}

// === RENDER TABEL DUDI ===
function createTable(sectionTitle, data) {
  const headers = ["NO", "TUJUAN TEMPAT PKL", "BIDANG USAHA", "ALAMAT"];

  let html = `
    <div class="mb-10 p-5 bg-white rounded-xl shadow-lg border border-blue-100">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-700 pb-2">
        ${sectionTitle}
      </h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-blue-200">
          <thead class="bg-blue-800 sticky top-0">
            <tr>
              ${headers.map(header => `
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  ${header}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${data.map(row => `
              <tr class="hover:bg-blue-50 transition duration-150 ease-in-out">
                <td class="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">${row.NO}</td>
                <td class="px-3 py-3 text-sm text-gray-700">${row.TUJUAN_TEMPAT_PKL}</td>
                <td class="px-3 py-3 text-sm text-gray-700">${row.BIDANG_USAHA || row.BIDEDANG_USAHA || ""}</td>
                <td class="px-3 py-3 whitespace-nowrap text-sm text-gray-700">${row.ALAMAT}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  return html;
}

function renderTables() {
  const container = document.getElementById('data-container');
  if (!container) return;

  let allTablesHtml = '';
  rawData.forEach(sectionData => {
    allTablesHtml += createTable(sectionData.section, sectionData.rows);
  });

  container.innerHTML = allTablesHtml;
}

// Fungsi showPage yang sudah diupdate dengan active state
function showPage(id) {
    // Hide semua section
    document.querySelectorAll('section').forEach(s => s.classList.remove('show'));
    document.getElementById(id).classList.add('show');
    
    // Update active state di navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById('nav-' + id);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Set home as active on load
    const homeLink = document.getElementById('nav-home');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}