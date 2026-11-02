// global

// local
// berada di dalam{}
// let --> brucket{}

let nama = "Otong"

function sayNama(){
    let nama = "Ucup" // variabel dengan local scope
    console.log(nama + "di local scope");
}

sayNama();

console.log(nama + "di global scope");

// kasus 1

let nama2 = "Otong";

function sayNama2(){
    nama2 = "Ucup";
    console.log(nama2 + "di local scope");   
}

sayNama2();
console.log(nama2 + "di global scope");

// kasus 2
// var -> function scope

function sayNama3(){
    if(true){
        var nama3 = "Mario";
        let nama4 = "ASep";
    }
    console.log(nama3);
    console.log(nama4);
}

sayNama3();

// leaked

if(true){
    var nama5 = "Margarita";
}

console.log(nama5);