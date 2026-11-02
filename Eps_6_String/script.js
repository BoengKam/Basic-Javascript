let dataString = "data string";
console.log(dataString);

//1. escaping string
let data1 = 'Ucup berkata "apa kabar dunia?"';
console.log(data1);
let data2 = "Otong berkata \"tetep asyik\"";
console.log(data2);
let data3 = "ucup berjalan-jalandi tepi pantai, \nkereeen";
console.log(data3);
let data4 = "boengkam membaca buku \tdi rumah";
console.log(data4);
let data5 = "aria bertemu temannya di taman, \rbareng-bareng";
console.log(data5);
let data6 = "kamal pergi belajar ke luar negeri, \bUnited Kingdom";
console.log(data6);
let data7 = "kemana aja euy, \fkemarin gak dateng";
console.log(data7);

// 2. Literal String (templat literal string)
let namaDepan ="Otong";
let namaBelakang = "Surotong";
let umur = 10;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

// Lebih elegan supaya ii tidak membikin eror
let biodata = '${namaDepan} ${namaBelakang} dengan umur ${umur}';
console.log(biodata);