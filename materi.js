const materiData = {
bab1: `
<h2><i class="fas fa-brain"></i> Bab 1: Berpikir Komputasional</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Pengertian Berpikir Komputasional</h3>
<p>Berpikir komputasional (Computational Thinking) adalah kemampuan berpikir untuk memecahkan masalah dengan cara yang dapat diimplementasikan oleh komputer maupun manusia. Konsep ini pertama kali dipopulerkan oleh Jeannette Wing pada tahun 2006 dalam makalahnya yang berjudul "Computational Thinking" di jurnal Communications of the ACM.</p>
<p>Berpikir komputasional bukan berarti berpikir seperti komputer, melainkan berpikir tentang komputasi — yaitu bagaimana cara memecahkan masalah secara sistematis, logis, dan efisien. Kemampuan ini sangat penting di era digital karena hampir semua bidang kehidupan kini berkaitan dengan teknologi informasi.</p>
<div class="info-box">
  <p><strong>Definisi Jeannette Wing (2006):</strong> "Computational thinking involves solving problems, designing systems, and understanding human behavior, by drawing on the concepts fundamental to computer science."</p>
</div>

<h3>B. Empat Pilar Berpikir Komputasional</h3>
<p>Berpikir komputasional terdiri dari empat komponen utama yang saling berkaitan dan bekerja bersama dalam proses pemecahan masalah:</p>

<h4>1. Dekomposisi (Decomposition)</h4>
<p>Dekomposisi adalah proses memecah masalah yang kompleks menjadi bagian-bagian yang lebih kecil dan lebih mudah dikelola. Dengan memecah masalah besar menjadi sub-masalah yang lebih sederhana, kita dapat menyelesaikan setiap bagian secara terpisah, kemudian menggabungkannya menjadi solusi lengkap.</p>
<p><strong>Contoh Dekomposisi dalam kehidupan nyata:</strong></p>
<ul>
  <li>Membuat website: dipecah menjadi desain tampilan, pembuatan database, penulisan kode program, pengujian, dan deployment</li>
  <li>Memasak nasi goreng: dipecah menjadi menyiapkan bahan, menanak nasi, memotong sayuran, menggoreng, dan menyajikan</li>
  <li>Membuat aplikasi mobile: dipecah menjadi analisis kebutuhan, desain UI/UX, coding frontend, coding backend, testing, dan publishing</li>
</ul>
<p><strong>Manfaat Dekomposisi:</strong></p>
<ul>
  <li>Masalah besar menjadi lebih mudah dipahami dan diselesaikan</li>
  <li>Memungkinkan pembagian tugas dalam tim</li>
  <li>Memudahkan identifikasi bagian yang bermasalah</li>
  <li>Meningkatkan efisiensi dalam penyelesaian masalah</li>
</ul>

<h4>2. Pengenalan Pola (Pattern Recognition)</h4>
<p>Pengenalan pola adalah kemampuan untuk menemukan kesamaan, kemiripan, atau pola berulang dalam suatu masalah atau sekumpulan data. Dengan mengenali pola, kita dapat menggunakan solusi yang sudah ada untuk menyelesaikan masalah baru yang memiliki pola serupa, sehingga tidak perlu memulai dari nol setiap kali menghadapi masalah.</p>
<p><strong>Contoh Pengenalan Pola:</strong></p>
<ul>
  <li>Mengenali bahwa semua bilangan genap habis dibagi 2</li>
  <li>Mengenali pola cuaca: setiap musim hujan, suhu turun dan kelembaban naik</li>
  <li>Mengenali pola dalam data penjualan: penjualan selalu meningkat di akhir tahun</li>
  <li>Mengenali bahwa semua kata benda dalam bahasa Inggris dapat dibuat jamak dengan menambahkan "-s" atau "-es"</li>
</ul>
<p><strong>Penerapan dalam Pemrograman:</strong> Pengenalan pola membantu programmer untuk membuat fungsi yang dapat digunakan kembali (reusable functions), mengidentifikasi bug yang berulang, dan merancang algoritma yang efisien.</p>

<h4>3. Abstraksi (Abstraction)</h4>
<p>Abstraksi adalah proses menyederhanakan masalah dengan cara mengidentifikasi informasi yang penting dan mengabaikan detail yang tidak relevan. Abstraksi membantu kita fokus pada inti masalah tanpa terganggu oleh detail-detail yang tidak perlu.</p>
<p><strong>Tingkatan Abstraksi dalam Komputer:</strong></p>
<ul>
  <li><strong>Level Fisik:</strong> Transistor, sirkuit elektronik, sinyal listrik</li>
  <li><strong>Level Logika:</strong> Gerbang logika (AND, OR, NOT), flip-flop</li>
  <li><strong>Level Arsitektur:</strong> CPU, memori, register, instruksi mesin</li>
  <li><strong>Level Sistem Operasi:</strong> Proses, file, memori virtual</li>
  <li><strong>Level Bahasa Pemrograman:</strong> Variabel, fungsi, objek, kelas</li>
  <li><strong>Level Aplikasi:</strong> Antarmuka pengguna, fitur-fitur aplikasi</li>
</ul>
<p><strong>Contoh Abstraksi dalam kehidupan:</strong> Ketika menggunakan smartphone, kita tidak perlu tahu cara kerja transistor di dalamnya. Kita cukup tahu cara menggunakan aplikasi. Inilah abstraksi — menyembunyikan kompleksitas di balik antarmuka yang sederhana.</p>

<h4>4. Algoritma (Algorithm)</h4>
<p>Algoritma adalah serangkaian langkah-langkah yang terurut, terbatas, dan jelas untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu. Algoritma harus memiliki sifat-sifat berikut:</p>
<ul>
  <li><strong>Finiteness (Keterbatasan):</strong> Algoritma harus berhenti setelah sejumlah langkah yang terbatas</li>
  <li><strong>Definiteness (Kepastian):</strong> Setiap langkah harus didefinisikan dengan jelas dan tidak ambigu</li>
  <li><strong>Input:</strong> Algoritma memiliki nol atau lebih masukan</li>
  <li><strong>Output:</strong> Algoritma menghasilkan satu atau lebih keluaran</li>
  <li><strong>Effectiveness (Efektivitas):</strong> Setiap langkah harus sederhana dan dapat dilaksanakan</li>
</ul>
<p><strong>Contoh Algoritma Sederhana — Mencari Nilai Terbesar:</strong></p>
<div class="code-block">
Algoritma CariNilaiTerbesar
Input: Array A dengan n elemen
Output: Nilai terbesar dalam array

1. Tetapkan maks = A[0]
2. Untuk i dari 1 sampai n-1:
   a. Jika A[i] > maks, maka:
      - maks = A[i]
3. Kembalikan maks
</div>

<h3>C. Representasi Algoritma</h3>
<p>Algoritma dapat direpresentasikan dalam beberapa bentuk:</p>

<h4>1. Pseudocode</h4>
<p>Pseudocode adalah cara penulisan algoritma menggunakan bahasa yang menyerupai bahasa pemrograman tetapi lebih mudah dipahami oleh manusia. Pseudocode tidak terikat pada sintaks bahasa pemrograman tertentu.</p>
<div class="code-block">
PROCEDURE HitungLuasLingkaran(r)
  pi ← 3.14159
  luas ← pi × r × r
  RETURN luas
END PROCEDURE
</div>

<h4>2. Flowchart (Diagram Alir)</h4>
<p>Flowchart adalah representasi visual dari algoritma menggunakan simbol-simbol standar yang dihubungkan dengan panah untuk menunjukkan alur proses.</p>
<div class="table-wrap">
<table>
  <tr><th>Simbol</th><th>Nama</th><th>Fungsi</th></tr>
  <tr><td>Oval/Elips</td><td>Terminal</td><td>Menandai awal dan akhir algoritma</td></tr>
  <tr><td>Jajar Genjang</td><td>Input/Output</td><td>Proses memasukkan atau menampilkan data</td></tr>
  <tr><td>Persegi Panjang</td><td>Proses</td><td>Operasi atau perhitungan</td></tr>
  <tr><td>Belah Ketupat</td><td>Keputusan</td><td>Percabangan kondisi (Ya/Tidak)</td></tr>
  <tr><td>Panah</td><td>Aliran</td><td>Menunjukkan arah alur proses</td></tr>
</table>
</div>

<h3>D. Struktur Kontrol dalam Algoritma</h3>

<h4>1. Struktur Sekuensial</h4>
<p>Instruksi dijalankan satu per satu secara berurutan dari atas ke bawah. Ini adalah struktur paling dasar dalam algoritma.</p>

<h4>2. Struktur Seleksi (Percabangan)</h4>
<p>Instruksi dijalankan berdasarkan kondisi tertentu. Ada beberapa jenis:</p>
<ul>
  <li><strong>IF-THEN:</strong> Jika kondisi benar, jalankan instruksi</li>
  <li><strong>IF-THEN-ELSE:</strong> Jika kondisi benar, jalankan instruksi A; jika tidak, jalankan instruksi B</li>
  <li><strong>CASE/SWITCH:</strong> Pilih satu dari beberapa kemungkinan berdasarkan nilai variabel</li>
</ul>

<h4>3. Struktur Perulangan (Iterasi)</h4>
<p>Instruksi dijalankan berulang kali selama kondisi tertentu terpenuhi:</p>
<ul>
  <li><strong>FOR loop:</strong> Perulangan dengan jumlah iterasi yang sudah diketahui</li>
  <li><strong>WHILE loop:</strong> Perulangan selama kondisi bernilai benar</li>
  <li><strong>DO-WHILE loop:</strong> Perulangan yang dijalankan minimal satu kali, kemudian mengecek kondisi</li>
</ul>

<h3>E. Kompleksitas Algoritma</h3>
<p>Kompleksitas algoritma mengukur seberapa efisien suatu algoritma dalam hal waktu (time complexity) dan ruang memori (space complexity) yang dibutuhkan seiring bertambahnya ukuran input.</p>
<p><strong>Notasi Big-O</strong> digunakan untuk mengekspresikan kompleksitas waktu terburuk:</p>
<div class="table-wrap">
<table>
  <tr><th>Notasi</th><th>Nama</th><th>Contoh</th></tr>
  <tr><td>O(1)</td><td>Konstan</td><td>Mengakses elemen array dengan indeks</td></tr>
  <tr><td>O(log n)</td><td>Logaritmik</td><td>Binary Search</td></tr>
  <tr><td>O(n)</td><td>Linear</td><td>Linear Search</td></tr>
  <tr><td>O(n log n)</td><td>Linearitmik</td><td>Merge Sort, Quick Sort</td></tr>
  <tr><td>O(n²)</td><td>Kuadratik</td><td>Bubble Sort, Selection Sort</td></tr>
  <tr><td>O(2ⁿ)</td><td>Eksponensial</td><td>Fibonacci rekursif naif</td></tr>
</table>
</div>

<h3>F. Penerapan Berpikir Komputasional dalam Kehidupan</h3>
<p>Berpikir komputasional tidak hanya digunakan dalam bidang teknologi, tetapi juga dapat diterapkan dalam berbagai aspek kehidupan:</p>
<ul>
  <li><strong>Bidang Kesehatan:</strong> Menganalisis data pasien untuk mendiagnosis penyakit, merancang algoritma untuk deteksi kanker dari citra medis</li>
  <li><strong>Bidang Pendidikan:</strong> Merancang kurikulum yang terstruktur, membuat sistem penilaian yang objektif</li>
  <li><strong>Bidang Bisnis:</strong> Menganalisis data penjualan untuk memprediksi tren, mengoptimalkan rantai pasokan</li>
  <li><strong>Bidang Lingkungan:</strong> Memodelkan perubahan iklim, mengoptimalkan penggunaan energi</li>
  <li><strong>Kehidupan Sehari-hari:</strong> Merencanakan rute perjalanan yang efisien, mengorganisir jadwal kegiatan</li>
</ul>
<div class="info-box success">
  <p><strong>Poin Penting:</strong> Berpikir komputasional adalah keterampilan abad ke-21 yang sangat dibutuhkan. Kemampuan ini membantu kita memecahkan masalah secara lebih sistematis dan efisien, baik dalam konteks teknologi maupun kehidupan sehari-hari.</p>
</div>
`,
bab2: `
<h2><i class="fas fa-network-wired"></i> Bab 2: Jaringan Komputer dan Internet</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Pengertian Jaringan Komputer</h3>
<p>Jaringan komputer adalah sekumpulan dua atau lebih komputer dan perangkat lainnya yang saling terhubung satu sama lain melalui media transmisi (kabel atau nirkabel) untuk berbagi sumber daya (resource sharing) dan bertukar informasi. Jaringan komputer memungkinkan pengguna untuk berbagi file, printer, koneksi internet, dan berbagai sumber daya lainnya.</p>
<p>Perkembangan jaringan komputer dimulai pada tahun 1960-an dengan proyek ARPANET (Advanced Research Projects Agency Network) yang dikembangkan oleh Departemen Pertahanan Amerika Serikat. ARPANET inilah yang menjadi cikal bakal internet yang kita gunakan saat ini.</p>

<h3>B. Jenis-Jenis Jaringan Komputer Berdasarkan Jangkauan</h3>

<h4>1. PAN (Personal Area Network)</h4>
<p>PAN adalah jaringan komputer yang mencakup area yang sangat kecil, biasanya hanya dalam jangkauan satu orang (sekitar 1-10 meter). PAN digunakan untuk menghubungkan perangkat-perangkat pribadi seperti smartphone, laptop, headset, dan smartwatch.</p>
<ul>
  <li><strong>Teknologi yang digunakan:</strong> Bluetooth, Infrared (IrDA), Zigbee, NFC (Near Field Communication)</li>
  <li><strong>Contoh penggunaan:</strong> Menghubungkan smartphone dengan headset Bluetooth, transfer file antar smartphone via Bluetooth</li>
</ul>

<h4>2. LAN (Local Area Network)</h4>
<p>LAN adalah jaringan komputer yang mencakup area terbatas seperti satu gedung, satu lantai, atau satu kampus. LAN biasanya dimiliki dan dikelola oleh satu organisasi atau individu.</p>
<ul>
  <li><strong>Jangkauan:</strong> Hingga beberapa kilometer</li>
  <li><strong>Kecepatan:</strong> 10 Mbps hingga 10 Gbps (Gigabit Ethernet)</li>
  <li><strong>Teknologi:</strong> Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11)</li>
  <li><strong>Contoh:</strong> Jaringan di sekolah, kantor, rumah, laboratorium komputer</li>
</ul>

<h4>3. MAN (Metropolitan Area Network)</h4>
<p>MAN adalah jaringan komputer yang mencakup area satu kota atau wilayah metropolitan. MAN biasanya digunakan untuk menghubungkan beberapa LAN dalam satu kota.</p>
<ul>
  <li><strong>Jangkauan:</strong> 5 hingga 50 kilometer</li>
  <li><strong>Teknologi:</strong> Fiber optik, WiMAX (IEEE 802.16)</li>
  <li><strong>Contoh:</strong> Jaringan TV kabel, jaringan antar kampus universitas dalam satu kota</li>
</ul>

<h4>4. WAN (Wide Area Network)</h4>
<p>WAN adalah jaringan komputer yang mencakup area yang sangat luas, bisa mencakup satu negara, benua, atau bahkan seluruh dunia. Internet adalah contoh WAN terbesar di dunia.</p>
<ul>
  <li><strong>Jangkauan:</strong> Ribuan kilometer</li>
  <li><strong>Teknologi:</strong> Leased line, MPLS, satelit, fiber optik bawah laut</li>
  <li><strong>Contoh:</strong> Internet, jaringan perbankan nasional, jaringan perusahaan multinasional</li>
</ul>

<h3>C. Topologi Jaringan</h3>
<p>Topologi jaringan adalah cara pengaturan atau tata letak fisik maupun logis dari komputer dan perangkat jaringan dalam suatu jaringan komputer.</p>

<h4>1. Topologi Bus</h4>
<p>Semua komputer terhubung ke satu kabel utama (backbone) yang disebut bus. Data dikirim ke seluruh jaringan dan hanya komputer yang dituju yang akan menerima data tersebut.</p>
<ul>
  <li><strong>Kelebihan:</strong> Mudah dipasang, hemat kabel, biaya murah</li>
  <li><strong>Kekurangan:</strong> Jika kabel utama putus, seluruh jaringan lumpuh; performa menurun jika banyak komputer terhubung; sulit mendeteksi kerusakan</li>
</ul>

<h4>2. Topologi Star (Bintang)</h4>
<p>Semua komputer terhubung ke satu perangkat pusat (hub atau switch). Semua komunikasi antar komputer harus melalui perangkat pusat ini.</p>
<ul>
  <li><strong>Kelebihan:</strong> Mudah mendeteksi kerusakan, jika satu komputer rusak tidak mempengaruhi yang lain, mudah menambah komputer baru</li>
  <li><strong>Kekurangan:</strong> Jika hub/switch rusak, seluruh jaringan lumpuh; membutuhkan lebih banyak kabel; biaya lebih mahal</li>
  <li><strong>Paling umum digunakan</strong> dalam jaringan LAN modern</li>
</ul>

<h4>3. Topologi Ring (Cincin)</h4>
<p>Setiap komputer terhubung ke dua komputer lainnya membentuk lingkaran tertutup. Data mengalir dalam satu arah (unidirectional) atau dua arah (bidirectional).</p>
<ul>
  <li><strong>Kelebihan:</strong> Performa stabil meskipun banyak komputer, tidak ada tabrakan data (collision)</li>
  <li><strong>Kekurangan:</strong> Jika satu komputer rusak dapat mempengaruhi seluruh jaringan, sulit menambah komputer baru</li>
</ul>

<h4>4. Topologi Mesh</h4>
<p>Setiap komputer terhubung langsung ke semua komputer lainnya. Ada dua jenis: full mesh (semua terhubung ke semua) dan partial mesh (hanya beberapa yang terhubung langsung).</p>
<ul>
  <li><strong>Kelebihan:</strong> Sangat andal, jika satu jalur rusak data dapat melalui jalur lain, keamanan tinggi</li>
  <li><strong>Kekurangan:</strong> Sangat mahal, instalasi sangat kompleks, membutuhkan banyak kabel</li>
  <li><strong>Digunakan pada:</strong> Jaringan backbone internet, jaringan militer</li>
</ul>

<h4>5. Topologi Tree (Pohon)</h4>
<p>Kombinasi dari topologi bus dan star. Terdapat hierarki node dengan node root di puncak, kemudian bercabang ke bawah seperti pohon.</p>
<ul>
  <li><strong>Kelebihan:</strong> Mudah dikembangkan, manajemen jaringan lebih mudah</li>
  <li><strong>Kekurangan:</strong> Jika node induk rusak, semua node di bawahnya terpengaruh</li>
</ul>

<h3>D. Perangkat Jaringan</h3>

<h4>1. NIC (Network Interface Card)</h4>
<p>Kartu jaringan yang dipasang pada komputer untuk menghubungkan komputer ke jaringan. Setiap NIC memiliki alamat MAC (Media Access Control) yang unik secara global, terdiri dari 48 bit (6 byte) yang ditulis dalam format heksadesimal.</p>

<h4>2. Hub</h4>
<p>Perangkat yang menghubungkan beberapa komputer dalam jaringan. Hub bekerja pada Layer 1 (Physical Layer) model OSI. Hub meneruskan data ke semua port tanpa memfilter, sehingga menyebabkan banyak collision dan tidak efisien.</p>

<h4>3. Switch</h4>
<p>Perangkat yang lebih cerdas dari hub. Switch bekerja pada Layer 2 (Data Link Layer) model OSI dan dapat mempelajari alamat MAC setiap perangkat yang terhubung. Switch hanya meneruskan data ke port yang dituju, sehingga lebih efisien dan mengurangi collision.</p>

<h4>4. Router</h4>
<p>Perangkat yang menghubungkan dua atau lebih jaringan yang berbeda dan menentukan jalur terbaik untuk pengiriman data. Router bekerja pada Layer 3 (Network Layer) model OSI dan menggunakan alamat IP untuk membuat keputusan routing.</p>

<h4>5. Access Point (AP)</h4>
<p>Perangkat yang memungkinkan perangkat nirkabel (Wi-Fi) untuk terhubung ke jaringan kabel. Access point bertindak sebagai jembatan antara jaringan kabel dan nirkabel.</p>

<h4>6. Modem</h4>
<p>Perangkat yang mengubah sinyal digital dari komputer menjadi sinyal analog untuk dikirim melalui jalur telepon (modulasi), dan sebaliknya mengubah sinyal analog yang diterima menjadi sinyal digital (demodulasi). Nama modem berasal dari MOdulator-DEModulator.</p>

<h3>E. Model OSI (Open Systems Interconnection)</h3>
<p>Model OSI adalah kerangka konseptual yang membagi fungsi komunikasi jaringan menjadi 7 lapisan (layer). Model ini dikembangkan oleh ISO (International Organization for Standardization) pada tahun 1984.</p>
<div class="table-wrap">
<table>
  <tr><th>Layer</th><th>Nama</th><th>Fungsi</th><th>Protokol/Perangkat</th></tr>
  <tr><td>7</td><td>Application</td><td>Antarmuka antara aplikasi dan jaringan</td><td>HTTP, FTP, SMTP, DNS</td></tr>
  <tr><td>6</td><td>Presentation</td><td>Format data, enkripsi, kompresi</td><td>SSL/TLS, JPEG, MPEG</td></tr>
  <tr><td>5</td><td>Session</td><td>Mengelola sesi komunikasi</td><td>NetBIOS, RPC</td></tr>
  <tr><td>4</td><td>Transport</td><td>Pengiriman data end-to-end, error recovery</td><td>TCP, UDP</td></tr>
  <tr><td>3</td><td>Network</td><td>Routing dan pengalamatan logis</td><td>IP, ICMP, Router</td></tr>
  <tr><td>2</td><td>Data Link</td><td>Pengalamatan fisik, deteksi error</td><td>Ethernet, Switch, MAC</td></tr>
  <tr><td>1</td><td>Physical</td><td>Transmisi bit melalui media fisik</td><td>Kabel, Hub, NIC</td></tr>
</table>
</div>

<h3>F. Protokol TCP/IP</h3>
<p>TCP/IP (Transmission Control Protocol/Internet Protocol) adalah suite protokol yang menjadi dasar komunikasi di internet. TCP/IP terdiri dari empat lapisan:</p>
<ul>
  <li><strong>Application Layer:</strong> HTTP, HTTPS, FTP, SMTP, DNS, DHCP</li>
  <li><strong>Transport Layer:</strong> TCP (connection-oriented, reliable) dan UDP (connectionless, unreliable tapi cepat)</li>
  <li><strong>Internet Layer:</strong> IP, ICMP, ARP</li>
  <li><strong>Network Access Layer:</strong> Ethernet, Wi-Fi</li>
</ul>

<h3>G. IP Address</h3>
<p>IP Address (Internet Protocol Address) adalah alamat numerik unik yang diberikan kepada setiap perangkat yang terhubung ke jaringan komputer yang menggunakan protokol IP.</p>

<h4>IPv4</h4>
<p>IPv4 menggunakan 32 bit yang dibagi menjadi 4 oktet, masing-masing 8 bit, ditulis dalam format desimal yang dipisahkan titik. Contoh: 192.168.1.1</p>
<p>IPv4 memiliki total sekitar 4,3 miliar alamat (2³² = 4.294.967.296). Karena keterbatasan ini, dikembangkanlah IPv6.</p>
<div class="table-wrap">
<table>
  <tr><th>Kelas</th><th>Range</th><th>Subnet Mask Default</th><th>Jumlah Host</th></tr>
  <tr><td>A</td><td>1.0.0.0 - 126.255.255.255</td><td>255.0.0.0 (/8)</td><td>16.777.214</td></tr>
  <tr><td>B</td><td>128.0.0.0 - 191.255.255.255</td><td>255.255.0.0 (/16)</td><td>65.534</td></tr>
  <tr><td>C</td><td>192.0.0.0 - 223.255.255.255</td><td>255.255.255.0 (/24)</td><td>254</td></tr>
  <tr><td>D</td><td>224.0.0.0 - 239.255.255.255</td><td>Multicast</td><td>-</td></tr>
  <tr><td>E</td><td>240.0.0.0 - 255.255.255.255</td><td>Reserved/Eksperimental</td><td>-</td></tr>
</table>
</div>

<h4>IPv6</h4>
<p>IPv6 menggunakan 128 bit yang ditulis dalam format heksadesimal yang dipisahkan tanda titik dua. Contoh: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. IPv6 menyediakan sekitar 3,4 × 10³⁸ alamat, yang secara praktis tidak akan habis.</p>

<h3>H. DNS (Domain Name System)</h3>
<p>DNS adalah sistem yang menerjemahkan nama domain yang mudah diingat manusia (seperti www.google.com) menjadi alamat IP yang digunakan komputer (seperti 142.250.185.46). DNS bekerja seperti buku telepon internet.</p>
<p><strong>Proses Resolusi DNS:</strong></p>
<ol>
  <li>Browser meminta alamat IP untuk "www.google.com"</li>
  <li>Komputer mengecek cache DNS lokal</li>
  <li>Jika tidak ada, query dikirim ke Recursive Resolver (biasanya milik ISP)</li>
  <li>Recursive Resolver menghubungi Root Name Server</li>
  <li>Root Name Server mengarahkan ke TLD Name Server (.com)</li>
  <li>TLD Name Server mengarahkan ke Authoritative Name Server google.com</li>
  <li>Authoritative Name Server mengembalikan alamat IP</li>
  <li>Browser menggunakan alamat IP untuk mengakses website</li>
</ol>

<h3>I. Keamanan Jaringan</h3>
<p>Keamanan jaringan adalah praktik mencegah dan melindungi jaringan komputer dari akses tidak sah, penyalahgunaan, modifikasi, atau penolakan layanan.</p>

<h4>Ancaman Keamanan Jaringan:</h4>
<ul>
  <li><strong>Malware:</strong> Virus, worm, trojan, ransomware, spyware</li>
  <li><strong>Phishing:</strong> Penipuan untuk mencuri informasi sensitif</li>
  <li><strong>DDoS (Distributed Denial of Service):</strong> Serangan yang membanjiri server dengan traffic palsu</li>
  <li><strong>Man-in-the-Middle (MitM):</strong> Penyerang menyadap komunikasi antara dua pihak</li>
  <li><strong>SQL Injection:</strong> Menyisipkan kode SQL berbahaya ke dalam input aplikasi</li>
  <li><strong>Brute Force:</strong> Mencoba semua kemungkinan password secara otomatis</li>
</ul>

<h4>Mekanisme Keamanan:</h4>
<ul>
  <li><strong>Firewall:</strong> Memfilter traffic jaringan berdasarkan aturan keamanan</li>
  <li><strong>Enkripsi:</strong> Mengubah data menjadi format yang tidak dapat dibaca tanpa kunci</li>
  <li><strong>VPN (Virtual Private Network):</strong> Membuat koneksi terenkripsi melalui jaringan publik</li>
  <li><strong>SSL/TLS:</strong> Protokol enkripsi untuk komunikasi web yang aman (HTTPS)</li>
  <li><strong>Autentikasi Dua Faktor (2FA):</strong> Verifikasi identitas menggunakan dua metode berbeda</li>
  <li><strong>IDS/IPS:</strong> Sistem deteksi dan pencegahan intrusi</li>
</ul>
<div class="info-box warning">
  <p><strong>Penting:</strong> Selalu gunakan password yang kuat (minimal 12 karakter, kombinasi huruf besar, huruf kecil, angka, dan simbol), aktifkan autentikasi dua faktor, dan selalu perbarui perangkat lunak untuk menutup celah keamanan.</p>
</div>
`,
bab3: `
<h2><i class="fas fa-database"></i> Bab 3: Analisis Data</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Pengertian Data dan Informasi</h3>
<p>Data adalah fakta-fakta mentah, angka, simbol, atau karakter yang belum diolah dan belum memiliki makna tertentu. Data bisa berupa angka, teks, gambar, suara, atau video. Contoh data: 85, "Jakarta", 37.5°C, foto selfie.</p>
<p>Informasi adalah data yang telah diolah, diproses, dan diorganisasikan sehingga memiliki makna dan berguna bagi penerimanya. Contoh: "Nilai ujian matematika Budi adalah 85 dari 100, termasuk kategori Baik."</p>
<p>Pengetahuan (Knowledge) adalah informasi yang telah diinterpretasikan, dipahami, dan dapat digunakan untuk membuat keputusan. Contoh: "Siswa dengan nilai di atas 80 memiliki kemungkinan besar lulus ujian nasional."</p>

<h3>B. Jenis-Jenis Data</h3>

<h4>1. Berdasarkan Sifat</h4>
<ul>
  <li><strong>Data Kuantitatif:</strong> Data yang dapat diukur dan dinyatakan dalam bentuk angka. Dibagi menjadi:
    <ul>
      <li>Data Diskrit: Nilai bulat yang tidak dapat dipecah (jumlah siswa, jumlah mobil)</li>
      <li>Data Kontinu: Nilai yang dapat berupa pecahan (tinggi badan, berat badan, suhu)</li>
    </ul>
  </li>
  <li><strong>Data Kualitatif:</strong> Data yang tidak dapat diukur dengan angka, bersifat deskriptif (warna, jenis kelamin, pendapat)</li>
</ul>

<h4>2. Berdasarkan Sumber</h4>
<ul>
  <li><strong>Data Primer:</strong> Data yang dikumpulkan langsung dari sumber pertama melalui survei, wawancara, observasi, atau eksperimen</li>
  <li><strong>Data Sekunder:</strong> Data yang diperoleh dari sumber yang sudah ada, seperti laporan, buku, jurnal, atau database</li>
</ul>

<h4>3. Berdasarkan Skala Pengukuran</h4>
<ul>
  <li><strong>Nominal:</strong> Kategori tanpa urutan (jenis kelamin, warna, agama)</li>
  <li><strong>Ordinal:</strong> Kategori dengan urutan tetapi jarak tidak sama (peringkat, tingkat kepuasan)</li>
  <li><strong>Interval:</strong> Data numerik dengan jarak sama tetapi tidak ada nol mutlak (suhu Celsius, tahun)</li>
  <li><strong>Rasio:</strong> Data numerik dengan jarak sama dan ada nol mutlak (berat, tinggi, pendapatan)</li>
</ul>

<h3>C. Siklus Analisis Data</h3>
<p>Analisis data adalah proses sistematis untuk memeriksa, membersihkan, mengubah, dan memodelkan data dengan tujuan menemukan informasi yang berguna, menarik kesimpulan, dan mendukung pengambilan keputusan.</p>

<h4>Tahapan Analisis Data:</h4>
<ol>
  <li><strong>Pengumpulan Data (Data Collection):</strong> Mengumpulkan data dari berbagai sumber yang relevan</li>
  <li><strong>Pembersihan Data (Data Cleaning):</strong> Menghapus data duplikat, mengisi nilai yang hilang, memperbaiki kesalahan</li>
  <li><strong>Eksplorasi Data (Exploratory Data Analysis/EDA):</strong> Memahami karakteristik data melalui statistik deskriptif dan visualisasi</li>
  <li><strong>Analisis Data:</strong> Menerapkan metode statistik atau machine learning untuk menemukan pola</li>
  <li><strong>Interpretasi dan Visualisasi:</strong> Menyajikan hasil analisis dalam bentuk yang mudah dipahami</li>
  <li><strong>Pengambilan Keputusan:</strong> Menggunakan hasil analisis untuk membuat keputusan</li>
</ol>

<h3>D. Statistika Deskriptif</h3>
<p>Statistika deskriptif adalah metode untuk meringkas dan mendeskripsikan karakteristik utama dari sekumpulan data.</p>

<h4>1. Ukuran Pemusatan Data (Measures of Central Tendency)</h4>
<ul>
  <li><strong>Mean (Rata-rata):</strong> Jumlah semua nilai dibagi banyaknya data. Rumus: x̄ = Σxi / n. Sensitif terhadap nilai ekstrem (outlier).</li>
  <li><strong>Median:</strong> Nilai tengah dari data yang telah diurutkan. Tidak terpengaruh oleh outlier. Jika n genap, median = rata-rata dua nilai tengah.</li>
  <li><strong>Modus:</strong> Nilai yang paling sering muncul dalam data. Data bisa memiliki lebih dari satu modus (bimodal, multimodal) atau tidak memiliki modus.</li>
</ul>

<h4>2. Ukuran Penyebaran Data (Measures of Dispersion)</h4>
<ul>
  <li><strong>Range (Jangkauan):</strong> Selisih antara nilai maksimum dan minimum. Range = Xmax - Xmin</li>
  <li><strong>Varians (Variance):</strong> Rata-rata kuadrat selisih setiap nilai dengan mean. Mengukur seberapa jauh data tersebar dari mean.</li>
  <li><strong>Standar Deviasi:</strong> Akar kuadrat dari varians. Lebih mudah diinterpretasikan karena satuannya sama dengan data asli.</li>
  <li><strong>Kuartil:</strong> Nilai yang membagi data terurut menjadi empat bagian sama besar (Q1, Q2/median, Q3)</li>
  <li><strong>IQR (Interquartile Range):</strong> Q3 - Q1, mengukur penyebaran 50% data tengah</li>
</ul>

<h3>E. Visualisasi Data</h3>
<p>Visualisasi data adalah representasi grafis dari data untuk memudahkan pemahaman pola, tren, dan hubungan dalam data.</p>

<h4>Jenis-Jenis Visualisasi Data:</h4>
<div class="table-wrap">
<table>
  <tr><th>Jenis Grafik</th><th>Kegunaan</th><th>Contoh Penggunaan</th></tr>
  <tr><td>Bar Chart</td><td>Membandingkan kategori</td><td>Perbandingan penjualan per produk</td></tr>
  <tr><td>Line Chart</td><td>Menampilkan tren waktu</td><td>Perkembangan harga saham</td></tr>
  <tr><td>Pie Chart</td><td>Menampilkan proporsi</td><td>Persentase pangsa pasar</td></tr>
  <tr><td>Scatter Plot</td><td>Hubungan dua variabel</td><td>Korelasi tinggi dan berat badan</td></tr>
  <tr><td>Histogram</td><td>Distribusi frekuensi</td><td>Distribusi nilai ujian siswa</td></tr>
  <tr><td>Box Plot</td><td>Distribusi dan outlier</td><td>Perbandingan distribusi gaji</td></tr>
  <tr><td>Heatmap</td><td>Intensitas nilai dalam matriks</td><td>Korelasi antar variabel</td></tr>
</table>
</div>

<h3>F. Pengolahan Data dengan Spreadsheet</h3>
<p>Spreadsheet (seperti Microsoft Excel atau Google Sheets) adalah alat yang sangat berguna untuk mengolah dan menganalisis data. Beberapa fungsi penting:</p>

<h4>Fungsi Statistik Dasar:</h4>
<div class="code-block">
=AVERAGE(A1:A10)    → Menghitung rata-rata
=MEDIAN(A1:A10)     → Menghitung median
=MODE(A1:A10)       → Menghitung modus
=MAX(A1:A10)        → Nilai maksimum
=MIN(A1:A10)        → Nilai minimum
=STDEV(A1:A10)      → Standar deviasi sampel
=VAR(A1:A10)        → Varians sampel
=COUNT(A1:A10)      → Menghitung jumlah data numerik
=COUNTIF(A1:A10,"&gt;80")  → Menghitung data yang memenuhi kriteria
=SUMIF(A1:A10,"&gt;80",B1:B10) → Menjumlahkan berdasarkan kriteria
</div>

<h3>G. Big Data</h3>
<p>Big Data adalah istilah untuk kumpulan data yang sangat besar dan kompleks sehingga tidak dapat diolah dengan alat pengolahan data tradisional. Big Data dicirikan oleh 5V:</p>
<ul>
  <li><strong>Volume:</strong> Ukuran data yang sangat besar (terabyte hingga petabyte)</li>
  <li><strong>Velocity:</strong> Kecepatan data yang dihasilkan dan diproses sangat tinggi (real-time)</li>
  <li><strong>Variety:</strong> Keragaman jenis data (terstruktur, semi-terstruktur, tidak terstruktur)</li>
  <li><strong>Veracity:</strong> Keakuratan dan kepercayaan data</li>
  <li><strong>Value:</strong> Nilai bisnis yang dapat diekstrak dari data</li>
</ul>

<h3>H. Privasi dan Etika dalam Penggunaan Data</h3>
<p>Penggunaan data harus memperhatikan aspek etika dan privasi:</p>
<ul>
  <li><strong>Informed Consent:</strong> Pengguna harus mengetahui dan menyetujui pengumpulan data mereka</li>
  <li><strong>Data Minimization:</strong> Hanya mengumpulkan data yang benar-benar diperlukan</li>
  <li><strong>Anonymization:</strong> Menghapus informasi yang dapat mengidentifikasi individu</li>
  <li><strong>Data Security:</strong> Melindungi data dari akses tidak sah</li>
  <li><strong>Transparency:</strong> Terbuka tentang bagaimana data digunakan</li>
</ul>
<div class="info-box danger">
  <p><strong>Perhatian:</strong> Di Indonesia, penggunaan data pribadi diatur dalam UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP). Pelanggaran terhadap UU ini dapat dikenakan sanksi pidana dan denda.</p>
</div>
`,
bab4: `
<h2><i class="fas fa-code"></i> Bab 4: Algoritma dan Pemrograman</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Konsep Pemrograman</h3>
<p>Pemrograman adalah proses menulis instruksi yang dapat dieksekusi oleh komputer untuk menyelesaikan tugas tertentu. Instruksi-instruksi ini ditulis dalam bahasa pemrograman yang kemudian diterjemahkan menjadi bahasa mesin yang dapat dipahami komputer.</p>
<p>Bahasa pemrograman dibagi berdasarkan tingkat abstraksinya:</p>
<ul>
  <li><strong>Bahasa Mesin (Machine Language):</strong> Instruksi dalam bentuk biner (0 dan 1), langsung dieksekusi CPU</li>
  <li><strong>Bahasa Assembly:</strong> Menggunakan mnemonik (singkatan) untuk instruksi mesin, masih sangat dekat dengan hardware</li>
  <li><strong>Bahasa Tingkat Tinggi (High-Level Language):</strong> Python, Java, C++, JavaScript — lebih mudah dipahami manusia</li>
</ul>

<h3>B. Tipe Data dalam Pemrograman</h3>
<div class="table-wrap">
<table>
  <tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr>
  <tr><td>Integer (int)</td><td>Bilangan bulat</td><td>-5, 0, 42, 1000</td></tr>
  <tr><td>Float/Double</td><td>Bilangan desimal</td><td>3.14, -2.5, 0.001</td></tr>
  <tr><td>String (str)</td><td>Teks/karakter</td><td>"Hello", "Informatika"</td></tr>
  <tr><td>Boolean (bool)</td><td>Nilai benar/salah</td><td>True, False</td></tr>
  <tr><td>List/Array</td><td>Kumpulan nilai terurut</td><td>[1, 2, 3], ["a", "b"]</td></tr>
  <tr><td>Dictionary</td><td>Pasangan kunci-nilai</td><td>{"nama": "Budi", "usia": 17}</td></tr>
</table>
</div>

<h3>C. Struktur Data</h3>

<h4>1. Array (Larik)</h4>
<p>Array adalah struktur data yang menyimpan kumpulan elemen dengan tipe data yang sama dalam lokasi memori yang berurutan. Setiap elemen diakses menggunakan indeks (dimulai dari 0).</p>
<div class="code-block">
# Python
nilai = [85, 90, 78, 92, 88]
print(nilai[0])   # Output: 85 (indeks pertama)
print(nilai[-1])  # Output: 88 (indeks terakhir)
print(len(nilai)) # Output: 5 (panjang array)
</div>

<h4>2. Stack (Tumpukan)</h4>
<p>Stack adalah struktur data yang mengikuti prinsip LIFO (Last In, First Out) — elemen yang terakhir dimasukkan adalah yang pertama dikeluarkan. Operasi utama: push (memasukkan), pop (mengeluarkan), peek (melihat elemen teratas).</p>
<p>Contoh penggunaan: undo/redo di text editor, call stack dalam pemrograman, navigasi browser (tombol back).</p>

<h4>3. Queue (Antrian)</h4>
<p>Queue adalah struktur data yang mengikuti prinsip FIFO (First In, First Out) — elemen yang pertama dimasukkan adalah yang pertama dikeluarkan. Operasi utama: enqueue (memasukkan di belakang), dequeue (mengeluarkan dari depan).</p>
<p>Contoh penggunaan: antrian printer, antrian proses di sistem operasi, buffer data.</p>

<h4>4. Linked List</h4>
<p>Linked list adalah struktur data yang terdiri dari node-node yang saling terhubung melalui pointer. Setiap node berisi data dan pointer ke node berikutnya. Berbeda dengan array, linked list tidak memerlukan memori yang berurutan.</p>

<h4>5. Tree (Pohon)</h4>
<p>Tree adalah struktur data hierarkis yang terdiri dari node-node yang terhubung. Node paling atas disebut root, node yang tidak memiliki anak disebut leaf. Binary tree adalah tree di mana setiap node memiliki maksimal dua anak.</p>

<h3>D. Algoritma Pengurutan (Sorting)</h3>

<h4>1. Bubble Sort</h4>
<p>Algoritma pengurutan paling sederhana. Membandingkan dua elemen yang berdekatan dan menukarnya jika tidak dalam urutan yang benar. Proses ini diulang hingga tidak ada pertukaran yang terjadi.</p>
<div class="code-block">
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Contoh: [64, 34, 25, 12, 22, 11, 90]
# Setelah sort: [11, 12, 22, 25, 34, 64, 90]
# Kompleksitas: O(n²)
</div>

<h4>2. Selection Sort</h4>
<p>Mencari elemen terkecil dari bagian yang belum terurut dan menempatkannya di posisi yang benar. Lebih efisien dari bubble sort dalam hal jumlah pertukaran.</p>
<div class="code-block">
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
# Kompleksitas: O(n²)
</div>

<h4>3. Insertion Sort</h4>
<p>Membangun array terurut satu elemen pada satu waktu dengan menyisipkan setiap elemen ke posisi yang tepat. Efisien untuk data yang hampir terurut.</p>
<div class="code-block">
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr
# Kompleksitas: O(n²) worst case, O(n) best case
</div>

<h4>4. Merge Sort</h4>
<p>Algoritma divide and conquer yang membagi array menjadi dua bagian, mengurutkan masing-masing bagian secara rekursif, kemudian menggabungkannya. Lebih efisien untuk data besar.</p>
<div class="code-block">
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
# Kompleksitas: O(n log n)
</div>

<h3>E. Algoritma Pencarian (Searching)</h3>

<h4>1. Linear Search (Sequential Search)</h4>
<p>Mencari elemen dengan memeriksa setiap elemen satu per satu dari awal hingga akhir. Sederhana tetapi tidak efisien untuk data besar.</p>
<div class="code-block">
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Kembalikan indeks
    return -1  # Tidak ditemukan
# Kompleksitas: O(n)
</div>

<h4>2. Binary Search</h4>
<p>Mencari elemen dalam array yang sudah terurut dengan cara membagi array menjadi dua bagian dan menentukan di bagian mana elemen yang dicari berada. Jauh lebih efisien dari linear search.</p>
<div class="code-block">
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
# Kompleksitas: O(log n)
# Syarat: Array harus sudah terurut!
</div>

<h3>F. Rekursi</h3>
<p>Rekursi adalah teknik pemrograman di mana sebuah fungsi memanggil dirinya sendiri untuk menyelesaikan masalah yang lebih kecil. Setiap fungsi rekursif harus memiliki base case (kondisi berhenti) untuk mencegah infinite loop.</p>
<div class="code-block">
# Contoh: Faktorial menggunakan rekursi
def faktorial(n):
    if n == 0 or n == 1:  # Base case
        return 1
    return n * faktorial(n - 1)  # Recursive case

# faktorial(5) = 5 * faktorial(4)
#              = 5 * 4 * faktorial(3)
#              = 5 * 4 * 3 * faktorial(2)
#              = 5 * 4 * 3 * 2 * faktorial(1)
#              = 5 * 4 * 3 * 2 * 1 = 120

# Contoh: Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
</div>

<h3>G. Pemrograman Berorientasi Objek (OOP)</h3>
<p>OOP adalah paradigma pemrograman yang mengorganisasikan kode ke dalam objek-objek yang memiliki atribut (data) dan metode (fungsi). Empat pilar OOP:</p>
<ul>
  <li><strong>Encapsulation:</strong> Menyembunyikan detail implementasi dan hanya mengekspos antarmuka yang diperlukan</li>
  <li><strong>Inheritance:</strong> Kelas anak mewarisi atribut dan metode dari kelas induk</li>
  <li><strong>Polymorphism:</strong> Objek yang berbeda dapat merespons pesan yang sama dengan cara yang berbeda</li>
  <li><strong>Abstraction:</strong> Menyembunyikan kompleksitas dan hanya menampilkan fitur esensial</li>
</ul>
<div class="code-block">
class Hewan:
    def __init__(self, nama, suara):
        self.nama = nama
        self.suara = suara
    
    def bersuara(self):
        return f"{self.nama} berkata: {self.suara}"

class Kucing(Hewan):  # Inheritance
    def __init__(self, nama):
        super().__init__(nama, "Meow")
    
    def tidur(self):
        return f"{self.nama} sedang tidur"

kucing = Kucing("Kitty")
print(kucing.bersuara())  # Kitty berkata: Meow
print(kucing.tidur())     # Kitty sedang tidur
</div>
`,
bab5: `
<h2><i class="fas fa-shield-alt"></i> Bab 5: Dampak Sosial Informatika</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Perkembangan Teknologi Informasi dan Dampaknya</h3>
<p>Teknologi informasi telah mengubah hampir setiap aspek kehidupan manusia secara fundamental. Revolusi digital yang dimulai pada akhir abad ke-20 telah menciptakan dunia yang saling terhubung, di mana informasi dapat disebarkan secara instan ke seluruh penjuru dunia.</p>
<p>Perkembangan ini membawa dampak yang sangat besar, baik positif maupun negatif, terhadap individu, masyarakat, dan lingkungan.</p>

<h3>B. Dampak Positif Teknologi Informasi</h3>

<h4>1. Bidang Pendidikan</h4>
<ul>
  <li>Akses ke sumber belajar yang tidak terbatas melalui internet</li>
  <li>Pembelajaran jarak jauh (e-learning) yang memungkinkan belajar dari mana saja</li>
  <li>Kolaborasi antar pelajar dari berbagai negara</li>
  <li>Personalisasi pembelajaran sesuai kebutuhan individu</li>
  <li>Simulasi dan visualisasi konsep yang sulit dipahami</li>
</ul>

<h4>2. Bidang Kesehatan</h4>
<ul>
  <li>Telemedicine: konsultasi dokter secara online</li>
  <li>Rekam medis elektronik yang memudahkan akses riwayat kesehatan</li>
  <li>Diagnosis berbasis AI yang lebih akurat</li>
  <li>Pemantauan kesehatan real-time melalui wearable devices</li>
  <li>Penelitian obat yang lebih cepat dengan komputasi tinggi</li>
</ul>

<h4>3. Bidang Ekonomi</h4>
<ul>
  <li>E-commerce yang memudahkan transaksi jual beli</li>
  <li>Fintech yang mempermudah layanan keuangan</li>
  <li>Munculnya lapangan kerja baru di bidang teknologi</li>
  <li>Efisiensi proses bisnis melalui otomasi</li>
  <li>Akses pasar global bagi UMKM</li>
</ul>

<h3>C. Dampak Negatif Teknologi Informasi</h3>

<h4>1. Masalah Privasi</h4>
<p>Privasi adalah hak individu untuk mengontrol informasi tentang diri mereka sendiri. Di era digital, privasi menjadi semakin terancam karena:</p>
<ul>
  <li><strong>Data Mining:</strong> Perusahaan mengumpulkan dan menganalisis data pengguna untuk kepentingan komersial</li>
  <li><strong>Surveillance:</strong> Pemantauan aktivitas online oleh pemerintah atau pihak ketiga</li>
  <li><strong>Data Breach:</strong> Kebocoran data pribadi akibat serangan siber</li>
  <li><strong>Social Media Tracking:</strong> Platform media sosial melacak perilaku pengguna</li>
</ul>

<h4>2. Kejahatan Siber (Cybercrime)</h4>
<p>Kejahatan siber adalah tindakan kriminal yang dilakukan menggunakan komputer atau jaringan internet sebagai alat atau sasaran.</p>
<div class="table-wrap">
<table>
  <tr><th>Jenis Kejahatan</th><th>Deskripsi</th><th>Contoh</th></tr>
  <tr><td>Hacking</td><td>Akses tidak sah ke sistem komputer</td><td>Meretas akun bank</td></tr>
  <tr><td>Phishing</td><td>Penipuan untuk mencuri data</td><td>Email palsu dari bank</td></tr>
  <tr><td>Cyberbullying</td><td>Intimidasi melalui media digital</td><td>Pelecehan di media sosial</td></tr>
  <tr><td>Hoaks</td><td>Penyebaran informasi palsu</td><td>Berita bohong di WhatsApp</td></tr>
  <tr><td>Penipuan Online</td><td>Transaksi palsu di internet</td><td>Toko online fiktif</td></tr>
  <tr><td>Ransomware</td><td>Mengenkripsi data dan meminta tebusan</td><td>WannaCry attack 2017</td></tr>
</table>
</div>

<h4>3. Kecanduan Digital</h4>
<p>Penggunaan teknologi yang berlebihan dapat menyebabkan kecanduan digital yang berdampak pada kesehatan fisik dan mental:</p>
<ul>
  <li>Gangguan tidur akibat penggunaan gadget sebelum tidur</li>
  <li>Penurunan kemampuan bersosialisasi secara langsung</li>
  <li>FOMO (Fear of Missing Out) — kecemasan karena takut ketinggalan informasi</li>
  <li>Gangguan konsentrasi dan produktivitas</li>
  <li>Masalah kesehatan fisik: mata lelah, nyeri punggung, carpal tunnel syndrome</li>
</ul>

<h4>4. Kesenjangan Digital (Digital Divide)</h4>
<p>Kesenjangan digital adalah perbedaan akses dan kemampuan menggunakan teknologi informasi antara kelompok masyarakat yang berbeda, baik berdasarkan ekonomi, geografi, usia, atau pendidikan.</p>

<h3>D. Etika Digital</h3>
<p>Etika digital adalah seperangkat prinsip moral yang mengatur perilaku manusia dalam menggunakan teknologi digital. Etika digital mencakup:</p>

<h4>1. Netiquette (Etiket Internet)</h4>
<ul>
  <li>Menggunakan bahasa yang sopan dan menghormati orang lain</li>
  <li>Tidak menyebarkan informasi yang belum diverifikasi</li>
  <li>Menghargai privasi orang lain</li>
  <li>Tidak melakukan plagiarisme konten digital</li>
  <li>Menggunakan huruf kapital dengan tepat (huruf kapital semua dianggap berteriak)</li>
</ul>

<h4>2. Hak Kekayaan Intelektual (HKI) di Era Digital</h4>
<ul>
  <li><strong>Hak Cipta (Copyright):</strong> Melindungi karya kreatif seperti musik, film, buku, software</li>
  <li><strong>Lisensi Software:</strong> Proprietary (berbayar), Freeware (gratis), Open Source (kode terbuka)</li>
  <li><strong>Creative Commons:</strong> Lisensi yang memungkinkan berbagi karya dengan syarat tertentu</li>
</ul>

<h4>3. Literasi Digital</h4>
<p>Literasi digital adalah kemampuan untuk menggunakan teknologi digital secara efektif, kritis, dan bertanggung jawab. Komponen literasi digital:</p>
<ul>
  <li><strong>Literasi Informasi:</strong> Kemampuan mencari, mengevaluasi, dan menggunakan informasi</li>
  <li><strong>Literasi Media:</strong> Kemampuan memahami dan menganalisis konten media</li>
  <li><strong>Literasi Komunikasi:</strong> Kemampuan berkomunikasi secara efektif di dunia digital</li>
  <li><strong>Keamanan Digital:</strong> Kemampuan melindungi diri dari ancaman digital</li>
</ul>

<h3>E. Regulasi dan Hukum Teknologi Informasi di Indonesia</h3>
<ul>
  <li><strong>UU ITE (UU No. 11 Tahun 2008 jo. UU No. 19 Tahun 2016):</strong> Mengatur transaksi elektronik, informasi elektronik, dan kejahatan siber</li>
  <li><strong>UU PDP (UU No. 27 Tahun 2022):</strong> Perlindungan data pribadi warga negara Indonesia</li>
  <li><strong>PP PSTE (PP No. 71 Tahun 2019):</strong> Penyelenggaraan sistem dan transaksi elektronik</li>
</ul>
<div class="info-box danger">
  <p><strong>Pasal Penting UU ITE:</strong> Pasal 27 ayat 3 mengatur tentang pencemaran nama baik melalui media elektronik. Pasal 28 ayat 1 mengatur tentang penyebaran berita bohong (hoaks). Pelanggaran dapat dikenakan pidana penjara dan denda.</p>
</div>

<h3>F. Kecerdasan Buatan (Artificial Intelligence) dan Dampaknya</h3>
<p>AI adalah simulasi kecerdasan manusia dalam mesin yang diprogram untuk berpikir dan belajar seperti manusia. AI telah memberikan dampak besar pada masyarakat:</p>
<ul>
  <li><strong>Otomasi Pekerjaan:</strong> AI menggantikan pekerjaan rutin dan berulang, menciptakan kekhawatiran pengangguran</li>
  <li><strong>Bias Algoritma:</strong> AI dapat mewarisi bias dari data pelatihan, menyebabkan diskriminasi</li>
  <li><strong>Deepfake:</strong> Teknologi AI yang dapat membuat video/audio palsu yang sangat realistis</li>
  <li><strong>Filter Bubble:</strong> Algoritma media sosial yang hanya menampilkan konten sesuai preferensi, membatasi perspektif</li>
</ul>
`,
bab6: `
<h2><i class="fas fa-users-cog"></i> Bab 6: Praktik Lintas Bidang</h2>
<p class="bab-subtitle">Informatika Kelas XI SMA | Kurikulum Merdeka</p>

<h3>A. Informatika dalam Berbagai Bidang Kehidupan</h3>
<p>Informatika tidak berdiri sendiri sebagai ilmu yang terisolasi. Justru kekuatan terbesar informatika terletak pada kemampuannya untuk berkolaborasi dan bersinergi dengan berbagai bidang ilmu lainnya. Penerapan informatika lintas bidang ini menghasilkan inovasi-inovasi yang mengubah cara kita hidup, bekerja, dan berinteraksi.</p>

<h3>B. Informatika dalam Bidang Sains</h3>

<h4>Komputasi Ilmiah (Scientific Computing)</h4>
<p>Komputasi ilmiah menggunakan komputer untuk memecahkan masalah-masalah sains yang terlalu kompleks untuk diselesaikan secara analitis. Contoh penerapan:</p>
<ul>
  <li><strong>Simulasi Iklim:</strong> Model komputer untuk memprediksi perubahan iklim global</li>
  <li><strong>Bioinformatika:</strong> Analisis sekuens DNA dan protein untuk memahami penyakit genetik</li>
  <li><strong>Fisika Komputasi:</strong> Simulasi partikel subatomik, dinamika fluida</li>
  <li><strong>Astronomi:</strong> Analisis data teleskop, simulasi pembentukan galaksi</li>
</ul>

<h4>Bioinformatika</h4>
<p>Bioinformatika adalah bidang yang menggabungkan biologi, komputer, dan matematika untuk menganalisis data biologis. Contoh aplikasi:</p>
<ul>
  <li>Pemetaan genom manusia (Human Genome Project)</li>
  <li>Pengembangan vaksin COVID-19 menggunakan analisis sekuens virus</li>
  <li>Prediksi struktur protein menggunakan AI (AlphaFold)</li>
</ul>

<h3>C. Informatika dalam Bidang Sosial dan Humaniora</h3>

<h4>Digital Humanities</h4>
<p>Digital humanities adalah penerapan metode komputasi dalam penelitian humaniora:</p>
<ul>
  <li><strong>Text Mining:</strong> Analisis teks sastra secara komputasi untuk menemukan pola</li>
  <li><strong>Digital Archaeology:</strong> Rekonstruksi situs arkeologi menggunakan 3D scanning dan VR</li>
  <li><strong>Computational Linguistics:</strong> Analisis bahasa menggunakan komputer (NLP)</li>
  <li><strong>Digital History:</strong> Digitalisasi dan analisis dokumen sejarah</li>
</ul>

<h4>Analisis Media Sosial</h4>
<p>Informatika digunakan untuk menganalisis data media sosial untuk memahami opini publik, tren sosial, dan perilaku masyarakat. Teknik yang digunakan:</p>
<ul>
  <li>Sentiment Analysis: Menentukan apakah teks bersifat positif, negatif, atau netral</li>
  <li>Social Network Analysis: Menganalisis struktur dan dinamika jaringan sosial</li>
  <li>Topic Modeling: Menemukan topik-topik utama dalam kumpulan teks besar</li>
</ul>

<h3>D. Informatika dalam Bidang Seni dan Kreativitas</h3>

<h4>Seni Digital</h4>
<ul>
  <li><strong>Generative Art:</strong> Karya seni yang dibuat menggunakan algoritma komputer</li>
  <li><strong>Digital Music:</strong> Komposisi dan produksi musik menggunakan software DAW</li>
  <li><strong>CGI (Computer-Generated Imagery):</strong> Efek visual dalam film dan game</li>
  <li><strong>NFT (Non-Fungible Token):</strong> Seni digital yang diverifikasi menggunakan blockchain</li>
</ul>

<h4>AI dalam Kreativitas</h4>
<p>AI generatif seperti DALL-E, Midjourney, dan ChatGPT telah mengubah cara manusia berkreasi:</p>
<ul>
  <li>Generasi gambar dari deskripsi teks</li>
  <li>Penulisan konten otomatis</li>
  <li>Komposisi musik oleh AI</li>
  <li>Pembuatan video sintetis</li>
</ul>

<h3>E. Kolaborasi dalam Proyek Informatika</h3>

<h4>Metodologi Pengembangan Perangkat Lunak</h4>
<p>Dalam pengembangan perangkat lunak modern, kolaborasi tim sangat penting. Beberapa metodologi yang digunakan:</p>
<ul>
  <li><strong>Waterfall:</strong> Pengembangan linear dan sekuensial (analisis → desain → implementasi → testing → deployment)</li>
  <li><strong>Agile:</strong> Pengembangan iteratif dan inkremental dengan sprint pendek (1-4 minggu)</li>
  <li><strong>Scrum:</strong> Framework Agile dengan peran Product Owner, Scrum Master, dan Development Team</li>
  <li><strong>Kanban:</strong> Visualisasi alur kerja menggunakan papan Kanban</li>
</ul>

<h4>Version Control dengan Git</h4>
<p>Git adalah sistem version control yang memungkinkan tim untuk berkolaborasi dalam pengembangan kode:</p>
<div class="code-block">
git init              # Inisialisasi repository baru
git clone [url]       # Menyalin repository dari remote
git add .             # Menambahkan semua perubahan ke staging
git commit -m "pesan" # Menyimpan perubahan dengan pesan
git push origin main  # Mengirim perubahan ke remote
git pull              # Mengambil perubahan terbaru dari remote
git branch [nama]     # Membuat branch baru
git merge [branch]    # Menggabungkan branch
</div>

<h3>F. Internet of Things (IoT)</h3>
<p>IoT adalah konsep di mana objek-objek fisik sehari-hari dilengkapi dengan sensor, software, dan konektivitas internet sehingga dapat mengumpulkan dan bertukar data.</p>

<h4>Komponen IoT:</h4>
<ul>
  <li><strong>Sensor/Aktuator:</strong> Mengumpulkan data dari lingkungan (suhu, kelembaban, gerakan)</li>
  <li><strong>Konektivitas:</strong> Wi-Fi, Bluetooth, Zigbee, LoRa, 5G</li>
  <li><strong>Platform Cloud:</strong> Menyimpan dan memproses data IoT</li>
  <li><strong>Antarmuka Pengguna:</strong> Dashboard untuk memantau dan mengontrol perangkat</li>
</ul>

<h4>Contoh Penerapan IoT:</h4>
<ul>
  <li><strong>Smart Home:</strong> Lampu otomatis, AC pintar, kunci pintu digital</li>
  <li><strong>Smart City:</strong> Manajemen lalu lintas cerdas, pemantauan kualitas udara</li>
  <li><strong>Smart Agriculture:</strong> Irigasi otomatis berdasarkan kelembaban tanah</li>
  <li><strong>Healthcare IoT:</strong> Pemantauan pasien jarak jauh, alat kesehatan terhubung</li>
  <li><strong>Industrial IoT (IIoT):</strong> Pemantauan mesin pabrik, prediksi kerusakan</li>
</ul>

<h3>G. Proyek Informatika: Langkah-Langkah</h3>
<p>Dalam membuat proyek informatika, ikuti langkah-langkah berikut:</p>
<ol>
  <li><strong>Identifikasi Masalah:</strong> Tentukan masalah yang ingin diselesaikan dan siapa penggunanya</li>
  <li><strong>Analisis Kebutuhan:</strong> Kumpulkan dan dokumentasikan kebutuhan fungsional dan non-fungsional</li>
  <li><strong>Perancangan:</strong> Buat desain sistem, arsitektur, dan antarmuka pengguna</li>
  <li><strong>Implementasi:</strong> Tulis kode program sesuai desain</li>
  <li><strong>Pengujian:</strong> Uji fungsionalitas, performa, dan keamanan</li>
  <li><strong>Deployment:</strong> Publikasikan dan distribusikan produk</li>
  <li><strong>Pemeliharaan:</strong> Perbaiki bug dan tambahkan fitur baru</li>
</ol>
<div class="info-box success">
  <p><strong>Tips Sukses Proyek:</strong> Mulailah dengan masalah yang nyata dan relevan, buat prototipe sederhana terlebih dahulu (MVP - Minimum Viable Product), dapatkan feedback dari pengguna sejak awal, dan jangan takut untuk melakukan iterasi dan perbaikan.</p>
</div>
`
};

// showMateri didefinisikan di app.js
