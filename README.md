# Jogja Waras Web (Mockup Interface)

Prototipe web statis untuk kebutuhan dokumentasi bagian "Screenshot Mockup Interface Perangkat Lunak". Ini bukan implementasi penuh fungsi backend, tetapi fokus pada struktur UI/UX utama sesuai fitur yang direncanakan.

## Fitur Halaman yang Tersedia
- Beranda (ringkasan fitur utama)
- Booking (filter & slot jadwal)
- Telekonsultasi (daftar dokter & ruang konsultasi)
- Rekam Medis (ringkasan & riwayat kunjungan)
- Pengingat (buat & daftar pengingat)
- Edukasi (kategori konten kesehatan)
- Admin Dashboard (statistik platform, aktivitas terbaru)

## Tujuan
Memberikan artefak visual/HTML yang mudah di-screenshot untuk dimasukkan ke dalam proposal / laporan.

## Menjalankan Secara Lokal
Install dependency (pastikan Node.js >= 18):

```bash
npm install
npm run dev
```

Akses di: http://localhost:3000

## Cara Mengambil Screenshot
1. Jalankan server dev.
2. Gunakan resolusi browser 1440x900 (desktop) atau devtools untuk variasi mobile (iPhone 14 width 390px).
3. Screenshot tiap halaman: Beranda, Booking, Telekonsultasi, Rekam Medis, Pengingat, Edukasi, Admin.
4. Jika perlu, tambahkan highlight (kotak merah) pada elemen penting menggunakan alat desain (Figma/PowerPoint).

## Struktur Direktori Penting
```
web/
  app/        # Halaman Next.js (routing app directory)
  components/ # Komponen UI reusable
  app/globals.css  # Token desain & styling global
  theme.ts    # Referensi theme (mapping variabel CSS)
```

## Penyesuaian Lanjutan (Opsional)
- Tambahkan ikon (misal: Tabler Icons) untuk memperkaya tampilan.
- Ganti placeholder tabel dengan grafik (library ringan seperti Chart.js / Recharts) jika ingin lebih realistis.
- Tambahkan dark mode dengan menambahkan class `dark` pada `<body>` dan varian warna.

## Lisensi Desain
Mockup ini dapat digunakan internal tim untuk dokumentasi dan diskusi. Pastikan materi konten (teks/ikon) mengikuti pedoman identitas merek Jogja Waras yang akan ditetapkan.

## Langkah Berikutnya
- Integrasi data dinamis dari backend (API booking, FHIR records, dsb.).
- Implementasi autentikasi (role user vs admin).
- Desain halaman detail (contoh: detail dokter, detail rekam medis, form pengingat lengkap).

---
Dibuat otomatis oleh asisten untuk membantu dokumentasi proposal.
