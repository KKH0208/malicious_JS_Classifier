function insertAfter(addition, konten) {
var parent = konten.parentNode;
if (parent.lastChild == konten) {
parent.appendChild(addition);
} else {
parent.insertBefore(addition, konten.nextSibling);
}
}
function insertAbove(addition, konten) {
var parent = konten.parentNode;
parent.insertBefore(addition, konten);
}
function insertBellow(addition) {
var parent = konten;
parent.appendChild(addition);
}
var iklan1 = document.getElementById("kode-iklan-tengah1");
var iklan2 = document.getElementById("kode-iklan-tengah2");
var iklanAtas = document.getElementById("kode-iklan-atas");
var iklanBawah = document.getElementById("kode-iklan-bawah");
var bacaJuga = document.getElementById("baca-juga");
var konten = document.getElementById("body-post-it");
var lokasi = konten.querySelectorAll("br,p,div > br,div > div > br,div > div > div > br,div > p,div > div > p,div > div > div > p,span > br, span > p");
if (lokasi.length > 0) {
insertAbove(iklanAtas,konten); 
insertBellow(iklanBawah);
} 
if (lokasi.length > lokasiIklanTengah1) {
insertAfter(iklan1,lokasi[lokasiIklanTengah1]);
} 
else {
iklan1.innerHTML = "";
}
if (lokasi.length > lokasiIklanTengah2) {
insertAfter(iklan2,lokasi[lokasiIklanTengah2]);
} 
else {
iklan2.innerHTML = "";
}
if (lokasi.length > lokasiBacaJuga) {
insertAfter(bacaJuga,lokasi[lokasiBacaJuga]);
} 
else {
bacaJuga.innerHTML = "";
}