// ======= ARRAY =======
//sangat mementingkan posisi (by index)
const arr = []; //cara 1
const arr2 = new Array(); //cara 2

const arrayOfString: string[] = ['A', 'B', 'C', 'D'];
console.log(arrayOfString[2]);


const arrayOfNumber: number[] = [1, 2, 3, 4, 10, 100];
const arrayCombination: (string | number)[] = ['A', 1, 'B', 2, 'C', 3];

// ======= OBJECT =======
//dalam object ada key dan value
//tidak mementingkan index (not by index)
const student = {
    name: 'Budi', //<- name adalah key, budi adalah value
    age: '12'};

// const siswa: {age: number; name: string} = {age: 12, name: 'Budi'};

// ======= INTERFACE =======
//(hanya ada di tyoescript)
interface Student1 {
    age: number;
    name: string;
}

// ======= OBJECT =======
const siswa: Student1 = {age: 12, name: 'Budi'};
console.log(siswa.name); //<- cara 1 (lebih sering pakai yg ini)
console.log(siswa['age']); //<- cara 2



// ======= TYPE =======
type Student2 = {
    age: number;
    name: string;
}
const siswa2: Student2 = {age: 13, name: 'Joko'}

interface Siswa extends Student1{
hobby: string
}

const siswa3: Siswa = {
    age: 12,
    name: "budi",
    hobby: "mancing"
}

// ======= ARRAY OF OBJECT =======
const students: Student1[] = [
    {name: 'jack', age: 20}, //index: 0, length: 1
    {name: 'udin', age: 19}, //index: 1, length: 2
    {name: 'joko', age: 17}, //index: 2, length: 3
    {name: 'siti', age: 21}, //index: 3, length: 4
]; //panjang array = 4, jumlah index = 3 (dihitung dr 0)

console.log(students[2].name);
console.log(students[2].age);

console.log(students.length);

// =======  FOR OF =====
//(untuk looping isi array, tp gabisa akses isi indexnya)
const fruits: string[] = ['apple', 'banana', 'orange'];

for (const fruit of fruits){ //<- kasih namanya singular dr yg sblh kanannya (fruit dr fruits.)
    console.log(fruit);
}
//contoh pke for loop biasa
for (let i = 0; i < fruits.length; i++){ //<- pke yg ini kl mau olah indexnya
    console.log(fruits[i]);
}

// ======= FUNCTION =======
//(dianggap sebagai sub program, dipakai berulang kali, dan dipakai kapan saja)
//1. function declaration
/* 
    function namaFunc(){
        // logic
    }
*/

function squareFunc(){
   return 5 * 5; //-> return untuk menghasilkan
}

const result = squareFunc();
console.log(result); //<- cara 1
console.log(squareFunc()); //<-cara 2

//2. function expression <- tidak termasuk dalam hoisting
/*
    const namaFunc = function () {
        //logic
    }
*/

const squareFunc2 = function () {
    return 5 * 5;
};

console.log(squareFunc2());

//======= FUNCTION SCOPE =======
// variable yg di define didalam function, hanya bisa diakses didalam func tsb.

function greeting() {
    const hello: string = 'hello';

    console.log(hello);

    return hello;
}

//console.log(hello); //ini gk bisa

greeting();

// ======= PARAMETER & ARGUMENT =======
// parameter -> variable yg mewakili value dr argument yg dimasukkan
// argument -> value yg dimasukkan saat pemnanggilan function

//PARAMETER                 ^parameter
function greeting2(name: string, company?: string) { //<- tanda tanya untuk bikin parameter company optional (bisa diisi dgn argumen, bisa tidak.)
    const hello: string = 'Hello ';
    
    if (company){
        return hello + name + " " + company;
    } else {
        return hello + name;
    }
}
//ARGUMENT              ^argument
console.log(greeting2("Joko", "Grab"));
console.log(greeting2("Siti", ));
console.log(greeting2("Budi", "Ruang Guru"));


// ======= DEFAULT PARAMETER =======
function multiply(a:number, b:number = 10){
    console.log(a);
    console.log(b);

    return a * b; 
}

multiply(5, 2);
multiply(5);

// ======= REST PARAMETER =======
//mewakili sisa argumen ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]){
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ======= NESTED FUNCTION =======
//fungsi yg berada didalam fungsi
//inner function -> karakteristik: bisa mengakses parameter dari outer function
//outer function -> karakteristik: tidak bisa mengakses parameter dari inner function

function getMessage(firstName: string){
    function sayHello(){
        return "Hello " + firstName + ", ";
    }

    function welcome(){
        return "Welcome to purwadhika";
    }

    return sayHello() + welcome();
}
console.log(getMessage("Brandon"));

//======= RECURSIVE =======
//fungsi yg memanggil dirinya sendiri (looping tp manggil dirinya sendiri)

function countdown(angka: number){
    console.log(angka);

    let nextNumber = angka - 1;

    if (nextNumber > 0){
        countdown(nextNumber);
    }
}

countdown(10);

// ======= ARROW =======
//shortcut untuk menuliskan function expression

//function expression 
const square3 = function (angka: number){
    return angka * angka;
}

//arrow function
const square4 = (angka: number) => {
    return angka * angka;
}

//kalau cuman 1 line bisa disingkat
const square5 = (angka: number) => angka * angka;

//======= ARRAY BUILT IN METHOD =======
//JOIN -> menggabungkan value yg ada dalam array ke bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

//POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["hello", "world", "Test"];
console.log(words2);
words2.pop();
console.log(words2);

//SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "Test"];
console.log(words3);
words3.shift();
console.log(words3);

//UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "Test"];
console.log(words4);
words4.unshift("joko");
console.log(words4);

//PUSH -> menambahkan value ke urutan paling akhir array
const words5: string[] = ["hello", "world", "Test"];
console.log(words5);
words5.push("siti");
console.log(words5);    

//SPLICE -> menghapus, mengganti, atau menambahkan value pada array
//syntax -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["Januari", "Maret", "April", "Mei", "Juni"];

//menambahkan data
months.splice(1, 0, "Februari");
console.log(months);

//menghapus data
months.splice(4, 1);
console.log(months);

//edit data
months.splice(3, 1, "May");
console.log(months);

//SORT -> mengurutkan isi array berupa string atau number
const fruits2:string[] = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.sort();
console.log(fruits2);
console.log(fruits2.reverse()); // <- untuk dibalik.

const numbers: number[] = [4, 9, 3, 7, 5, 10];
numbers.sort(); //(10 didepan karena sort hanya melihat angka depannya yaitu 1)
console.log(numbers);

numbers.sort((a, b) => a - b); //asc
//numbers.sort((a, b) => b - a); //desc
console.log(numbers);
