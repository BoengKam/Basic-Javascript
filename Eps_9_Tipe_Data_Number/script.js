// numbers

let nilai_int = 10;
let nilai_float = 10.123;
let nilai_big_int = 123131491495569123n; //bigInt

console.log(typeof nilai_int);
console.log(typeof nilai_float);
console.log(typeof nilai_big_int);

// menggunakan data ini gimana?

let angka = 5.678;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float)

// merubah string
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

// contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) +pajak;
console.log(bayar)
