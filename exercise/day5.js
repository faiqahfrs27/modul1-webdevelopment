// 1. ======= TRIANGLE PATTERN =======
function triangleHeight(height){
  let num = 1;

  for (let row = 1; row <= height; row++) {
    let line = [];

    for (let col = 1; col <= row; col++) {
      line.push(num.toString().padStart(2, "0"));
      num++;
    }

    console.log(line.join(" "));
  }
}

triangleHeight(4);

// 2. ======= FIZZ BUZZ =======
//(replace multiples of 3 with 'Fizz', and replace multiples of 5 with 'Buzz'.)
function fizzBuzz(n){
    let num = [];

    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){ //<- kl ditaro dibawah tdk akan terbaca krn cara js baca code.
            num.push('FizzBuzz');
        } else if (i % 5 === 0){
            num.push('Buzz');
        } else if (i % 3 === 0){
            num.push('Fizz');
        } else {
            num.push(i);
        }
    }

    console.log(num);
}
fizzBuzz(16);

// 3. ======= BMI =======
function bmi(weight, height){
    let bmi = weight / (height * height);

    if (bmi < 18.5){
        console.log('less weight');
    } else if (bmi >= 18.5 && bmi <= 24.9){
        console.log('normal');
    } else if (bmi >= 25 && bmi <= 29.9){
        console.log('overweight');
    } else if (bmi >= 30 && bmi <= 39.9){
        console.log('very overweight');
    } else {
        console.log('extremely overweight');
    }
}
bmi(90, 1.75);

// 4.  ======= REMOVE ODD NUMBERS =======
//(return even numbers only)
function removeOdd(arr){
    let even = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even.push(arr[i]);
        }
    }
    console.log(even);
}
removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//5. ======= SPLIT A STRING =======
//(conver it into an array of words)
function split(string){
   const result = [];
   let temp = '';

   for (let i = 0; i < string.length; i++){
    temp += string[i];
    if (string[i] === ' '){
        result.push(temp);
        temp = '';
      } else temp += string[i];
    } 
    result.push(temp);
    console.log(result);
}
console.log(split("Hello World"));
