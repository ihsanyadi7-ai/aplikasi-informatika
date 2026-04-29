const soalData = {
  mudah: [
    {
      soal: "Apa kepanjangan dari CPU?",
      opsi: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
      jawaban: 0,
      pembahasan: "CPU (Central Processing Unit) adalah komponen utama komputer yang berfungsi sebagai otak komputer untuk memproses instruksi."
    },
    {
      soal: "Manakah yang merupakan contoh dari perangkat output komputer?",
      opsi: ["Keyboard", "Mouse", "Monitor", "Scanner"],
      jawaban: 2,
      pembahasan: "Monitor adalah perangkat output karena menampilkan hasil pemrosesan komputer kepada pengguna. Keyboard dan mouse adalah input, scanner juga input."
    },
    {
      soal: "Dalam berpikir komputasional, proses memecah masalah besar menjadi bagian-bagian kecil disebut...",
      opsi: ["Abstraksi", "Dekomposisi", "Algoritma", "Pengenalan Pola"],
      jawaban: 1,
      pembahasan: "Dekomposisi adalah salah satu pilar berpikir komputasional yang berarti memecah masalah kompleks menjadi sub-masalah yang lebih kecil dan mudah diselesaikan."
    },
    {
      soal: "Jaringan komputer yang mencakup area satu gedung atau kampus disebut...",
      opsi: ["WAN", "MAN", "LAN", "PAN"],
      jawaban: 2,
      pembahasan: "LAN (Local Area Network) adalah jaringan yang mencakup area terbatas seperti satu gedung, satu lantai, atau satu kampus."
    },
    {
      soal: "Apa fungsi dari DNS dalam jaringan internet?",
      opsi: ["Mengamankan koneksi internet", "Menerjemahkan nama domain menjadi alamat IP", "Mengatur kecepatan internet", "Memblokir situs berbahaya"],
      jawaban: 1,
      pembahasan: "DNS (Domain Name System) berfungsi menerjemahkan nama domain yang mudah diingat (seperti google.com) menjadi alamat IP yang digunakan komputer."
    },
    {
      soal: "Manakah yang merupakan contoh data kuantitatif?",
      opsi: ["Warna rambut", "Jenis kelamin", "Tinggi badan 165 cm", "Nama kota"],
      jawaban: 2,
      pembahasan: "Data kuantitatif adalah data yang dapat diukur dan dinyatakan dalam bentuk angka. Tinggi badan 165 cm adalah contoh data kuantitatif (kontinu)."
    },
    {
      soal: "Algoritma Bubble Sort memiliki kompleksitas waktu...",
      opsi: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      jawaban: 3,
      pembahasan: "Bubble Sort memiliki kompleksitas waktu O(n²) karena menggunakan dua loop bersarang untuk membandingkan dan menukar elemen."
    }
  ],
  sedang: [
    {
      soal: "Pada model OSI, layer manakah yang bertanggung jawab untuk routing paket data?",
      opsi: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 5 (Session)"],
      jawaban: 1,
      pembahasan: "Layer 3 (Network Layer) bertanggung jawab untuk routing dan pengalamatan logis menggunakan protokol IP. Router bekerja pada layer ini."
    },
    {
      soal: "Manakah pernyataan yang BENAR tentang Binary Search?",
      opsi: ["Dapat digunakan pada array yang tidak terurut", "Memiliki kompleksitas O(n²)", "Array harus terurut sebelum dilakukan pencarian", "Selalu lebih lambat dari Linear Search"],
      jawaban: 2,
      pembahasan: "Binary Search mensyaratkan array harus sudah terurut. Algoritma ini membagi array menjadi dua bagian secara berulang, sehingga memiliki kompleksitas O(log n)."
    },
    {
      soal: "Dalam pemrograman berorientasi objek, konsep menyembunyikan detail implementasi dan hanya mengekspos antarmuka yang diperlukan disebut...",
      opsi: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      jawaban: 2,
      pembahasan: "Encapsulation adalah konsep OOP yang menyembunyikan detail implementasi internal dan hanya mengekspos antarmuka (interface) yang diperlukan kepada pengguna objek."
    },
    {
      soal: "Topologi jaringan yang paling andal karena setiap node terhubung langsung ke semua node lainnya adalah...",
      opsi: ["Topologi Bus", "Topologi Star", "Topologi Ring", "Topologi Mesh"],
      jawaban: 3,
      pembahasan: "Topologi Mesh adalah yang paling andal karena setiap node terhubung langsung ke semua node lainnya. Jika satu jalur rusak, data dapat melalui jalur alternatif."
    },
    {
      soal: "Apa yang dimaksud dengan 'Big Data' dalam konteks analisis data?",
      opsi: ["Data yang hanya berisi angka besar", "Kumpulan data yang sangat besar dan kompleks sehingga tidak dapat diolah dengan alat tradisional", "Database yang digunakan oleh perusahaan besar", "Data yang disimpan di cloud"],
      jawaban: 1,
      pembahasan: "Big Data adalah istilah untuk kumpulan data yang sangat besar dan kompleks (dicirikan oleh 5V: Volume, Velocity, Variety, Veracity, Value) yang tidak dapat diolah dengan alat pengolahan data tradisional."
    },
    {
      soal: "Dalam algoritma rekursi, apa yang dimaksud dengan 'base case'?",
      opsi: ["Kasus pertama yang dijalankan", "Kondisi berhenti yang mencegah rekursi tak terbatas", "Kasus yang paling kompleks", "Parameter pertama fungsi"],
      jawaban: 1,
      pembahasan: "Base case adalah kondisi berhenti dalam rekursi. Tanpa base case, fungsi rekursif akan memanggil dirinya sendiri tanpa henti (infinite recursion) hingga menyebabkan stack overflow."
    },
    {
      soal: "Manakah yang BUKAN merupakan ancaman keamanan jaringan?",
      opsi: ["DDoS Attack", "Phishing", "Firewall", "Ransomware"],
      jawaban: 2,
      pembahasan: "Firewall adalah mekanisme KEAMANAN yang memfilter traffic jaringan, bukan ancaman. DDoS, Phishing, dan Ransomware adalah contoh ancaman keamanan jaringan."
    }
  ],
  sulit: [
    {
      soal: "Sebuah array berisi [3, 1, 4, 1, 5, 9, 2, 6]. Setelah satu iterasi penuh Bubble Sort (pass pertama), elemen manakah yang sudah berada di posisi akhirnya?",
      opsi: ["Elemen terkecil (1) di posisi pertama", "Elemen terbesar (9) di posisi terakhir", "Semua elemen sudah terurut", "Tidak ada elemen yang di posisi akhir"],
      jawaban: 1,
      pembahasan: "Setelah satu pass Bubble Sort, elemen terbesar (9) akan 'menggelembung' ke posisi terakhir. Ini adalah karakteristik Bubble Sort — setiap pass menempatkan elemen terbesar yang belum terurut ke posisi akhirnya."
    },
    {
      soal: "Dalam subnetting IPv4, sebuah jaringan dengan alamat 192.168.10.0/26 memiliki berapa jumlah host yang dapat digunakan?",
      opsi: ["30 host", "62 host", "126 host", "254 host"],
      jawaban: 1,
      pembahasan: "/26 berarti 26 bit untuk network, 6 bit untuk host. Jumlah total alamat = 2⁶ = 64. Dikurangi 2 (network address dan broadcast) = 62 host yang dapat digunakan."
    },
    {
      soal: "Manakah pernyataan yang BENAR tentang perbedaan TCP dan UDP?",
      opsi: ["UDP lebih andal dari TCP karena lebih cepat", "TCP adalah connectionless sedangkan UDP adalah connection-oriented", "TCP menjamin pengiriman data sedangkan UDP tidak, tetapi UDP lebih cepat", "Keduanya memiliki mekanisme error recovery yang sama"],
      jawaban: 2,
      pembahasan: "TCP (Transmission Control Protocol) adalah connection-oriented dan menjamin pengiriman data melalui mekanisme acknowledgment dan retransmission. UDP (User Datagram Protocol) adalah connectionless, tidak menjamin pengiriman, tetapi lebih cepat karena overhead lebih kecil. UDP cocok untuk streaming dan gaming."
    },
    {
      soal: "Dalam analisis data, jika distribusi data sangat miring ke kanan (right-skewed), ukuran pemusatan mana yang paling tepat digunakan?",
      opsi: ["Mean, karena menggunakan semua data", "Median, karena tidak terpengaruh outlier", "Modus, karena paling sering muncul", "Range, karena menunjukkan penyebaran"],
      jawaban: 1,
      pembahasan: "Pada distribusi yang miring (skewed), median lebih tepat digunakan daripada mean karena median tidak terpengaruh oleh nilai ekstrem (outlier). Mean akan tertarik ke arah ekor distribusi, sehingga tidak merepresentasikan pusat data dengan baik."
    },
    {
      soal: "Dalam konteks keamanan siber, serangan 'Man-in-the-Middle' (MitM) dapat dicegah dengan menggunakan...",
      opsi: ["Antivirus yang selalu diperbarui", "Enkripsi end-to-end dan sertifikat SSL/TLS yang valid", "Password yang kuat", "Firewall yang dikonfigurasi dengan benar"],
      jawaban: 1,
      pembahasan: "Serangan MitM dapat dicegah dengan enkripsi end-to-end yang memastikan hanya pengirim dan penerima yang dapat membaca pesan, serta sertifikat SSL/TLS yang valid untuk memverifikasi identitas server. Ini mencegah penyerang menyadap atau memodifikasi komunikasi."
    },
    {
      soal: "Kompleksitas waktu algoritma Merge Sort adalah O(n log n). Mengapa Merge Sort lebih efisien dari Bubble Sort untuk data besar?",
      opsi: ["Merge Sort menggunakan lebih sedikit memori", "Merge Sort menggunakan strategi divide and conquer yang mengurangi jumlah perbandingan secara signifikan", "Merge Sort hanya bekerja pada data terurut", "Merge Sort tidak memerlukan perbandingan antar elemen"],
      jawaban: 1,
      pembahasan: "Merge Sort menggunakan strategi divide and conquer — membagi array menjadi dua bagian secara rekursif, mengurutkan masing-masing, lalu menggabungkan. Ini menghasilkan O(n log n) perbandingan, jauh lebih sedikit dari O(n²) pada Bubble Sort untuk data besar. Misalnya untuk n=1000: Merge Sort ~10.000 operasi vs Bubble Sort ~1.000.000 operasi."
    },
    {
      soal: "Dalam pemrograman berorientasi objek, jika kelas 'Kucing' mewarisi kelas 'Hewan' dan mendefinisikan ulang metode 'bersuara()', konsep OOP apa yang diterapkan?",
      opsi: ["Encapsulation", "Abstraction", "Inheritance dan Polymorphism", "Hanya Inheritance"],
      jawaban: 2,
      pembahasan: "Dua konsep OOP diterapkan sekaligus: (1) Inheritance — Kucing mewarisi atribut dan metode dari Hewan, dan (2) Polymorphism (Method Overriding) — Kucing mendefinisikan ulang metode bersuara() dengan implementasi yang berbeda dari kelas induknya. Ini memungkinkan objek yang berbeda merespons pesan yang sama dengan cara yang berbeda."
    }
  ]
};

