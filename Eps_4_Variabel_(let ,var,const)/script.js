// ini adalah komen

// 1. Variable dengan let
let nama = "ucup surucup";

//tampilkan data
console.log(nama);

//kita ubah nilai variabel nama
nama = "Otong Surotong";
console.log(nama);


// 2. Variable dengan var
var namaDepan = "Ucup";
console.log(namaDepan);
namaDepan = "Otong";
console.log(namaDepan);

// kelakukan dari let
let namaBelakang = "Surucup"
{
    let namaBelakang = "Surotong";
    console.log(namaBelakang); //hanya menampilkan yg di dalam scope jika menggunakan let
}
console.log(namaBelakang);

// kelakukan dari var
var namaTengah = "Keren";
{
    var namaTengah:"Ganteng";
    console.log(namaTengah); // jika menggunakan var akan merubah data yang diluar scoping
}
console.log(namaTengah)

// kasus khusus tanpa keyword akan menjadi part
gorengan = "Bala-bala";
{
    gorengan = "Combro";
}
console.log(gorengan);

// 3. const

const TTL = "10 Maret 2022";
console.log(TTL);
TTL = "2 Maret 2040"; // tidak bisa dirubah dan akan eror jika typenya const