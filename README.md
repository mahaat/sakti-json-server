# Sakti Fake Rest API
Project ini menggunakan Json Server untuk membuat Rest Api. Data yang digunakan disimpan di db.json. File db.json digenerate menggunakan script dbCreator.js dari file - file di dalam folder db.
## Langkah Memasukkan Data
1. Buat data berbentuk object json, data harus berupa list, lihat contoh di dalam folder db
2. Untuk data Sakti, dapat diquery kemudian export dataset ke csv, kemudian dengan online tool, convert ke json.
3. Jalankan script dbCreator.js `node dbCreator.js`

## Langkah Menjalankan Server
Jalankan dengan perintah `npm start`