// State kuis
var kuisState = {
  level: null,
  soalIndex: 0,
  skor: { mudah: null, sedang: null, sulit: null },
  poin: 0,
  benar: 0,
  salah: 0,
  terjawab: false
};

var POIN_BENAR = 10;
var POIN_SALAH = -5;
var POIN_AWAL = 70;

window.initKuis = function() {
  kuisState.level = null;
  kuisState.soalIndex = 0;
  kuisState.poin = 0;
  kuisState.benar = 0;
  kuisState.salah = 0;
  kuisState.terjawab = false;
  window.renderKuisMenu();
}

window.renderKuisMenu = function() {
  const s = kuisState.skor;
  const container = document.getElementById('kuisContainer');
  container.innerHTML = `
    <div class="kuis-menu">
      <h2><i class="fas fa-question-circle"></i> Kuis Informatika</h2>
      <p>Pilih level kuis. Setiap level harus diselesaikan sebelum lanjut ke level berikutnya.</p>
      <div class="level-cards">
        <div class="level-card mudah unlocked" onclick="mulaiKuis('mudah')">
          <span class="done-icon" style="display:${s.mudah !== null ? 'block' : 'none'}"><i class="fas fa-check-circle"></i></span>
          <div class="level-icon">😊</div>
          <h3>Mudah</h3>
          <p>7 soal · Konsep dasar</p>
          ${s.mudah !== null ? `<p style="color:var(--success);font-weight:600;margin-top:8px">Skor: ${s.mudah}</p>` : ''}
        </div>
        <div class="level-card sedang ${s.mudah !== null ? 'unlocked' : 'locked'}" onclick="${s.mudah !== null ? "mulaiKuis('sedang')" : "showModal('🔒','Level Terkunci','Selesaikan level Mudah terlebih dahulu!')"}">
          <span class="${s.mudah === null ? 'lock-icon' : (s.sedang !== null ? 'done-icon' : 'lock-icon')}" style="display:${s.mudah === null ? 'block' : (s.sedang !== null ? 'block' : 'none')}">
            <i class="fas ${s.sedang !== null ? 'fa-check-circle' : 'fa-lock'}"></i>
          </span>
          <div class="level-icon">🤔</div>
          <h3>Sedang</h3>
          <p>7 soal · Pemahaman mendalam</p>
          ${s.sedang !== null ? `<p style="color:var(--accent);font-weight:600;margin-top:8px">Skor: ${s.sedang}</p>` : ''}
        </div>
        <div class="level-card sulit ${s.sedang !== null ? 'unlocked' : 'locked'}" onclick="${s.sedang !== null ? "mulaiKuis('sulit')" : "showModal('🔒','Level Terkunci','Selesaikan level Sedang terlebih dahulu!')"}">
          <span class="${s.sedang === null ? 'lock-icon' : (s.sulit !== null ? 'done-icon' : 'lock-icon')}" style="display:${s.sedang === null ? 'block' : (s.sulit !== null ? 'block' : 'none')}">
            <i class="fas ${s.sulit !== null ? 'fa-check-circle' : 'fa-lock'}"></i>
          </span>
          <div class="level-icon">😤</div>
          <h3>Sulit</h3>
          <p>7 soal · Analisis &amp; penerapan</p>
          ${s.sulit !== null ? `<p style="color:var(--danger);font-weight:600;margin-top:8px">Skor: ${s.sulit}</p>` : ''}
        </div>
      </div>
      ${(s.mudah !== null || s.sedang !== null || s.sulit !== null) ? `
      <div class="score-summary">
        <h4><i class="fas fa-chart-bar"></i> Rekap Skor</h4>
        ${s.mudah !== null ? `<div class="score-row"><span>Level Mudah</span><span style="color:var(--success)">${s.mudah} poin</span></div>` : ''}
        ${s.sedang !== null ? `<div class="score-row"><span>Level Sedang</span><span style="color:var(--accent)">${s.sedang} poin</span></div>` : ''}
        ${s.sulit !== null ? `<div class="score-row"><span>Level Sulit</span><span style="color:var(--danger)">${s.sulit} poin</span></div>` : ''}
        ${s.mudah !== null && s.sedang !== null && s.sulit !== null ? `<div class="score-row"><span>Total Skor</span><span style="color:var(--primary-light)">${s.mudah + s.sedang + s.sulit} poin</span></div>` : ''}
      </div>` : ''}
      ${s.mudah !== null || s.sedang !== null || s.sulit !== null ? `<button class="btn-secondary" onclick="resetKuis()" style="margin-top:1rem"><i class="fas fa-redo"></i> Reset Kuis</button>` : ''}
    </div>
  `;
}

