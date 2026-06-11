// =============================================
// POOL SOAL — 15 soal per level
// Setiap percobaan diambil 10 soal secara acak
// =============================================
var soalPool = {

  mudah: [
    { soal: "Apa kepanjangan dari CPU?", opsi: ["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing Unit"], jawaban: 0, pembahasan: "CPU (Central Processing Unit) adalah komponen utama komputer yang berfungsi sebagai otak untuk memproses instruksi." },
    { soal: "Manakah yang merupakan contoh perangkat OUTPUT komputer?", opsi: ["Keyboard","Mouse","Monitor","Scanner"], jawaban: 2, pembahasan: "Monitor adalah perangkat output karena menampilkan hasil pemrosesan. Keyboard, Mouse, dan Scanner adalah perangkat input." },
    { soal: "Dalam berpikir komputasional, proses memecah masalah besar menjadi bagian-bagian kecil disebut...", opsi: ["Abstraksi","Dekomposisi","Algoritma","Pengenalan Pola"], jawaban: 1, pembahasan: "Dekomposisi adalah pilar berpikir komputasional: memecah masalah kompleks menjadi sub-masalah yang lebih kecil." },
    { soal: "Jaringan komputer yang mencakup area satu gedung atau kampus disebut...", opsi: ["WAN","MAN","LAN","PAN"], jawaban: 2, pembahasan: "LAN (Local Area Network) mencakup area terbatas seperti satu gedung atau kampus." },
    { soal: "Apa fungsi dari DNS dalam jaringan internet?", opsi: ["Mengamankan koneksi internet","Menerjemahkan nama domain menjadi alamat IP","Mengatur kecepatan internet","Memblokir situs berbahaya"], jawaban: 1, pembahasan: "DNS (Domain Name System) menerjemahkan nama domain seperti google.com menjadi alamat IP yang digunakan komputer." },
    { soal: "Manakah yang merupakan contoh data kuantitatif?", opsi: ["Warna rambut","Jenis kelamin","Tinggi badan 165 cm","Nama kota"], jawaban: 2, pembahasan: "Data kuantitatif dapat diukur dalam bentuk angka. Tinggi badan 165 cm adalah contoh data kuantitatif kontinu." },
    { soal: "Algoritma Bubble Sort memiliki kompleksitas waktu...", opsi: ["O(1)","O(log n)","O(n)","O(n²)"], jawaban: 3, pembahasan: "Bubble Sort memiliki kompleksitas O(n²) karena menggunakan dua loop bersarang." },
    { soal: "Perangkat yang menghubungkan dua jaringan berbeda dan menentukan jalur terbaik pengiriman data disebut...", opsi: ["Hub","Switch","Router","Modem"], jawaban: 2, pembahasan: "Router menghubungkan jaringan berbeda dan menentukan jalur terbaik menggunakan alamat IP (Layer 3 OSI)." },
    { soal: "Manakah yang termasuk perangkat lunak sistem operasi?", opsi: ["Microsoft Word","Google Chrome","Windows 11","Adobe Photoshop"], jawaban: 2, pembahasan: "Windows 11 adalah sistem operasi. Word dan Photoshop adalah aplikasi, Chrome adalah browser." },
    { soal: "Satuan penyimpanan data terkecil dalam komputer adalah...", opsi: ["Byte","Kilobyte","Bit","Megabyte"], jawaban: 2, pembahasan: "Bit (binary digit) adalah satuan data terkecil, bernilai 0 atau 1. 8 bit = 1 Byte." },
    { soal: "Proses menyederhanakan masalah dengan mengabaikan detail tidak relevan dalam berpikir komputasional disebut...", opsi: ["Dekomposisi","Algoritma","Abstraksi","Pengenalan Pola"], jawaban: 2, pembahasan: "Abstraksi: fokus pada informasi penting dan abaikan detail yang tidak relevan untuk memecahkan masalah." },
    { soal: "HTTP adalah singkatan dari...", opsi: ["HyperText Transfer Protocol","High Transfer Text Protocol","HyperText Technical Process","Hyper Transport Text Protocol"], jawaban: 0, pembahasan: "HTTP (HyperText Transfer Protocol) adalah protokol standar untuk transfer data di World Wide Web." },
    { soal: "Jenis memori yang bersifat sementara (hilang saat komputer dimatikan) adalah...", opsi: ["ROM","Hard Disk","RAM","Flash Drive"], jawaban: 2, pembahasan: "RAM (Random Access Memory) bersifat sementara — data hilang saat komputer dimatikan." },
    { soal: "Manakah yang merupakan contoh data kualitatif?", opsi: ["Nilai ujian 85","Tinggi badan 170 cm","Warna favorit merah","Berat badan 60 kg"], jawaban: 2, pembahasan: "Data kualitatif bersifat deskriptif dan tidak berupa angka. Warna favorit 'merah' adalah contoh data kualitatif nominal." },
    { soal: "Dalam algoritma, struktur yang mengulang instruksi selama kondisi bernilai benar disebut...", opsi: ["Sekuensial","Seleksi","Perulangan (Iterasi)","Rekursi"], jawaban: 2, pembahasan: "Struktur perulangan (FOR, WHILE, DO-WHILE) mengulang instruksi selama kondisi tertentu masih terpenuhi." }
  ],

  sedang: [
    { soal: "Pada model OSI, layer manakah yang bertanggung jawab untuk routing paket data?", opsi: ["Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)","Layer 5 (Session)"], jawaban: 1, pembahasan: "Layer 3 (Network Layer) bertanggung jawab untuk routing dan pengalamatan logis. Router bekerja pada layer ini." },
    { soal: "Manakah pernyataan BENAR tentang Binary Search?", opsi: ["Dapat digunakan pada array tidak terurut","Memiliki kompleksitas O(n²)","Array harus terurut sebelum pencarian","Selalu lebih lambat dari Linear Search"], jawaban: 2, pembahasan: "Binary Search mensyaratkan array harus terurut. Kompleksitasnya O(log n), jauh lebih efisien dari Linear Search O(n)." },
    { soal: "Dalam OOP, konsep menyembunyikan detail implementasi dan hanya mengekspos antarmuka disebut...", opsi: ["Inheritance","Polymorphism","Encapsulation","Abstraction"], jawaban: 2, pembahasan: "Encapsulation menyembunyikan detail implementasi internal dan hanya mengekspos interface yang diperlukan." },
    { soal: "Topologi jaringan yang paling andal karena setiap node terhubung ke semua node lainnya adalah...", opsi: ["Topologi Bus","Topologi Star","Topologi Ring","Topologi Mesh"], jawaban: 3, pembahasan: "Topologi Mesh: setiap node terhubung ke semua node lain. Jika satu jalur rusak, data melalui jalur alternatif." },
    { soal: "Big Data dicirikan oleh 5V. Manakah yang BUKAN termasuk 5V Big Data?", opsi: ["Volume","Velocity","Visibility","Veracity"], jawaban: 2, pembahasan: "5V Big Data: Volume, Velocity, Variety, Veracity, Value. 'Visibility' bukan bagian dari karakteristik 5V Big Data." },
    { soal: "Dalam algoritma rekursi, apa yang dimaksud 'base case'?", opsi: ["Kasus pertama yang dijalankan","Kondisi berhenti yang mencegah rekursi tak terbatas","Kasus paling kompleks","Parameter pertama fungsi"], jawaban: 1, pembahasan: "Base case adalah kondisi berhenti rekursi. Tanpa base case → infinite recursion → stack overflow." },
    { soal: "Manakah yang BUKAN ancaman keamanan jaringan?", opsi: ["DDoS Attack","Phishing","Firewall","Ransomware"], jawaban: 2, pembahasan: "Firewall adalah MEKANISME KEAMANAN yang memfilter traffic, bukan ancaman. DDoS, Phishing, Ransomware adalah ancaman." },
    { soal: "Dalam OOP, konsep kelas anak mewarisi atribut dan metode dari kelas induk disebut...", opsi: ["Encapsulation","Inheritance","Polymorphism","Abstraction"], jawaban: 1, pembahasan: "Inheritance (pewarisan) memungkinkan kelas anak mewarisi atribut dan metode dari kelas induk, mendukung reusability." },
    { soal: "Algoritma pencarian paling efisien untuk data yang sudah terurut adalah...", opsi: ["Linear Search","Sequential Search","Binary Search","Bubble Search"], jawaban: 2, pembahasan: "Binary Search O(log n) paling efisien untuk data terurut — membagi separuh ruang pencarian setiap langkah." },
    { soal: "Nilai yang membagi data terurut menjadi dua bagian sama besar disebut...", opsi: ["Mean","Median","Modus","Range"], jawaban: 1, pembahasan: "Median adalah nilai tengah data yang telah diurutkan. Tidak terpengaruh oleh outlier." },
    { soal: "Protokol yang menjamin pengiriman data dengan mekanisme acknowledgment disebut...", opsi: ["UDP","IP","TCP","HTTP"], jawaban: 2, pembahasan: "TCP (Transmission Control Protocol) connection-oriented dan menjamin pengiriman data via acknowledgment dan retransmission." },
    { soal: "Ukuran penyebaran data yang tidak terpengaruh nilai ekstrem (outlier) adalah...", opsi: ["Range","Varians","Standar Deviasi","IQR (Interquartile Range)"], jawaban: 3, pembahasan: "IQR (Q3-Q1) mengukur penyebaran 50% data tengah sehingga tidak terpengaruh outlier." },
    { soal: "Model OSI terdiri dari berapa layer?", opsi: ["4 layer","5 layer","6 layer","7 layer"], jawaban: 3, pembahasan: "Model OSI terdiri dari 7 layer: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
    { soal: "Dalam pemrograman, tipe data yang hanya bernilai True atau False disebut...", opsi: ["Integer","String","Boolean","Float"], jawaban: 2, pembahasan: "Boolean adalah tipe data logika dengan dua nilai: True (benar) atau False (salah)." },
    { soal: "Prinsip FIFO (First In First Out) diterapkan pada struktur data...", opsi: ["Stack","Queue","Array","Tree"], jawaban: 1, pembahasan: "Queue (antrian) menerapkan FIFO — elemen yang pertama masuk adalah yang pertama keluar." }
  ],

  sulit: [
    { soal: "Array [3,1,4,1,5,9,2,6]. Setelah satu pass Bubble Sort, elemen mana yang sudah di posisi akhirnya?", opsi: ["Elemen terkecil (1) di posisi pertama","Elemen terbesar (9) di posisi terakhir","Semua elemen sudah terurut","Tidak ada elemen di posisi akhir"], jawaban: 1, pembahasan: "Setiap pass Bubble Sort membawa elemen TERBESAR ke posisi akhir. Setelah pass pertama, angka 9 berada di posisi terakhir." },
    { soal: "Jaringan 192.168.10.0/26 memiliki berapa jumlah host yang dapat digunakan?", opsi: ["30 host","62 host","126 host","254 host"], jawaban: 1, pembahasan: "/26 → 6 bit host → 2⁶=64 alamat. Dikurangi network address dan broadcast = 62 host yang dapat digunakan." },
    { soal: "Manakah pernyataan BENAR tentang perbedaan TCP dan UDP?", opsi: ["UDP lebih andal dari TCP","TCP adalah connectionless sedangkan UDP connection-oriented","TCP menjamin pengiriman data; UDP tidak, tapi UDP lebih cepat","Keduanya punya error recovery sama"], jawaban: 2, pembahasan: "TCP connection-oriented dan menjamin pengiriman via acknowledgment. UDP connectionless, tidak menjamin pengiriman tapi overhead lebih kecil." },
    { soal: "Distribusi data right-skewed — ukuran pemusatan yang paling tepat digunakan adalah...", opsi: ["Mean, karena menggunakan semua data","Median, karena tidak terpengaruh outlier","Modus, karena paling sering muncul","Range, karena menunjukkan penyebaran"], jawaban: 1, pembahasan: "Pada distribusi miring (skewed), median lebih representatif karena tidak terpengaruh outlier. Mean tertarik ke arah ekor distribusi." },
    { soal: "Serangan Man-in-the-Middle (MitM) paling efektif dicegah dengan...", opsi: ["Antivirus yang diperbarui","Enkripsi end-to-end dan sertifikat SSL/TLS yang valid","Password yang kuat","Firewall yang dikonfigurasi"], jawaban: 1, pembahasan: "Enkripsi end-to-end memastikan hanya pengirim & penerima bisa baca pesan. SSL/TLS memverifikasi identitas server." },
    { soal: "Mengapa Merge Sort O(n log n) lebih efisien dari Bubble Sort O(n²) untuk data besar?", opsi: ["Merge Sort pakai lebih sedikit memori","Merge Sort pakai divide and conquer yang mengurangi perbandingan secara signifikan","Merge Sort hanya bekerja pada data terurut","Merge Sort tidak perlu perbandingan"], jawaban: 1, pembahasan: "Merge Sort divide and conquer: O(n log n). Untuk n=1000: Merge Sort ~10.000 vs Bubble Sort ~1.000.000 operasi." },
    { soal: "Kelas 'Kucing' mewarisi 'Hewan' dan mendefinisikan ulang metode bersuara(). Konsep OOP apa yang diterapkan?", opsi: ["Encapsulation","Abstraction","Inheritance dan Polymorphism","Hanya Inheritance"], jawaban: 2, pembahasan: "Dua konsep sekaligus: Inheritance (Kucing mewarisi Hewan) + Polymorphism/Method Overriding (mendefinisikan ulang bersuara())." },
    { soal: "Pada IPv4, berapa jumlah bit yang digunakan untuk alamat IP?", opsi: ["16 bit","32 bit","64 bit","128 bit"], jawaban: 1, pembahasan: "IPv4 menggunakan 32 bit (4 oktet × 8 bit) sehingga tersedia ~4,3 miliar alamat. IPv6 menggunakan 128 bit." },
    { soal: "Dalam Big Data, karakteristik yang menggambarkan kecepatan data dihasilkan secara real-time disebut...", opsi: ["Volume","Velocity","Variety","Veracity"], jawaban: 1, pembahasan: "Velocity: kecepatan data dihasilkan dan harus diproses secara real-time, seperti data transaksi perbankan." },
    { soal: "Notasi Big-O yang menggambarkan algoritma dengan kinerja TERBAIK untuk input besar adalah...", opsi: ["O(n²)","O(n log n)","O(n)","O(log n)"], jawaban: 3, pembahasan: "O(log n) pertumbuhannya paling lambat di antara pilihan. Urutan: O(1) > O(log n) > O(n) > O(n log n) > O(n²)." },
    { soal: "Stack menerapkan LIFO. Jika Push(1), Push(2), Push(3) kemudian Pop() — nilai yang dikeluarkan adalah...", opsi: ["1","2","3","Semua nilai dikeluarkan"], jawaban: 2, pembahasan: "LIFO (Last In First Out): elemen terakhir masuk Push(3) adalah yang pertama keluar saat Pop(). Hasilnya = 3." },
    { soal: "Teknik keamanan yang membuat koneksi aman melalui jaringan publik seolah koneksi privat disebut...", opsi: ["Firewall","VPN (Virtual Private Network)","DNS","Proxy"], jawaban: 1, pembahasan: "VPN membuat tunnel terenkripsi melalui jaringan publik, sehingga koneksi terlihat seperti berasal dari jaringan privat." },
    { soal: "Apa yang terjadi jika base case dalam rekursi tidak pernah tercapai?", opsi: ["Program berjalan lebih cepat","Program langsung berhenti","Stack overflow karena rekursi tak terbatas","Program menghasilkan output kosong"], jawaban: 2, pembahasan: "Tanpa base case yang tercapai, fungsi memanggil dirinya terus-menerus → memori stack habis → Stack Overflow Error." },
    { soal: "Enkripsi asimetris menggunakan dua kunci. Kunci yang dibagikan ke publik untuk enkripsi disebut...", opsi: ["Private Key","Secret Key","Public Key","Session Key"], jawaban: 2, pembahasan: "Enkripsi asimetris: Public Key untuk enkripsi (boleh dibagikan), Private Key untuk dekripsi (rahasia). Digunakan di HTTPS/SSL." },
    { soal: "Manakah yang menggambarkan Topologi Star dengan tepat?", opsi: ["Semua komputer terhubung ke satu kabel utama","Setiap komputer terhubung ke dua komputer membentuk cincin","Semua komputer terhubung ke perangkat pusat (switch/hub)","Setiap komputer terhubung langsung ke semua komputer lain"], jawaban: 2, pembahasan: "Topologi Star: semua komputer terhubung ke perangkat pusat (hub/switch). Topologi paling umum di jaringan LAN modern." }
  ]
};

// ===== HELPER: Acak dan ambil n soal =====
function acakSoal(level, jumlah) {
  var pool = soalPool[level].slice();
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
  return pool.slice(0, jumlah);
}

// ===== KONSTANTA =====
var JUMLAH_SOAL = 10;
var POIN_BENAR  = 10;
var POIN_SALAH  = -5;

// ===== STATE =====
var kuisState = {
  level     : null,
  soalIndex : 0,
  soalAktif : [],
  skor      : { mudah: null, sedang: null, sulit: null },
  lulus     : { mudah: false, sedang: false, sulit: false },
  percobaan : { mudah: 0, sedang: 0, sulit: 0 },
  poin      : 0,
  benar     : 0,
  salah     : 0,
  terjawab  : false
};

// ===== INIT =====
window.initKuis = function () {
  kuisState.level = null;
  window.renderKuisMenu();
};

// ===== MENU =====
window.renderKuisMenu = function () {
  var s = kuisState.skor;
  var l = kuisState.lulus;
  var p = kuisState.percobaan;

  function kartu(id, emoji, label, desk, unlocked) {
    var lulus  = l[id];
    var coba   = p[id];
    var skor   = s[id];
    var badge  = lulus
      ? '<span style="position:absolute;top:10px;right:12px;color:var(--success);font-size:1.2rem"><i class="fas fa-check-circle"></i></span>'
      : (!unlocked ? '<span style="position:absolute;top:10px;right:12px;color:var(--text3);font-size:1.1rem"><i class="fas fa-lock"></i></span>' : '');
    var info   = lulus
      ? '<p style="color:var(--success);font-weight:700;margin-top:6px;font-size:0.85rem">✓ LULUS · Skor: ' + skor + '</p>'
      : (coba > 0 ? '<p style="color:var(--danger);font-size:0.8rem;margin-top:6px">Percobaan ke-' + coba + ' · Belum lulus</p>' : '');
    var kunci  = !unlocked && !lulus
      ? "showModal('🔒','Level Terkunci','Selesaikan level " + (id === 'sedang' ? 'Mudah' : 'Sedang') + " dengan sempurna (10/10 benar) terlebih dahulu!')"
      : "mulaiKuis('" + id + "')";
    return '<div class="level-card ' + id + ' ' + (unlocked ? 'unlocked' : 'locked') + '" onclick="' + kunci + '" style="position:relative;cursor:' + (unlocked ? 'pointer' : 'not-allowed') + '">'
      + badge + '<div class="level-icon">' + emoji + '</div>'
      + '<h3>' + label + '</h3><p>' + desk + '</p>' + info + '</div>';
  }

  var rekapHtml = '';
  if (s.mudah !== null || s.sedang !== null || s.sulit !== null) {
    rekapHtml = '<div class="score-summary"><h4><i class="fas fa-chart-bar"></i> Rekap Skor Terbaik</h4>'
      + (s.mudah  !== null ? '<div class="score-row"><span>Level Mudah</span><span style="color:var(--success)">'  + s.mudah  + ' poin ' + (l.mudah  ? '<i class="fas fa-check-circle"></i>' : '') + '</span></div>' : '')
      + (s.sedang !== null ? '<div class="score-row"><span>Level Sedang</span><span style="color:var(--accent)">'  + s.sedang + ' poin ' + (l.sedang ? '<i class="fas fa-check-circle"></i>' : '') + '</span></div>' : '')
      + (s.sulit  !== null ? '<div class="score-row"><span>Level Sulit</span><span style="color:var(--danger)">'   + s.sulit  + ' poin ' + (l.sulit  ? '<i class="fas fa-check-circle"></i>' : '') + '</span></div>' : '');
    if (l.mudah && l.sedang && l.sulit) {
      rekapHtml += '<div class="score-row" style="font-weight:700"><span>🏆 Total Skor</span><span style="color:var(--primary-light)">' + ((s.mudah||0)+(s.sedang||0)+(s.sulit||0)) + ' poin</span></div>';
    }
    rekapHtml += '</div>';
  }

  var ada = s.mudah !== null || s.sedang !== null || s.sulit !== null;

  document.getElementById('kuisContainer').innerHTML =
    '<div class="kuis-menu">'
    + '<h2><i class="fas fa-question-circle"></i> Kuis Informatika</h2>'
    + '<p>Jawab <strong>10 soal</strong> dengan <strong>benar semua (10/10)</strong> untuk membuka level berikutnya.<br>Soal diacak baru setiap percobaan.</p>'
    + '<div class="level-cards">'
    + kartu('mudah',  '😊', 'Mudah',  '10 soal · Konsep dasar',       true)
    + kartu('sedang', '🤔', 'Sedang', '10 soal · Pemahaman mendalam',  l.mudah)
    + kartu('sulit',  '😤', 'Sulit',  '10 soal · Analisis & penerapan', l.sedang)
    + '</div>'
    + rekapHtml
    + (ada ? '<button class="btn-secondary" onclick="resetKuis()" style="margin-top:1rem"><i class="fas fa-redo"></i> Reset Semua</button>' : '')
    + '</div>';
};

// ===== MULAI KUIS =====
window.mulaiKuis = function (level) {
  kuisState.level     = level;
  kuisState.soalIndex = 0;
  kuisState.soalAktif = acakSoal(level, JUMLAH_SOAL);
  kuisState.poin      = 0;
  kuisState.benar     = 0;
  kuisState.salah     = 0;
  kuisState.terjawab  = false;
  kuisState.percobaan[level]++;
  window.renderSoal();
};

// ===== RENDER SOAL =====
window.renderSoal = function () {
  var level  = kuisState.level;
  var idx    = kuisState.soalIndex;
  var soal   = kuisState.soalAktif[idx];
  var total  = JUMLAH_SOAL;
  var prog   = Math.round((idx / total) * 100);
  var label  = { mudah:'😊 Mudah', sedang:'🤔 Sedang', sulit:'😤 Sulit' }[level];
  var warna  = { mudah:'var(--success)', sedang:'var(--accent)', sulit:'var(--danger)' }[level];
  var isLast = (idx + 1 >= total);

  var opsiHtml = soal.opsi.map(function(op, i){
    return '<div class="option" id="opt-' + i + '" onclick="pilihJawaban(' + i + ')">'
         + '<div class="option-letter">' + String.fromCharCode(65+i) + '</div>'
         + '<span>' + op + '</span></div>';
  }).join('');

  document.getElementById('kuisContainer').innerHTML =
    '<div class="soal-header">'
    + '<h3 style="color:' + warna + '">' + label + '</h3>'
    + '<div class="soal-progress">'
    + '<span style="font-size:0.82rem;color:var(--text2)">Soal ' + (idx+1) + ' / ' + total + '</span>'
    + '<div class="progress-bar"><div class="progress-fill" style="width:' + prog + '%"></div></div>'
    + '<div class="soal-score"><i class="fas fa-star"></i> ' + kuisState.poin + ' poin</div>'
    + '</div></div>'
    + '<div class="soal-card">'
    + '<div class="soal-num">Pertanyaan ' + (idx+1) + ' dari ' + total + '</div>'
    + '<div class="soal-text">' + soal.soal + '</div>'
    + '<div class="options">' + opsiHtml + '</div>'
    + '<div class="soal-feedback" id="soalFeedback"></div>'
    + '<div class="soal-nav"><button class="btn-primary" id="btnLanjut" onclick="lanjutSoal()" style="display:none">'
    + (isLast ? 'Lihat Hasil <i class="fas fa-flag-checkered"></i>' : 'Soal Berikutnya <i class="fas fa-arrow-right"></i>')
    + '</button></div></div>';

  kuisState.terjawab = false;
};

// ===== PILIH JAWABAN =====
window.pilihJawaban = function (pilihanIdx) {
  if (kuisState.terjawab) return;
  kuisState.terjawab = true;

  var soal  = kuisState.soalAktif[kuisState.soalIndex];
  var benar = soal.jawaban === pilihanIdx;

  document.querySelectorAll('.option').forEach(function(el){ el.classList.add('disabled'); });
  document.getElementById('opt-' + pilihanIdx).classList.add(benar ? 'correct' : 'wrong');
  if (!benar) document.getElementById('opt-' + soal.jawaban).classList.add('correct');

  if (benar) {
    kuisState.poin  += POIN_BENAR;
    kuisState.benar += 1;
  } else {
    kuisState.poin  += POIN_SALAH;
    if (kuisState.poin < 0) kuisState.poin = 0;
    kuisState.salah += 1;
  }

  var scoreEl = document.querySelector('.soal-score');
  if (scoreEl) scoreEl.innerHTML = '<i class="fas fa-star"></i> ' + kuisState.poin + ' poin';

  var fb = document.getElementById('soalFeedback');
  fb.className = 'soal-feedback show ' + (benar ? 'correct' : 'wrong');
  fb.innerHTML = benar
    ? '<i class="fas fa-check-circle"></i> <strong>Benar!</strong> +' + POIN_BENAR + ' poin. ' + soal.pembahasan
    : '<i class="fas fa-times-circle"></i> <strong>Salah!</strong> ' + POIN_SALAH + ' poin. ' + soal.pembahasan;

  document.getElementById('btnLanjut').style.display = 'inline-flex';
};

// ===== LANJUT SOAL =====
window.lanjutSoal = function () {
  kuisState.soalIndex += 1;
  if (kuisState.soalIndex >= JUMLAH_SOAL) {
    window.renderHasil();
  } else {
    window.renderSoal();
  }
};

// ===== HASIL AKHIR =====
window.renderHasil = function () {
  var level  = kuisState.level;
  var poin   = kuisState.poin;
  var benar  = kuisState.benar;
  var salah  = kuisState.salah;
  var persen = Math.round((benar / JUMLAH_SOAL) * 100);
  var lulus  = (benar === JUMLAH_SOAL);

  // Simpan skor terbaik
  if (kuisState.skor[level] === null || poin > kuisState.skor[level]) {
    kuisState.skor[level] = poin;
  }
  // Tandai lulus hanya jika 10/10 benar
  if (lulus) kuisState.lulus[level] = true;

  var labelMap = { mudah:'Mudah', sedang:'Sedang', sulit:'Sulit' };
  var nextMap  = { mudah:'sedang', sedang:'sulit', sulit:null };
  var next     = nextMap[level];

  var emoji, judul, pesan;
  if (lulus) {
    emoji = '🏆'; judul = 'Sempurna! Level ' + labelMap[level] + ' Selesai!';
    pesan = 'Luar biasa! Semua 10 soal dijawab dengan benar!' + (next ? ' Level ' + labelMap[next] + ' kini terbuka.' : ' Kamu telah menyelesaikan semua level!');
  } else if (persen >= 70) {
    emoji = '😊'; judul = 'Hampir Sempurna!';
    pesan = 'Sayang sekali, masih ada ' + salah + ' soal yang salah. Kamu harus menjawab SEMUA 10 soal dengan benar untuk lulus. Soal baru sudah menunggumu!';
  } else if (persen >= 50) {
    emoji = '📖'; judul = 'Perlu Latihan Lagi';
    pesan = 'Masih ada ' + salah + ' soal yang salah. Kamu harus menjawab 10/10 soal benar untuk lulus. Pelajari materi dulu lalu coba lagi!';
  } else {
    emoji = '📚'; judul = 'Ayo Belajar Lebih Giat!';
    pesan = 'Masih banyak yang perlu dipelajari. Baca materi dengan teliti, lalu coba lagi dengan soal yang sudah diacak ulang!';
  }

  var statusBadge = lulus
    ? '<div style="background:rgba(16,185,129,0.15);border:2px solid var(--success);color:var(--success);padding:10px 24px;border-radius:50px;font-weight:700;display:inline-block;margin-bottom:1.2rem;font-size:1rem"><i class="fas fa-check-circle"></i> LULUS — 10/10 Benar!</div>'
    : '<div style="background:rgba(239,68,68,0.15);border:2px solid var(--danger);color:var(--danger);padding:10px 24px;border-radius:50px;font-weight:700;display:inline-block;margin-bottom:1.2rem;font-size:1rem"><i class="fas fa-times-circle"></i> BELUM LULUS — ' + benar + '/10 Benar</div>';

  var tombol = '';
  if (lulus && next) {
    tombol += '<button class="btn-primary" onclick="mulaiKuis(\'' + next + '\')"><i class="fas fa-unlock"></i> Buka Level ' + labelMap[next] + '</button>';
  }
  tombol += '<button class="btn-secondary" onclick="mulaiKuis(\'' + level + '\')"><i class="fas fa-redo"></i> Coba Lagi (Soal Baru)</button>';
  tombol += '<button class="btn-secondary" onclick="renderKuisMenu()"><i class="fas fa-list"></i> Menu Kuis</button>';

  document.getElementById('kuisContainer').innerHTML =
    '<div class="hasil-container">'
    + '<div class="hasil-icon">' + emoji + '</div>'
    + '<h2>' + judul + '</h2>'
    + '<p>' + pesan + '</p>'
    + '<div class="skor-besar">' + poin + '</div>'
    + '<p style="color:var(--text2);margin-top:-1rem;margin-bottom:1rem">poin</p>'
    + statusBadge
    + '<div class="detail-skor">'
    + '<div class="detail-row"><span>Jawaban Benar</span><span style="color:var(--success)">✓ ' + benar + ' / 10 soal</span></div>'
    + '<div class="detail-row"><span>Jawaban Salah</span><span style="color:var(--danger)">✗ ' + salah + ' soal</span></div>'
    + '<div class="detail-row"><span>Persentase</span><span>' + persen + '%</span></div>'
    + '<div class="detail-row"><span>Percobaan ke-</span><span>' + kuisState.percobaan[level] + '</span></div>'
    + '<div class="detail-row"><span>Skor Terbaik Level Ini</span><span style="color:var(--primary-light)">' + kuisState.skor[level] + ' poin</span></div>'
    + '</div>'
    + '<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem">' + tombol + '</div>'
    + '</div>';
};

// ===== RESET =====
window.resetKuis = function () {
  kuisState.skor      = { mudah: null, sedang: null, sulit: null };
  kuisState.lulus     = { mudah: false, sedang: false, sulit: false };
  kuisState.percobaan = { mudah: 0, sedang: 0, sulit: 0 };
  kuisState.soalAktif = [];
  window.initKuis();
};
