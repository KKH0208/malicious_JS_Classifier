// KONFIGURASI
var menit = 1; // Lamanya hitung mundur (dalam menit)
var detik = 5; // Detik standar (jangan diubah kecuali Anda tahu yang Anda lakukan)
var penghitung_detik = detik; // Set variabel detik yang lain untuk dimanipulasi
// HITUNG MUNDUR
penghitung_detik = 0;
function hitung_mundur() {
penghitung_detik--; // Setiap siklus 1 detik mengurangi nilainya 1 poin
if (penghitung_detik == -1) { // Deteksi detik ketika nilainya "0"
menit--; // Setiap siklus 1 menit mengurangi nilainya 1 poin
penghitung_detik = detik; // Me-reset detik untuk memulai hitung mundur menit yang baru
if (menit <= -1) { // Hitung mundur selesai
menit = 0;penghitung_detik = 0; // Menset menit dan detik ke "0"
clearTimeout(penghitung); // Stop hitung mundur
}
}
if (document.getElementById) {
document.getElementById("hitung_mundur_tampil").innerHTML=penghitung_detik; // Memasukkan nilai variabel menit dan detik untuk ditampilkan
}
penghitung=setTimeout("hitung_mundur()", 1000); // Set siklus penghitungan mundur (standar: 1 detik)
}
// INISIALISASI
if (document.all||document.getElementById)
document.write(' <b id="hitung_mundur_tampil">'+penghitung_detik+' </b>'); // Format tampilan hitung mundur di antarmuka
hitung_mundur();