window.mulaiKuis = function(level) {
  kuisState.level = level;
  kuisState.soalIndex = 0;
  kuisState.poin = POIN_AWAL;
  kuisState.benar = 0;
  kuisState.salah = 0;
  kuisState.terjawab = false;
  window.renderSoal();
}

window.renderSoal = function() {
  const level = kuisState.level;
  const idx = kuisState.soalIndex;
  const soal = soalData[level][idx];
  const total = soalData[level].length;
  const progress = ((idx) / total) * 100;

  const levelLabel = { mudah: '😊 Mudah', sedang: '🤔 Sedang', sulit: '😤 Sulit' };
  const levelColor = { mudah: 'var(--success)', sedang: 'var(--accent)', sulit: 'var(--danger)' };

  const container = document.getElementById('kuisContainer');
  container.innerHTML = `
    <div class="soal-header">
      <h3 style="color:${levelColor[level]}">${levelLabel[level]}</h3>
      <div class="soal-progress">
        <span style="font-size:0.82rem;color:var(--text2)">Soal ${idx + 1} / ${total}</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="soal-score"><i class="fas fa-star"></i> ${kuisState.poin} poin</div>
      </div>
    </div>
    <div class="soal-card">
      <div class="soal-num">Pertanyaan ${idx + 1} dari ${total}</div>
      <div class="soal-text">${soal.soal}</div>
      <div class="options" id="optionsContainer">
        ${soal.opsi.map((op, i) => `
          <div class="option" id="opt-${i}" onclick="pilihJawaban(${i})">
            <div class="option-letter">${String.fromCharCode(65 + i)}</div>
            <span>${op}</span>
          </div>
        `).join('')}
      </div>
      <div class="soal-feedback" id="soalFeedback"></div>
      <div class="soal-nav">
        <button class="btn-primary" id="btnLanjut" onclick="lanjutSoal()" style="display:none">
          ${idx + 1 < total ? 'Soal Berikutnya <i class="fas fa-arrow-right"></i>' : 'Lihat Hasil <i class="fas fa-flag-checkered"></i>'}
        </button>
      </div>
    </div>
  `;
  kuisState.terjawab = false;
}

