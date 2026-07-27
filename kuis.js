// 30 soal MUDAH + 30 SEDANG + 30 SULIT
// Sesuai materi kelas 10: Bab 1-8
// Setiap percobaan: 10 soal diacak dari pool 30
var soalPool = {
mudah:[
// Bab 1 - Berpikir Komputasional (5 soal)
{soal:"Apa yang dimaksud dengan berpikir komputasional?",opsi:["Cara berpikir seperti robot","Kemampuan berpikir sistematis memecahkan masalah seperti cara kerja komputer","Kemampuan mengoperasikan komputer dengan cepat","Cara belajar pemrograman"],jawaban:1,pembahasan:"Berpikir komputasional adalah kemampuan berpikir sistematis dan logis untuk memecahkan masalah."},
{soal:"Memecah masalah besar menjadi bagian-bagian kecil dalam berpikir komputasional disebut...",opsi:["Abstraksi","Algoritma","Dekomposisi","Pengenalan Pola"],jawaban:2,pembahasan:"Dekomposisi adalah proses memecah masalah kompleks menjadi sub-masalah yang lebih kecil."},
{soal:"Menemukan kesamaan atau pola berulang dalam suatu masalah disebut...",opsi:["Dekomposisi","Pengenalan Pola","Abstraksi","Algoritma"],jawaban:1,pembahasan:"Pengenalan Pola (Pattern Recognition) adalah kemampuan menemukan kesamaan dalam masalah."},
{soal:"Mengabaikan detail tidak penting dan fokus pada inti masalah disebut...",opsi:["Dekomposisi","Pengenalan Pola","Abstraksi","Rekursi"],jawaban:2,pembahasan:"Abstraksi menyederhanakan masalah dengan mengabaikan detail tidak relevan."},
{soal:"Serangkaian langkah terurut untuk menyelesaikan masalah disebut...",opsi:["Program","Algoritma","Kompiler","Database"],jawaban:1,pembahasan:"Algoritma adalah langkah-langkah terurut, terbatas, dan jelas untuk menyelesaikan masalah."},
// Bab 2 - TIK (4 soal)
{soal:"TIK adalah singkatan dari...",opsi:["Teknologi Ilmu Komputer","Teknologi Informasi dan Komunikasi","Teknik Informatika dan Komputer","Tata Informasi Komputer"],jawaban:1,pembahasan:"TIK adalah Teknologi Informasi dan Komunikasi."},
{soal:"Generasi komputer yang menggunakan transistor adalah generasi...",opsi:["Pertama","Kedua","Ketiga","Keempat"],jawaban:1,pembahasan:"Generasi kedua (1950-1960an) menggunakan transistor menggantikan tabung vakum."},
{soal:"Manakah yang merupakan contoh software sistem operasi?",opsi:["Microsoft Word","Google Chrome","Windows 11","Adobe Photoshop"],jawaban:2,pembahasan:"Windows 11 adalah sistem operasi. Word dan Photoshop adalah aplikasi."},
{soal:"Manakah yang termasuk dampak POSITIF TIK di bidang pendidikan?",opsi:["Kecanduan gadget","Cyberbullying","E-learning dan akses materi tanpa batas","Penyebaran hoaks"],jawaban:2,pembahasan:"E-learning dan akses materi online adalah dampak positif TIK di bidang pendidikan."},
// Bab 3 - Sistem Komputer (4 soal)
{soal:"Tiga komponen utama sistem komputer adalah...",opsi:["CPU RAM ROM","Input Process Output","Hardware Software Brainware","Monitor Keyboard Mouse"],jawaban:2,pembahasan:"Sistem komputer terdiri dari Hardware, Software, dan Brainware."},
{soal:"CPU adalah singkatan dari...",opsi:["Central Personal Unit","Computer Processing Utility","Central Processing Unit","Core Program Unit"],jawaban:2,pembahasan:"CPU (Central Processing Unit) adalah prosesor utama komputer."},
{soal:"Memori sementara yang hilang saat komputer dimatikan adalah...",opsi:["ROM","Hard Disk","RAM","Flash Disk"],jawaban:2,pembahasan:"RAM (Random Access Memory) bersifat sementara — hilang saat komputer dimatikan."},
{soal:"Siklus kerja komputer yang benar adalah...",opsi:["Output-Process-Input","Process-Input-Output","Input-Process-Output","Input-Output-Process"],jawaban:2,pembahasan:"Siklus komputer: Input → Process → Output."},
// Bab 4 - Jaringan Komputer (4 soal)
{soal:"Jaringan komputer yang mencakup satu gedung atau kampus disebut...",opsi:["WAN","MAN","LAN","PAN"],jawaban:2,pembahasan:"LAN (Local Area Network) mencakup area terbatas seperti satu gedung."},
{soal:"Internet adalah contoh jaringan jenis...",opsi:["LAN","MAN","WAN","PAN"],jawaban:2,pembahasan:"Internet adalah WAN (Wide Area Network) terbesar di dunia."},
{soal:"Perangkat yang menghubungkan dua jaringan berbeda disebut...",opsi:["Hub","Switch","Router","Kabel UTP"],jawaban:2,pembahasan:"Router menghubungkan dua jaringan berbeda dan menentukan jalur terbaik."},
{soal:"Mengirim file lewat Bluetooth adalah contoh jaringan...",opsi:["LAN","WAN","MAN","PAN"],jawaban:3,pembahasan:"PAN (Personal Area Network) mencakup area sangat kecil seperti koneksi Bluetooth."},
// Bab 5 - Analisis Data (4 soal)
{soal:"Data berupa angka yang dapat diukur disebut data...",opsi:["Kualitatif","Kuantitatif","Primer","Sekunder"],jawaban:1,pembahasan:"Data kuantitatif dapat diukur dalam bentuk angka."},
{soal:"Data yang dikumpulkan langsung dari sumber pertama disebut data...",opsi:["Sekunder","Tersier","Primer","Kualitatif"],jawaban:2,pembahasan:"Data primer dikumpulkan langsung melalui survei, wawancara, atau observasi."},
{soal:"Nilai yang paling sering muncul dalam data disebut...",opsi:["Mean","Median","Modus","Range"],jawaban:2,pembahasan:"Modus adalah nilai yang paling sering muncul dalam data."},
{soal:"Grafik yang cocok untuk perbandingan antar kategori adalah...",opsi:["Line Chart","Bar Chart","Scatter Plot","Histogram"],jawaban:1,pembahasan:"Bar Chart paling tepat untuk membandingkan nilai antar kategori."},
// Bab 6 - Algoritma dan Pemrograman (4 soal)
{soal:"Tipe data yang hanya bernilai True atau False disebut...",opsi:["Integer","String","Float","Boolean"],jawaban:3,pembahasan:"Boolean hanya memiliki dua nilai: True atau False."},
{soal:"Satuan data terkecil dalam komputer adalah...",opsi:["Byte","Kilobyte","Bit","Megabyte"],jawaban:2,pembahasan:"Bit (binary digit) adalah satuan data terkecil, bernilai 0 atau 1."},
{soal:"Representasi visual algoritma dengan simbol standar disebut...",opsi:["Pseudocode","Flowchart","Source Code","Diagram UML"],jawaban:1,pembahasan:"Flowchart adalah diagram alir algoritma menggunakan simbol-simbol standar."},
{soal:"Prinsip LIFO diterapkan pada struktur data...",opsi:["Queue","Array","Stack","Tree"],jawaban:2,pembahasan:"Stack menggunakan LIFO (Last In First Out) seperti tumpukan piring."},
// Bab 7 - Dampak Sosial (3 soal)
{soal:"Penipuan di internet untuk mencuri data pribadi disebut...",opsi:["Hacking","Phishing","Spamming","Cracking"],jawaban:1,pembahasan:"Phishing adalah penipuan yang menyamar sebagai pihak terpercaya untuk mencuri data."},
{soal:"UU yang mengatur informasi dan transaksi elektronik di Indonesia adalah...",opsi:["UU No 27/2022","UU ITE No 11/2008","UU No 71/2019","UU Hak Cipta"],jawaban:1,pembahasan:"UU ITE No 11/2008 mengatur transaksi elektronik dan kejahatan siber di Indonesia."},
{soal:"Intimidasi atau pelecehan melalui media digital disebut...",opsi:["Hacking","Phishing","Cyberbullying","Spamming"],jawaban:2,pembahasan:"Cyberbullying adalah intimidasi atau pelecehan yang dilakukan melalui media digital."},
// Bab 8 - Praktik Lintas Bidang (2 soal)
{soal:"IoT adalah singkatan dari...",opsi:["Internet of Technology","Internet of Things","Information of Technology","Integrated Online Technology"],jawaban:1,pembahasan:"IoT (Internet of Things): benda fisik dilengkapi sensor dan terhubung ke internet."},
{soal:"Contoh penerapan Smart Home adalah...",opsi:["Email","Lampu otomatis berbasis sensor","Mesin ATM","Printer jaringan"],jawaban:1,pembahasan:"Smart Home mengotomasi perangkat rumah seperti lampu dan AC berbasis IoT."}
],
sedang:[
// Bab 1 (5 soal)
{soal:"Manakah contoh penerapan DEKOMPOSISI yang paling tepat?",opsi:["Mengenali bilangan genap habis dibagi 2","Membuat website dipecah menjadi desain coding testing deployment","Mengabaikan detail cara kerja mesin mobil","Membuat langkah memasak nasi"],jawaban:1,pembahasan:"Dekomposisi: membagi proyek website menjadi sub-tugas (desain, coding, testing, deployment)."},
{soal:"Menggunakan smartphone tanpa tahu cara kerja transistornya menerapkan konsep...",opsi:["Dekomposisi","Pengenalan Pola","Abstraksi","Algoritma"],jawaban:2,pembahasan:"Abstraksi: menyembunyikan kompleksitas hardware dan hanya menampilkan antarmuka yang sederhana."},
{soal:"Struktur algoritma IF-THEN-ELSE termasuk jenis...",opsi:["Sekuensial","Seleksi","Perulangan","Rekursi"],jawaban:1,pembahasan:"IF-THEN-ELSE adalah struktur seleksi (percabangan) yang menjalankan instruksi berdasarkan kondisi."},
{soal:"Pseudocode 'FOR i=1 TO 5: PRINT i' akan mencetak...",opsi:["Angka 1 saja","Angka 5 saja","Angka 1 2 3 4 5","Angka 0 1 2 3 4"],jawaban:2,pembahasan:"FOR i=1 TO 5 mengulang dari i=1 sampai i=5, mencetak: 1, 2, 3, 4, 5."},
{soal:"Manakah yang BUKAN sifat wajib algoritma?",opsi:["Memiliki langkah terbatas","Setiap langkah jelas dan tidak ambigu","Harus ditulis dalam bahasa pemrograman","Menghasilkan output"],jawaban:2,pembahasan:"Algoritma tidak harus ditulis dalam bahasa pemrograman — bisa dalam pseudocode atau flowchart."},
// Bab 2 (4 soal)
{soal:"Generasi komputer yang menggunakan IC (Integrated Circuit) adalah generasi...",opsi:["Kedua","Ketiga","Keempat","Kelima"],jawaban:1,pembahasan:"Generasi ketiga (1960-1970an) menggunakan IC yang menggabungkan banyak transistor dalam satu chip."},
{soal:"Perbedaan software proprietary dan open source adalah...",opsi:["Open source selalu berbayar","Proprietary kode tertutup open source kode terbuka","Open source tidak bisa dimodifikasi","Proprietary selalu lebih bagus"],jawaban:1,pembahasan:"Software proprietary kode tertutup (Windows, Adobe). Open source kode terbuka dan bisa dimodifikasi (Linux, Firefox)."},
{soal:"Manakah yang termasuk dampak NEGATIF TIK?",opsi:["Akses informasi mudah","E-learning memudahkan belajar","Kecanduan media sosial","Telemedicine mempermudah kesehatan"],jawaban:2,pembahasan:"Kecanduan media sosial adalah dampak negatif TIK yang menyebabkan gangguan produktivitas dan kesehatan mental."},
{soal:"Software utilitas berfungsi untuk...",opsi:["Membuat dokumen teks","Menjelajahi internet","Memelihara dan mengoptimalkan performa sistem","Mengedit gambar dan video"],jawaban:2,pembahasan:"Software utilitas (antivirus, disk cleaner) berfungsi memelihara dan mengoptimalkan performa sistem komputer."},
// Bab 3 (4 soal)
{soal:"ROM dalam sistem komputer berfungsi untuk...",opsi:["Menyimpan data sementara saat menyala","Menyimpan instruksi dasar komputer secara permanen","Memproses semua instruksi program","Menampilkan output ke layar"],jawaban:1,pembahasan:"ROM (Read Only Memory) menyimpan instruksi dasar komputer (BIOS) secara permanen."},
{soal:"Perbedaan Hard Disk dan SSD yang paling tepat adalah...",opsi:["Hard Disk lebih cepat dari SSD","SSD menggunakan piringan magnetis berputar","SSD lebih cepat dan tahan banting dibanding Hard Disk","Hard Disk lebih mahal dari SSD"],jawaban:2,pembahasan:"SSD menggunakan chip flash memory sehingga lebih cepat, lebih tahan banting, tapi umumnya lebih mahal."},
{soal:"Manakah yang termasuk perangkat OUTPUT komputer?",opsi:["Keyboard","Mouse","Scanner","Printer"],jawaban:3,pembahasan:"Printer adalah perangkat output menghasilkan cetakan fisik. Keyboard, mouse, scanner adalah input."},
{soal:"Brainware dalam sistem komputer adalah...",opsi:["Perangkat keras komputer","Program yang dijalankan komputer","Manusia yang mengoperasikan komputer","Jaringan yang menghubungkan komputer"],jawaban:2,pembahasan:"Brainware adalah manusia yang mengoperasikan dan mengatur komputer, termasuk programmer, admin, dan end user."},
// Bab 4 (5 soal)
{soal:"Topologi yang paling umum digunakan di LAN modern adalah...",opsi:["Bus","Ring","Mesh","Star"],jawaban:3,pembahasan:"Topologi Star paling umum di LAN modern — semua terhubung ke switch/hub pusat."},
{soal:"DNS berfungsi untuk...",opsi:["Mengamankan koneksi","Menerjemahkan nama domain menjadi alamat IP","Mengatur kecepatan internet","Menghubungkan dua jaringan berbeda"],jawaban:1,pembahasan:"DNS (Domain Name System) menerjemahkan nama domain (google.com) menjadi alamat IP."},
{soal:"Perbedaan Hub dan Switch yang tepat adalah...",opsi:["Hub lebih cerdas dari Switch","Switch meneruskan ke semua port Hub hanya ke tujuan","Hub meneruskan ke semua port Switch hanya ke tujuan","Keduanya sama"],jawaban:2,pembahasan:"Hub meneruskan data ke SEMUA port. Switch lebih cerdas — hanya ke port tujuan yang tepat."},
{soal:"IPv4 menggunakan berapa bit untuk alamat IP?",opsi:["16 bit","32 bit","64 bit","128 bit"],jawaban:1,pembahasan:"IPv4 menggunakan 32 bit (4 oktet × 8 bit), menghasilkan ~4,3 miliar alamat."},
{soal:"Topologi jaringan yang paling andal adalah...",opsi:["Bus","Star","Ring","Mesh"],jawaban:3,pembahasan:"Topologi Mesh paling andal — jika satu jalur rusak data masih bisa melalui jalur lain."},
// Bab 5 (4 soal)
{soal:"Nilai tengah dari data yang telah diurutkan disebut...",opsi:["Mean","Median","Modus","Varians"],jawaban:1,pembahasan:"Median adalah nilai tengah data setelah diurutkan, tidak terpengaruh outlier."},
{soal:"Fungsi Excel untuk menghitung rata-rata adalah...",opsi:["=SUM(A1:A10)","=AVERAGE(A1:A10)","=COUNT(A1:A10)","=MAX(A1:A10)"],jawaban:1,pembahasan:"=AVERAGE(A1:A10) menghitung rata-rata nilai dari sel A1 sampai A10."},
{soal:"Manakah yang termasuk contoh data KUALITATIF?",opsi:["Nilai ujian 90","Tinggi badan 165 cm","Warna favorit biru","Berat badan 55 kg"],jawaban:2,pembahasan:"Data kualitatif bersifat deskriptif, bukan angka. Warna favorit adalah data kualitatif nominal."},
{soal:"Grafik yang paling tepat untuk menampilkan tren data dari waktu ke waktu adalah...",opsi:["Bar Chart","Pie Chart","Line Chart","Scatter Plot"],jawaban:2,pembahasan:"Line Chart (grafik garis) paling tepat untuk tren atau perubahan data dari waktu ke waktu."},
// Bab 6 (4 soal)
{soal:"Kompleksitas waktu Bubble Sort adalah...",opsi:["O(1)","O(log n)","O(n)","O(n²)"],jawaban:3,pembahasan:"Bubble Sort O(n²) karena menggunakan dua loop bersarang. Tidak efisien untuk data besar."},
{soal:"Algoritma pencarian yang HANYA bisa digunakan pada data terurut adalah...",opsi:["Linear Search","Sequential Search","Binary Search","Hash Search"],jawaban:2,pembahasan:"Binary Search hanya bisa digunakan pada array yang sudah terurut, dengan efisiensi O(log n)."},
{soal:"Prinsip FIFO diterapkan pada struktur data...",opsi:["Stack","Tree","Array","Queue"],jawaban:3,pembahasan:"Queue menggunakan FIFO (First In First Out) seperti antrian kasir."},
{soal:"Tipe data Integer digunakan untuk menyimpan...",opsi:["Teks dan karakter","Bilangan bulat","Nilai benar atau salah","Bilangan desimal"],jawaban:1,pembahasan:"Integer menyimpan bilangan bulat seperti -5, 0, 42, 1000."},
// Bab 7 (2 soal)
{soal:"Untuk melindungi akun dari peretasan langkah paling efektif adalah...",opsi:["Ganti password tiap hari","Aktifkan autentikasi dua faktor 2FA","Gunakan nama sendiri sebagai password","Tidak perlu login"],jawaban:1,pembahasan:"2FA menambahkan lapisan keamanan kedua selain password, membuat akun jauh lebih sulit diretas."},
{soal:"Ransomware adalah...",opsi:["Program penampil iklan","Malware yang mengenkripsi data dan minta tebusan","Serangan membanjiri server","Teknik mencuri password"],jawaban:1,pembahasan:"Ransomware mengenkripsi data korban dan meminta pembayaran tebusan untuk mendapat kunci dekripsi."},
// Bab 8 (2 soal)
{soal:"Version control yang paling banyak digunakan untuk kolaborasi kode adalah...",opsi:["Microsoft Word","Git","Notepad","FTP"],jawaban:1,pembahasan:"Git adalah sistem version control yang memungkinkan tim berkolaborasi dalam pengembangan kode."},
{soal:"Metodologi pengembangan software yang menggunakan sprint pendek disebut...",opsi:["Waterfall","Agile","Spiral","V-Model"],jawaban:1,pembahasan:"Agile adalah metodologi iteratif dengan sprint pendek (1-4 minggu), fleksibel terhadap perubahan."}
],
sulit:[
// Bab 1 (5 soal)
{soal:"Seorang siswa membuat program kalkulator dengan memecahnya menjadi: input, pilih operasi, hitung, tampilkan. Ini adalah contoh...",opsi:["Abstraksi","Dekomposisi","Pengenalan Pola","Algoritma"],jawaban:1,pembahasan:"Dekomposisi: memecah program kalkulator menjadi sub-masalah kecil (input, pilih operasi, hitung, tampilkan)."},
{soal:"Pseudocode: FOR i=1 TO 10: IF i MOD 2 = 0 THEN PRINT i. Output yang dihasilkan adalah...",opsi:["1 3 5 7 9","2 4 6 8 10","1 2 3 4 5 6 7 8 9 10","Tidak ada output"],jawaban:1,pembahasan:"MOD 2 = 0 berarti habis dibagi 2 (genap). Program mencetak: 2, 4, 6, 8, 10."},
{soal:"Notasi Big-O yang menunjukkan kinerja TERBAIK untuk input data besar adalah...",opsi:["O(n²)","O(n log n)","O(n)","O(log n)"],jawaban:3,pembahasan:"O(log n) pertumbuhannya paling lambat. Urutan: O(1) > O(log n) > O(n) > O(n log n) > O(n²)."},
{soal:"Algoritma: 1.maks=A[0] 2.untuk i=1 sampai n-1: jika A[i]>maks maka maks=A[i] 3.return maks. Algoritma ini berfungsi untuk...",opsi:["Mengurutkan array","Mencari nilai terbesar dalam array","Menghitung jumlah elemen","Menghapus duplikat"],jawaban:1,pembahasan:"Algoritma ini membandingkan setiap elemen dengan nilai maksimum sementara, menghasilkan nilai terbesar dalam array."},
{soal:"Jika ada 1.000.000 data, berapa perbandingan maksimal yang diperlukan Binary Search?",opsi:["1.000.000 kali","500.000 kali","Sekitar 20 kali (log₂ 1.000.000)","100 kali"],jawaban:2,pembahasan:"Binary Search O(log₂n). log₂(1.000.000) ≈ 20. Jauh lebih efisien dari Linear Search yang butuh 1.000.000 perbandingan."},
// Bab 2 (4 soal)
{soal:"Apa yang dimaksud filter bubble dalam dampak negatif TIK?",opsi:["Firewall memblokir konten negatif","Algoritma medsos membatasi konten hanya sesuai preferensi pengguna","Teknologi enkripsi melindungi privasi","Program antivirus menyaring malware"],jawaban:1,pembahasan:"Filter bubble: algoritma media sosial hanya menampilkan konten sesuai preferensi, membatasi perspektif dan menciptakan echo chamber."},
{soal:"Urutan generasi komputer dari paling tua ke terbaru adalah...",opsi:["Transistor → Tabung Vakum → IC → Microprocessor","Tabung Vakum → Transistor → IC → Microprocessor","IC → Transistor → Tabung Vakum → Microprocessor","Microprocessor → IC → Transistor → Tabung Vakum"],jawaban:1,pembahasan:"Urutan: Generasi 1 (Tabung Vakum) → Gen 2 (Transistor) → Gen 3 (IC) → Gen 4 (Microprocessor)."},
{soal:"Perbedaan e-commerce B2C dan B2B adalah...",opsi:["B2C antar bisnis B2B ke konsumen akhir","B2C bisnis ke konsumen akhir B2B bisnis ke bisnis","Keduanya sama saja","B2B lebih murah dari B2C"],jawaban:1,pembahasan:"B2C (Business to Consumer) seperti Tokopedia. B2B (Business to Business) seperti platform pengadaan perusahaan ke pemasok."},
{soal:"Deepfake dalam konteks TIK adalah...",opsi:["Teknik enkripsi tingkat tinggi","Konten video/audio palsu sangat realistis dibuat AI","Jenis serangan DDoS","Metode backup data otomatis"],jawaban:1,pembahasan:"Deepfake menggunakan AI untuk membuat video/audio palsu yang menampilkan seseorang melakukan/mengatakan yang tidak pernah terjadi."},
// Bab 3 (4 soal)
{soal:"Manakah urutan hierarki penyimpanan dari TERCEPAT ke terlambat?",opsi:["Hard Disk > RAM > Cache > Register","Register > Cache > RAM > Hard Disk","RAM > Cache > Register > Hard Disk","Cache > RAM > Register > Hard Disk"],jawaban:1,pembahasan:"Register (dalam CPU) tercepat → Cache → RAM → Hard Disk. Semakin cepat, semakin kecil kapasitas."},
{soal:"Komputer dengan RAM 4GB berjalan lambat saat membuka banyak aplikasi karena...",opsi:["Hard disk terlalu kecil","RAM tidak cukup menampung semua proses berjalan bersamaan","CPU terlalu lambat","Monitor resolusi terlalu tinggi"],jawaban:1,pembahasan:"Jika RAM penuh, OS menggunakan virtual memory di hard disk yang jauh lebih lambat, menyebabkan sistem melambat."},
{soal:"Fungsi BIOS dalam sistem komputer adalah...",opsi:["Menjalankan aplikasi sehari-hari","Mengelola tampilan grafis","Menginisialisasi hardware dan memuat sistem operasi saat komputer dinyalakan","Menyimpan data pengguna secara permanen"],jawaban:2,pembahasan:"BIOS (Basic Input Output System) tersimpan di ROM, bertugas menginisialisasi hardware dan memuat sistem operasi saat booting."},
{soal:"Perbedaan 32-bit dan 64-bit pada sistem operasi adalah...",opsi:["64-bit hanya untuk server","32-bit bisa gunakan RAM lebih banyak","64-bit bisa menggunakan RAM lebih dari 4GB sedangkan 32-bit terbatas 4GB","Tidak ada perbedaan signifikan"],jawaban:2,pembahasan:"Sistem 32-bit hanya dapat mengalamati RAM maksimal 4GB. Sistem 64-bit dapat menggunakan RAM jauh lebih besar (teoritisnya hingga 18 exabyte)."},
// Bab 4 (5 soal)
{soal:"Jaringan 192.168.1.0/24 memiliki berapa host yang dapat digunakan?",opsi:["256","254","255","252"],jawaban:1,pembahasan:"/24 = 8 bit host = 2⁸=256 alamat. Dikurangi network address dan broadcast = 254 host."},
{soal:"Perbedaan TCP dan UDP yang paling tepat adalah...",opsi:["UDP lebih andal dari TCP","TCP connectionless UDP connection-oriented","TCP menjamin pengiriman data UDP tidak tapi lebih cepat","Keduanya sama-sama menjamin pengiriman"],jawaban:2,pembahasan:"TCP connection-oriented dan menjamin pengiriman melalui acknowledgment. UDP tidak menjamin tapi lebih cepat (cocok streaming/gaming)."},
{soal:"Serangan Man-in-the-Middle (MitM) paling efektif dicegah dengan...",opsi:["Password kuat","Enkripsi end-to-end dan sertifikat SSL/TLS valid","Antivirus terbaru","Firewall dikonfigurasi baik"],jawaban:1,pembahasan:"Enkripsi end-to-end memastikan hanya pengirim dan penerima yang bisa baca pesan. SSL/TLS memverifikasi identitas server."},
{soal:"Browser menampilkan HTTPS dan ikon gembok artinya...",opsi:["Website milik pemerintah","Koneksi antara browser dan server dienkripsi SSL/TLS","Website tidak ada iklan","Kecepatan internet optimal"],jawaban:1,pembahasan:"HTTPS dengan ikon gembok menandakan koneksi dienkripsi SSL/TLS, data tidak dapat disadap."},
{soal:"Pada model OSI, layer yang bertanggung jawab routing paket data adalah...",opsi:["Layer 1 Physical","Layer 2 Data Link","Layer 3 Network","Layer 4 Transport"],jawaban:2,pembahasan:"Layer 3 (Network Layer) bertanggung jawab untuk routing dan pengalamatan logis menggunakan IP."},
// Bab 5 (4 soal)
{soal:"Data: 5,8,8,9,12,15. Mean, Median, Modus berturut-turut adalah...",opsi:["9.5, 8.5, 8","9.5, 9, 8","9, 8.5, 8","10, 8.5, 8"],jawaban:0,pembahasan:"Mean=57/6=9.5. Median=(8+9)/2=8.5 (data ke-3 dan ke-4). Modus=8 (muncul 2 kali)."},
{soal:"Distribusi data right-skewed, ukuran pemusatan paling tepat adalah...",opsi:["Mean","Median","Modus","Range"],jawaban:1,pembahasan:"Pada distribusi miring kanan (right-skewed), median lebih representatif karena tidak terpengaruh outlier."},
{soal:"Big Data dicirikan 5V. Manakah yang BUKAN termasuk 5V?",opsi:["Volume","Velocity","Visibility","Veracity"],jawaban:2,pembahasan:"5V Big Data: Volume, Velocity, Variety, Veracity, Value. Visibility bukan bagian 5V."},
{soal:"IQR (Interquartile Range) digunakan untuk...",opsi:["Menghitung rata-rata","Mengukur penyebaran 50% data tengah tidak terpengaruh outlier","Menemukan nilai terbesar dan terkecil","Menghitung persentase data"],jawaban:1,pembahasan:"IQR = Q3 - Q1 mengukur penyebaran 50% data tengah. Tidak terpengaruh nilai ekstrem (outlier)."},
// Bab 6 (4 soal)
{soal:"Array [5,3,8,1,9,2]. Setelah satu pass Bubble Sort elemen mana di posisi akhirnya?",opsi:["Elemen terkecil (1) di posisi pertama","Elemen terbesar (9) di posisi terakhir","Semua sudah terurut","Tidak ada"],jawaban:1,pembahasan:"Setiap pass Bubble Sort membawa elemen TERBESAR ke posisi akhir. Setelah pass pertama, 9 di indeks terakhir."},
{soal:"Push(1) Push(2) Push(3) Pop() Push(4) Pop() pada Stack. Isi Stack adalah...",opsi:["[1,2]","[1,4]","[1,2,4]","[2,3]"],jawaban:0,pembahasan:"Push 1,2,3 → Pop(hapus 3) → Push 4 → Pop(hapus 4). Sisa: [1,2]."},
{soal:"Kelas Anjing mewarisi Hewan dan mendefinisikan ulang metode suara(). Konsep OOP yang diterapkan...",opsi:["Hanya Inheritance","Hanya Encapsulation","Inheritance dan Polymorphism","Hanya Abstraction"],jawaban:2,pembahasan:"Inheritance (Anjing mewarisi Hewan) + Polymorphism/Method Overriding (mendefinisikan ulang suara())."},
{soal:"Fungsi rekursif tanpa base case akan menyebabkan...",opsi:["Program lebih cepat","Program langsung berhenti","Stack Overflow karena rekursi tak terbatas","Output kosong"],jawaban:2,pembahasan:"Tanpa base case, fungsi memanggil dirinya terus → memori stack habis → Stack Overflow Error."},
// Bab 7 (2 soal)
{soal:"Perbedaan UU ITE dan UU PDP adalah...",opsi:["Keduanya mengatur hal sama","UU ITE mengatur kejahatan siber UU PDP khusus melindungi data pribadi","UU PDP lebih lama dari UU ITE","UU ITE sudah tidak berlaku"],jawaban:1,pembahasan:"UU ITE mengatur informasi elektronik dan kejahatan siber. UU PDP No 27/2022 khusus melindungi data pribadi."},
{soal:"Enkripsi asimetris menggunakan dua kunci. Kunci untuk enkripsi yang boleh dibagikan disebut...",opsi:["Private Key","Secret Key","Public Key","Session Key"],jawaban:2,pembahasan:"Public Key untuk enkripsi (boleh dibagikan). Private Key untuk dekripsi (rahasia). Digunakan di HTTPS/SSL."},
// Bab 8 (2 soal)
{soal:"Perintah Git yang BENAR untuk mengirim kode ke repository remote adalah...",opsi:["git pull origin main","git push origin main","git commit -m push","git merge main"],jawaban:1,pembahasan:"git push origin main mengirim commit lokal ke repository remote bernama origin pada branch main."},
{soal:"Bioinformatika adalah bidang yang menggabungkan...",opsi:["Bisnis dan informatika","Biologi komputer dan matematika untuk menganalisis data biologis","Biografi dan teknologi informasi","Biomedis dan teknik murni"],jawaban:1,pembahasan:"Bioinformatika menggabungkan biologi, komputer, dan matematika. Contoh: pemetaan genom, pengembangan vaksin COVID-19."}
]
};

