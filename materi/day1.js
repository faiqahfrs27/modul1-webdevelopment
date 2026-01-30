// console.log('Hello World');

// ini adalah comment
// ini adalah comment

/* 
    ini 
    adalah 
    comment
*/

/* ============= VARIABLE ============
storage / penampungan data
dapat berupa var, let, const (yg akan dipakai let sama const)
*/

// var person = 'Budi';
// console.log(person);

// let person2 = 'Joko';
// console.log('isi person2 sebelum diisi ulang : ', person2);
// person2 = 'jack'
// console.log('isi person2 setelah diisi ulang : ', person2);

// const person3 = 'siti';
// console.log(person3);
// person3 = 'Test'; // <- ini gak bakalan bisa


// ============ VARIABLE NAMING ============
/*
    - must contain only letters, digit, or symbol $ dan _
    - the first character must not digit
    - case sensitive
*/

const companyName = 'Purwadhika'; //camel case <- pake yg ini, yg disarankan sm js nya
const CompanyName = 'Purwadhika'; //pascal case
const company_name = 'Purwadhika'; //snake case

// ========== DATA TYPES ==========
// primitive data types : string, number, boolean, null, & undefined
// non primitive data types : object, & array

// string -> '', "", ``
console.log('Purwadhika');
console.log("Purwadhika");
console.log(`Purwadhika`);

// number -> 10, 20, 100, 1000
console.log(10);
console.log(20);
console.log(1000);

// boolean -> true or false
console.log(true);
console.log(false);

//to run quokka : cmd + k + q

//null -> menandakan sebuah variable itu value nya kosong dan belum terisi
const orang = null;

// undefined -> js tidak tau isinya
const orang2 = undefined;

console.log(typeof companyName); // <- untuk cek tipe data nya pake 'typeof'
// kenapa null typeof nya adalah object? itu bug legendaris dari javascript