window.pilihJawaban = function(pilihanIdx) {
  if (kuisState.terjawab) return;
  kuisState.terjawab = true;

  const level = kuisState.level;
  const idx = kuisState.soalIndex;
  const soal = soalData[level][idx];
  const benar = soal.jawaban === pilihanIdx;

  // Disable semua opsi
  document.querySelectorAll('.option').forEach(el => el.classList.add('disabled'));

  // Tandai jawaban
  document.getElementById('opt-' + pilihanIdx).classList.add(benar ? 'correct' : 'wrong');
  if (!benar) {
    document.getElementById('opt-' + soal.jawaban).classList.add('correct');
  }

  // Update poin
  if (benar) {
    kuisState.poin += POIN_BENAR;
    kuisState.benar++;
  } else {
    kuisState.poin += POIN_SALAH;
    if (kuisState.poin < 0) kuisState.poin = 0;
    kuisState.salah++;
  }

  // Update score display
  const scoreEl = document.querySelector('.soal-score');
  if (scoreEl) scoreEl.innerHTML = `<i class="fas fa-star"></i> ${kuisState.poin} poin`;

  // Feedback
  const fb = document.getElementById('soalFeedback');
  fb.className = 'soal-feedback show ' + (benar ? 'correct' : 'wrong');
  fb.innerHTML = benar
    ? `<i class="fas fa-check-circle"></i> <strong>Benar!</strong> +${POIN_BENAR} poin. ${soal.pembahasan}`
    : `<i class="fas fa-times-circle"></i> <strong>Salah!</strong> ${POIN_SALAH} poin. ${soal.pembahasan}`;

  // Tampilkan tombol lanjut
  document.getElementById('btnLanjut').style.display = 'inline-flex';
}