// ===== HELPER ACAK =====
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
  level:null, soalIndex:0, soalAktif:[],
  skor:{mudah:null,sedang:null,sulit:null},
  lulus:{mudah:false,sedang:false,sulit:false},
  percobaan:{mudah:0,sedang:0,sulit:0},
  poin:0, benar:0, salah:0, terjawab:false
};

window.initKuis = function() { kuisState.level=null; window.renderKuisMenu(); };

window.renderKuisMenu = function() {
  var s=kuisState.skor, l=kuisState.lulus, p=kuisState.percobaan;
  function kartu(id,emoji,label,desk,unlocked){
    var lulusEl=l[id], coba=p[id], skor=s[id];
    var badge=lulusEl?'<span style="position:absolute;top:10px;right:12px;color:var(--success);font-size:1.2rem"><i class="fas fa-check-circle"></i></span>':(!unlocked?'<span style="position:absolute;top:10px;right:12px;color:var(--text3);font-size:1.1rem"><i class="fas fa-lock"></i></span>':'');
    var info=lulusEl?'<p style="color:var(--success);font-weight:700;margin-top:6px;font-size:0.85rem">✓ LULUS · Skor: '+skor+'</p>':(coba>0?'<p style="color:var(--danger);font-size:0.8rem;margin-top:6px">Percobaan ke-'+coba+' · Belum lulus</p>':'');
    var fn=!unlocked&&!lulusEl?"showModal('🔒','Level Terkunci','Selesaikan level "+(id==='sedang'?'Mudah':'Sedang')+" dengan sempurna 10/10 benar terlebih dahulu!')" :"mulaiKuis('"+id+"')";
    return '<div class="level-card '+id+' '+(unlocked?'unlocked':'locked')+'" onclick="'+fn+'" style="position:relative;cursor:'+(unlocked?'pointer':'not-allowed')+'">'+badge+'<div class="level-icon">'+emoji+'</div><h3>'+label+'</h3><p>'+desk+'</p>'+info+'</div>';
  }
  var rekap='';
  if(s.mudah!==null||s.sedang!==null||s.sulit!==null){
    rekap='<div class="score-summary"><h4><i class="fas fa-chart-bar"></i> Rekap Skor Terbaik</h4>'
      +(s.mudah!==null?'<div class="score-row"><span>Level Mudah</span><span style="color:var(--success)">'+s.mudah+' poin '+(l.mudah?'<i class="fas fa-check-circle"></i>':'')+'</span></div>':'')
      +(s.sedang!==null?'<div class="score-row"><span>Level Sedang</span><span style="color:var(--accent)">'+s.sedang+' poin '+(l.sedang?'<i class="fas fa-check-circle"></i>':'')+'</span></div>':'')
      +(s.sulit!==null?'<div class="score-row"><span>Level Sulit</span><span style="color:var(--danger)">'+s.sulit+' poin '+(l.sulit?'<i class="fas fa-check-circle"></i>':'')+'</span></div>':'');
    if(l.mudah&&l.sedang&&l.sulit){rekap+='<div class="score-row" style="font-weight:700"><span>🏆 Total</span><span style="color:var(--primary-light)">'+((s.mudah||0)+(s.sedang||0)+(s.sulit||0))+' poin</span></div>';}
    rekap+='</div>';
  }
  var ada=s.mudah!==null||s.sedang!==null||s.sulit!==null;
  document.getElementById('kuisContainer').innerHTML=
    '<div class="kuis-menu">'
    +'<h2><i class="fas fa-question-circle"></i> Kuis Informatika Kelas X</h2>'
    +'<p>Jawab <strong>10 soal</strong> dengan <strong>benar semua (10/10)</strong> untuk membuka level berikutnya.<br>Pool: <strong>30 soal per level</strong> — diacak setiap percobaan.</p>'
    +'<div class="level-cards">'
    +kartu('mudah','😊','Mudah','30 soal · 10 diacak · Konsep dasar',true)
    +kartu('sedang','🤔','Sedang','30 soal · 10 diacak · Pemahaman mendalam',l.mudah)
    +kartu('sulit','😤','Sulit','30 soal · 10 diacak · Analisis dan penerapan',l.sedang)
    +'</div>'+rekap
    +(ada?'<button class="btn-secondary" onclick="resetKuis()" style="margin-top:1rem"><i class="fas fa-redo"></i> Reset Semua</button>':'')
    +'</div>';
};

