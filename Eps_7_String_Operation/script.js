// operasi string

// 1. char at
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log('characer pada index 0 = ${dataChar}');
dataChar = dataString.charAt(1);
console.log('characer pada index 1 = ${dataChar}');
dataChar = dataString.charAt(2);
console.log('characer pada index 2 = ${dataChar}');
dataChar = dataString.charAt(3);
console.log('characer pada index 3 = ${dataChar}');
dataChar = dataString.charAt(4);
console.log('characer pada index 4 = ${dataChar}');
dataChar = dataString.charAt(5);
console.log('characer pada index 5 = ${dataChar}'); //hasilnya akan menjadi gibran

// 2. Nyambung string
let namaDepan = "Aria";
let namaBelakang = "Kamal";
let namaLengkap = namaDepan.concat(" ",namaBelakang, " si kerennn.");
console.log(namaLengkap);

// 3. mengambil index (kemunculan pertama)
console.log(namaLengkap.indexOf("k"))
console.log(namaLengkap.indexOf("a"))
console.log(namaLengkap.indexOf("r"))
console.log(namaLengkap.indexOf("m"))
console.log(namaLengkap.indexOf("A"))

// 4. Substring
let namaLengkap_5_11 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_11);
console.log(namaLengkap.substring(11,5)); // gak bisa dibalik, akan dihitung dari posisi terawal

// 5. slice
console.log(namaLengkap.slice(5,11)); 
console.log(namaLengkap.slice(11,5)); //akan kosong jika dibalik

// 6. replace
let namaBaru = namaLengkap.replace("Aria Kamal","Bang Boengkam");
console.log(namaBaru);


// 7. toLower
console.log(namaLengkap.toLowerCase());

// 8. Uppercase
console.log(namaLengkap.toUpperCase());

// 9. extract data number
let dataString2 = "10";
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = "10.125";
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);