window.lanjutSoal = function() {
  const level = kuisState.level;
  const total = soalData[level].length;
  kuisState.soalIndex++;

  if (kuisState.soalIndex >= total) {
    kuisState.skor[level] = kuisState.poin;
    window.renderHasil();
  } else {
    window.renderSoal();
  }
}

window.renderHasil = function() {
  const level = kuisState.level;
  const skor = kuisState.poin;
  const benar = kuisState.benar;
  const salah = kuisState.salah;
  const total = soalData[level].length;
  const persen = Math.round((benar / total) * 100);

  let predikat, emoji, pesan;
  if (persen >= 86) { predikat = 'A'; emoji = '🏆'; pesan = 'Luar biasa! Kamu menguasai materi ini dengan sangat baik!'; }
  else if (persen >= 71) { predikat = 'B'; emoji = '🎉'; pesan = 'Bagus! Kamu memahami sebagian besar materi. Terus tingkatkan!'; }
  else if (persen >= 56) { predikat = 'C'; emoji = '👍'; pesan = 'Cukup baik. Pelajari kembali materi yang belum dikuasai.'; }
  else { predikat = 'D'; emoji = '📚'; pesan = 'Perlu belajar lebih giat. Baca kembali materi dan coba lagi!'; }

  const levelLabel = { mudah: 'Mudah', sedang: 'Sedang', sulit: 'Sulit' };
  const nextLevel = { mudah: 'sedang', sedang: 'sulit', sulit: null };
  const next = nextLevel[level];

  const container = document.getElementById('kuisContainer');
  container.innerHTML = `
    <div class="hasil-container">
      <div class="hasil-icon">${emoji}</div>
      <h2>Level ${levelLabel[level]} Selesai!</h2>
      <p>${pesan}</p>
      <div class="skor-besar">${skor}</div>
      <p style="color:var(--text2);margin-top:-1rem;margin-bottom:1rem">poin</p>
      <span class="predikat ${predikat}">Predikat ${predikat}</span>
      <div class="detail-skor">
        <div class="detail-row"><span>Jawaban Benar</span><span style="color:var(--success)">✓ ${benar} soal</span></div>
        <div class="detail-row"><span>Jawaban Salah</span><span style="color:var(--danger)">✗ ${salah} soal</span></div>
        <div class="detail-row"><span>Persentase</span><span>${persen}%</span></div>
        <div class="detail-row"><span>Skor Akhir</span><span style="color:var(--primary-light)">${skor} poin</span></div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn-secondary" onclick="mulaiKuis('${level}')"><i class="fas fa-redo"></i> Ulangi Level Ini</button>
        ${next ? `<button class="btn-primary" onclick="mulaiKuis('${next}')"><i class="fas fa-arrow-right"></i> Level ${levelLabel[next]}</button>` : ''}
        <button class="btn-secondary" onclick="renderKuisMenu()"><i class="fas fa-list"></i> Menu Kuis</button>
      </div>
    </div>
  `;
}

window.resetKuis = function() {
  kuisState.skor = { mudah: null, sedang: null, sulit: null };
  window.initKuis();
}