window.mulaiKuis = function(level){
  kuisState.level=level; kuisState.soalIndex=0;
  kuisState.soalAktif=acakSoal(level,JUMLAH_SOAL);
  kuisState.poin=0; kuisState.benar=0; kuisState.salah=0; kuisState.terjawab=false;
  kuisState.percobaan[level]++;
  window.renderSoal();
};

window.renderSoal = function(){
  var level=kuisState.level, idx=kuisState.soalIndex;
  var soal=kuisState.soalAktif[idx], total=JUMLAH_SOAL;
  var prog=Math.round((idx/total)*100);
  var label={mudah:'😊 Mudah',sedang:'🤔 Sedang',sulit:'😤 Sulit'}[level];
  var warna={mudah:'var(--success)',sedang:'var(--accent)',sulit:'var(--danger)'}[level];
  var opsiHtml=soal.opsi.map(function(op,i){
    return '<div class="option" id="opt-'+i+'" onclick="pilihJawaban('+i+')"><div class="option-letter">'+String.fromCharCode(65+i)+'</div><span>'+op+'</span></div>';
  }).join('');
  document.getElementById('kuisContainer').innerHTML=
    '<div class="soal-header"><h3 style="color:'+warna+'">'+label+'</h3>'
    +'<div class="soal-progress"><span style="font-size:0.82rem;color:var(--text2)">Soal '+(idx+1)+' / '+total+'</span>'
    +'<div class="progress-bar"><div class="progress-fill" style="width:'+prog+'%"></div></div>'
    +'<div class="soal-score"><i class="fas fa-star"></i> '+kuisState.poin+' poin</div></div></div>'
    +'<div class="soal-card"><div class="soal-num">Pertanyaan '+(idx+1)+' dari '+total+'</div>'
    +'<div class="soal-text">'+soal.soal+'</div>'
    +'<div class="options">'+opsiHtml+'</div>'
    +'<div class="soal-feedback" id="soalFeedback"></div>'
    +'<div class="soal-nav"><button class="btn-primary" id="btnLanjut" onclick="lanjutSoal()" style="display:none">'
    +((idx+1>=total)?'Lihat Hasil <i class="fas fa-flag-checkered"></i>':'Soal Berikutnya <i class="fas fa-arrow-right"></i>')
    +'</button></div></div>';
  kuisState.terjawab=false;
};

