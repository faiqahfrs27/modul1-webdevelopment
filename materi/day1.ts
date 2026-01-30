//versi JS
const message = 'hello';

//versi TS
const message2: string = 'hello2';

//======= STRING BUILT IN METHOD ======
const name: string = 'Bubdi';
const hello: string = 'hello world';
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.toLowerCase().replaceAll("b", "P"));
console.log(name.split("")); // <- berupa string
console.log(hello.split("")); // <- berupa array karena ada spasi
console.log(name.concat(" ").concat(hello));
console.log(name + " " + hello);
console.log(name.slice(0,3));
console.log(name.slice(1));
console.log(name.slice(1,4));

//========= TEMPLATE LITERALS / TEMPLATE STRINGS ==========
const welcome: string = 'hello';
const nama: string = 'Budi';

console.log(welcome + " " + nama);
console.log(`${welcome} ${nama}`); // <- spasi nya kehitung ditengah

//======== NUMBER BUILT IN METHOD ========
const angka: string = "4000";

console.log(angka);
console.log(Number(angka)); //convert tipe data str ke number
console.log(parseInt(angka)); //convert tipe data str ke number

console.log(Number.MAX_VALUE); //untuk tau jumlah MAX angka yg bisa ditampung oleh javascript
console.log(Number.MIN_VALUE); //untuk tau jumlah MIN angka yg bisa ditampung oleh javascript

//========== STRING CONVERSION ========
const angka2: number = 5000;

console.log(angka2);
console.log(String(angka2)); // convert tipe data number to string
console.log(angka2.toString()); // convert tipe data number to string

// ========= BOOLEAN CONVERSION ==========
console.log(Boolean(1));
console.log(Boolean(0)); // <- hanya '0' yg bernilai false
console.log(Boolean(-10));
console.log(Boolean(0.123453));
console.log(Boolean("")); //jika tidak ada isinya maka string bernilai false
console.log(Boolean(" "));

// ======== DATE ========
const now: Date = new Date(); // <- menampilkan waktu sekarang
console.log(now); // tambahkan '+7' untuk waktu indonesia
console.log(now.getFullYear());
console.log(now.getMonth() + 1); //Januari dimulai dari '0'
console.log(now.getDate());

now.setDate(10);
now.setMonth(2);
now.setFullYear(1990);
console.log(now);

// ========= BASIC OPERATOR =========
/*
    + -> tambah
    - -> kurang
    * -> kali
    / -> bagi
    % -> modulo (sisa bagi, biasa dipakai untuk ngecek apakah bilangan itu ganjil atau genap)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(4 - 1);
console.log(4 * 2);
console.log(4 / 2);
console.log(9 % 2);
console.log(3 * 2);

// ======== MODIFY IN PLACE ========
let n: number = 4;
n += 2 // -> n = n + 2
console.log(n);

// ======== INCREMENT & DECREMENT ========
let counter: number = 3;

counter++; // <- counter + 1 (INCREMENT)
counter--; // <- counter - 1 (DECREMENT)
console.log(counter);

// ======== POSTFIX & PREFIX ========
let counter2: number = 2;

console.log(counter2++); //postfix -> tampilkan dulu, baru menambahkan value nya di balik layar
console.log(++counter2); //prefix -> tambahkan dulu baru ditalmpilkan
// console.log(counter2);

// ======== COMPARISON OPERATOR ========
/*
    == (CEK VALUE NYA SAJA)
    === (CEK VALUE DAN TIPE DATA)
    !=
    <
    >
    <=
    >=
*/

console.log(2 == '2'); //pengecekan di value nya saja
console.log(2 === '2'); //pengecekan di value dan tipe data
console.log(2 < 5); 
console.log(2 > 5); 
console.log(5 < 5); 
console.log(5 <= 5); 
console.log(5 >= 5); 
console.log(5 != 5); 

// ======== MATH ==========
//1. Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

//2. Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

//3. Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.3));

//4. Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(10, 17, 8, 60, 100));

//5. Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(10, 17, 8, 60, 100));

//6. Math abs (absolute) -> menghilangkan tanda negatif
console.log(Math.abs(-700));

//7. Math random -> menghasilkan angka acak dari 0 hingga 1
console.log(Math.random());

//angka random dari 1 hingga 100
console.log(Math.floor(Math.random() * 100) + 1);

//angka random min value hingga maks value
const min: number  = 10;
const max: number = 27;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//========= AKHIR MATERI DAY-1 ===========

