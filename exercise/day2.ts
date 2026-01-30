// ======== PRACTICE SESSION =========
//1. Area of Rectangle
let length: number = 5;
let width: number = 3; 

//baiknya dibuat rumusnya dulu:
// const rect_area = length * width;
console.log(length * width);

//2. Perimeter of Rectangle
console.log(2 * (length + width));

//3. Diameter, Circumference, and Area of a Circle
let radius: number = 5;
let phi: number = 3.14; // bisa pake 'Math.PI' untuk nilai phi yg lebih akurat 


//Diameter
console.log(2 * radius);
//Circumference
console.log(2 * phi * radius);
//Area
console.log(phi * (radius ** 2));

//4. Angles of Triangle if wo angles are given
let a: number = 80;
let b: number = 65;
console.log(180 - (a + b));

//5. Convert days to Years, Month, and Days.
const dyear: number = 365; //in days
const dmonth: number = 30; //in days

let exdays: number = 400;

let year: number = Math.floor(exdays / dyear);
let ryear: number = exdays % dyear; // remaining year

let month: number = Math.floor(ryear / dmonth); //menggunakan 'Math.floor' untuk pembulatan kebawah.
                                                // 'Math.ceil' untuk pembulatan keatas, 'Math.round' untuk yg paling mendekati (lebih netral).
let rdays: number = ryear % dmonth; //remaining days
console.log(exdays + ' days = ' + year + ' year, ' 
    + month + ' month, ' + rdays + ' days');

//6. Difference between Dates in Days.
const date1: Date = new Date();
date1.setDate(20);
date1.setMonth(0);
date1.setFullYear(2022)
console.log(date1);

const date2: Date = new Date();
date2.setDate(22);
date2.setMonth(0);
date2.setFullYear(2022)
console.log(date2);

const difftime = date2.getTime() - date1.getTime();
const diffdays = difftime / (1000 * 60 * 60 *24)
console.log(diffdays);