window.pilihJawaban = function(pilihanIdx){
  if(kuisState.terjawab)return;
  kuisState.terjawab=true;
  var soal=kuisState.soalAktif[kuisState.soalIndex];
  var benar=soal.jawaban===pilihanIdx;
  document.querySelectorAll('.option').forEach(function(el){el.classList.add('disabled');});
  document.getElementById('opt-'+pilihanIdx).classList.add(benar?'correct':'wrong');
  if(!benar)document.getElementById('opt-'+soal.jawaban).classList.add('correct');
  if(benar){kuisState.poin+=POIN_BENAR;kuisState.benar+=1;}
  else{kuisState.poin+=POIN_SALAH;if(kuisState.poin<0)kuisState.poin=0;kuisState.salah+=1;}
  var scoreEl=document.querySelector('.soal-score');
  if(scoreEl)scoreEl.innerHTML='<i class="fas fa-star"></i> '+kuisState.poin+' poin';
  var fb=document.getElementById('soalFeedback');
  fb.className='soal-feedback show '+(benar?'correct':'wrong');
  fb.innerHTML=benar?'<i class="fas fa-check-circle"></i> <strong>Benar!</strong> +'+POIN_BENAR+' poin. '+soal.pembahasan
    :'<i class="fas fa-times-circle"></i> <strong>Salah!</strong> '+POIN_SALAH+' poin. '+soal.pembahasan;
  document.getElementById('btnLanjut').style.display='inline-flex';
};

