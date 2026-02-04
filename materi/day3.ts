// ======== IF STATEMENT =========
// syntax
/*
    if(condition){
        code block -> akan diisi jika kondisi nya terpenuhi (true)
    }
*/

const age: number = 20; //kalau misal diisi dengan '10' maka output tdk akan muncul, krn false,

if (age >= 17){
    console.log("Anda bisa buat KTP");
}

// ======== ELSE STATEMENT =========

const age2: number = 10; //kalau misal diisi dengan '10' maka output tdk akan muncul, krn false,

if (age2 >= 17){
    console.log("Anda bisa buat KTP"); //IF TIDAK TER EKSEKUSI KRN KONDISI TIDAK MEMENUHI
} else {
    console.log("Anda belum bisa buat KTP");
}

// ======== ELSE IF STATEMENT =========
const grade: string = "A";

if (grade === "A"){
    console.log("Nilai Bagus");
} else if (grade === "B"){
    console.log("Nilai Lumayan");
} else if (grade === "C"){
    console.log("Nilai Buruk");
} else {
    console.log("Nilai Tidak Diketahui");
}

// ======== SWITCH CASE ========= untuk membandingkan value yg spesifik, misal : hari (senin, selasa), user (admin, dll)
// syntax
/*
    switch(value){
        case "value1":
            //add code here
            break;
        case "value2":
            //add code here
            break;
        case "value3":
            //add code here
            break;
        default:
            //add code here
            break;
    }
*/

const day: string = "rabu";

switch (day) {
    case "senin":
        console.log("Hari Senin");
        break;
    case "selasa":
        console.log("Hari Selasa");
        break;
    case "rabu":
        console.log("Hari Rabu");
        break;
    default:
        console.log("Hari Tidak Ditemukan");
        break;
}

// ======== LOGICAL OPERATOR ========= 
// && -> and
// || -> or
// ! -> not

//AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 20;
const punyaSIM: boolean = true;

if (umur >= 17 && punyaSIM){ // akan ter eksekusi jika keduanya bernilai true.
    console.log("Boleh Bawa Kendaraan");
} else {
    console.log("Tidak Boleh Bawa Kendaraan");
}

//OR -> salah satu kondisinya harus bernilai true agar menghasilkan nilai true
const car: string = "mercy";

if (car === "mercy" || car === "bmw") {
    console.log("mobil eropa");

} else {
    console.log("mobil jepang");
}

//NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny

console.log(isSunny);
console.log(isRaining);

// ======== TERNARY OPERATOR ========= akan sering dipakai di front end
// shortcut untuk if else condition
// condition ? true : false

//cara panjang
const str: string = 'javascript';
if (str === "javascript") {
    console.log("javascript");
} else {
    console.log("not javascript");
}

//cara pendek
console.log(str === "javascript" ? "javascript" : "not javascript");
// kondisi true akan menjalankan 'javascript', kl kondisi false akan menjalankan 'not javascript'

//contoh kalau pake else if (tidak disarankan)
console.log(str === "javascript" ? "javascript" : str === "typescript" ? "typescript" : "not typescript / javascript");

// ======== LOOP STATEMENT (perulangan) =========
//tipe loop : for loop, while loop, do while loop

//FOR LOOP -> punya 3 statement
//statement 1 -> menginisialisasikan variable dari looping itu sendiri
//statement 2 -> mendefine kondisi dari looping tersebut
//statement 3 -> kode yg akan di eksekusi di akhir setiap iterasi

/*
    for(statement1;statement2;statement3;){
        code block yg akan di ulang
    }
*/

//looping 10x
for (let i = 0; i < 10; i++){ //-> akan terus diulang sampai tidak memenuhi kondisi
    console.log("hello");
}

//NESTED LOOP
for (let i = 0; i < 10; i++){ //-> akan terus diulang sampai tidak memenuhi kondisi
    for (let j = 0; j < 10; j++){
        console.log("hello");
    }
}

for (let i: number = 10; i >= 0; i--){ //-> akan terus diulang sampai tidak memenuhi kondisi
    console.log(i);
}

//WHILE LOOP (mirip dgn syntax if, tdk perlu mendefine kondisinya mau stop dimana)
/*
    while(condition){
        code block yg akan di ulang
    }
*/

let i: number = 1;
while (i < 10){ //<- melakukan pengecekan di awal
    console.log(i);
    
    i++;
}

//DO WHILE LOOP
/* 
    do{
        code block yg akan di ulang
    } while (condition)
*/

let count: number = 1;

do {// <- ngelakuin do sekali baru di lakukan pengecekan
    console.log(count);
    count++;

} while (count <= 5);

//BREAK -> digunakan untuk menghentikan looping

let sum: number = 0;

while (true){
    console.log(sum);

    if (sum >= 5){ //bisa disingkat jadi if (sum >= 5) break;
        break;
    }

    sum++; //-> kl gk ditambahkan 'sum++' akan jadi infinite loop.
    
}


//CONTINUE -> skip looping

for (let i: number = 0; i < 5; i++){
    if (i === 2){ //-> bisa disingkat jadi if (i === 2) continue;
        continue;
    }
    console.log(i);
}

// ====== PRACTICE SESSION =======
// 1. code to check whether the number is odd or even
let num1: number = 25;
let num2: number = 2;

if (num1 % 2 === 0){
    console.log(num1 + " = genap");
} else {
    console.log(num1 + " = ganjil");
}

if (num2 % 2 === 0){
    console.log(num2 + " = genap");
} else {
    console.log(num2 + " = ganjil");
}

// 2. code to check whether the number is prime number or not
//(bilangan yg hanya bisa dibagi satu atau bilangan itu sendiri)
let a: number = 7;
let b: number = 4;

if (a % 1 === 0 && a % a === 0){
    console.log(a + " adalah bilangan prima");
} else {
    console.log(a + " bukan bilangan prima");
}

if (b % 1 === 0 && b % b === 0){
    console.log(b + " adalah bilangan prima");
} else {
    console.log(b + " bukan bilangan prima");
}

//3. code to find the sum of the numbers 1 to N
let hasil: number = 0;
let deret: number[] = [];
let r: number = 5;


for (let i = 1; i <= r; i++){
    hasil += i;
    deret.push(i);
}
console.log(`${r} = ${deret.join(" + ")} = ${hasil}`);

//4. code to find the factorial of a number 
let n: number = 4;
let factorial: number = 1;
let angka: number[] = [];


for (let i = 1; i <= n; i++){
    factorial *= i;
    angka.push(i);
}
 console.log(`${n}! = ${angka.join(" x ")} = ${factorial}`);
 
//5. code to print the first N fibonacci numbers
//(hasil pertambahan dua angka sebelumnya)
const fib: number = 15;

let p: number = 0;
let q: number = 1;
let total: number = 0; //var kosong yg nnti akan diisi nilai sum dari fibonacci ke-15

for (let i = 0; i < fib; i++){
    [p, q] = [q, p + q];
    total += p;
}
 console.log(`fibonacci ke-${fib} = ${p}`);
    