window.lanjutSoal = function(){
  kuisState.soalIndex+=1;
  if(kuisState.soalIndex>=JUMLAH_SOAL)window.renderHasil();
  else window.renderSoal();
};

window.renderHasil = function(){
  var level=kuisState.level, poin=kuisState.poin;
  var benar=kuisState.benar, salah=kuisState.salah;
  var persen=Math.round((benar/JUMLAH_SOAL)*100);
  var lulus=(benar===JUMLAH_SOAL);
  if(kuisState.skor[level]===null||poin>kuisState.skor[level])kuisState.skor[level]=poin;
  if(lulus)kuisState.lulus[level]=true;
  var lmap={mudah:'Mudah',sedang:'Sedang',sulit:'Sulit'};
  var nmap={mudah:'sedang',sedang:'sulit',sulit:null};
  var next=nmap[level];
  var emoji,judul,pesan;
  if(lulus){emoji='🏆';judul='Sempurna! Level '+lmap[level]+' Selesai!';pesan='Luar biasa! Semua 10 soal benar!'+(next?' Level '+lmap[next]+' kini terbuka.':' Semua level selesai!');}
  else if(persen>=70){emoji='😊';judul='Hampir Sempurna!';pesan='Masih ada '+salah+' soal salah. Harus 10/10 benar untuk lulus. Soal baru siap!';}
  else if(persen>=50){emoji='📖';judul='Perlu Latihan Lagi';pesan='Masih ada '+salah+' soal salah. Pelajari materi lalu coba lagi dengan soal diacak baru!';}
  else{emoji='📚';judul='Ayo Belajar Lebih Giat!';pesan='Baca materi dengan teliti, lalu coba lagi!';}
  var statusBadge=lulus
    ?'<div style="background:rgba(16,185,129,0.15);border:2px solid var(--success);color:var(--success);padding:10px 24px;border-radius:50px;font-weight:700;display:inline-block;margin-bottom:1.2rem"><i class="fas fa-check-circle"></i> LULUS — 10/10 Benar!</div>'
    :'<div style="background:rgba(239,68,68,0.15);border:2px solid var(--danger);color:var(--danger);padding:10px 24px;border-radius:50px;font-weight:700;display:inline-block;margin-bottom:1.2rem"><i class="fas fa-times-circle"></i> BELUM LULUS — '+benar+'/10 Benar</div>';
  var tombol='';
  if(lulus&&next)tombol+='<button class="btn-primary" onclick="mulaiKuis(\''+next+'\')"><i class="fas fa-unlock"></i> Buka Level '+lmap[next]+'</button>';
  tombol+='<button class="btn-secondary" onclick="mulaiKuis(\''+level+'\')"><i class="fas fa-redo"></i> Coba Lagi (Soal Baru)</button>';
  tombol+='<button class="btn-secondary" onclick="renderKuisMenu()"><i class="fas fa-list"></i> Menu Kuis</button>';
  document.getElementById('kuisContainer').innerHTML=
    '<div class="hasil-container">'
    +'<div class="hasil-icon">'+emoji+'</div><h2>'+judul+'</h2><p>'+pesan+'</p>'
    +'<div class="skor-besar">'+poin+'</div>'
    +'<p style="color:var(--text2);margin-top:-1rem;margin-bottom:1rem">poin</p>'
    +statusBadge
    +'<div class="detail-skor">'
    +'<div class="detail-row"><span>Jawaban Benar</span><span style="color:var(--success)">✓ '+benar+' / 10 soal</span></div>'
    +'<div class="detail-row"><span>Jawaban Salah</span><span style="color:var(--danger)">✗ '+salah+' soal</span></div>'
    +'<div class="detail-row"><span>Persentase</span><span>'+persen+'%</span></div>'
    +'<div class="detail-row"><span>Percobaan ke-</span><span>'+kuisState.percobaan[level]+'</span></div>'
    +'<div class="detail-row"><span>Skor Terbaik</span><span style="color:var(--primary-light)">'+kuisState.skor[level]+' poin</span></div>'
    +'</div>'
    +'<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem">'+tombol+'</div>'
    +'</div>';
};

window.resetKuis = function(){
  kuisState.skor={mudah:null,sedang:null,sulit:null};
  kuisState.lulus={mudah:false,sedang:false,sulit:false};
  kuisState.percobaan={mudah:0,sedang:0,sulit:0};
  kuisState.soalAktif=[];
  window.initKuis();
};
