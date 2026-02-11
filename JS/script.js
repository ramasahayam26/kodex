// Basic Console Usage-----------------------------------------------------------------------

// 1.Create two variables: one storing your full name and another storing your favorite hobby. Print: "My name is and "

var fullName = 'Sushanth Reddy Ramasahayam' ; 
var hobby = 'Nothing';
console.log( "My name is", fullName , "and", hobby);

// 2.Perform the arithmetic calculation 45 * 2 - 10 and print the result.
console.log(45*2-10);

// 3.Retrieve and print the current year using JavaScript’s Date object.



// 4.Store your first name and last name separately and print your full name
var firstName = 'Sushanth Reddy'
var lastName = 'Ramasahayam'
console.log( firstName +  "", lastName);


// 5.Create a variable, print it, update it, and print again.
var a = 10;
console.log(a);

a=20;
console.log(a);

// 6.Print a custom error message using console.error().
console.error('Noting is Wrong');


// 7.Store a number and print its square

// var square = Number(prompt("Enter the number"));
var square = 5;
console.log('Square of the number is', square * square);


//  8.Create a boolean variable and print it.

var user = true;
console.log(user);


// 9.Store your age and print whether it is greater than 18.

var age = 22;

if(age>18){
    console.log( 'My age is greater than 18 = ', age);
}

// 10.Divide 100 by 0 and print the result.

console.log('Divide 100 by 0 =' + 100/0);


// Variables & Data Types------------------------------------------------------------------------------------

// 11.Create a variable using let and print it

let nickName = "kanna"
console.log(nickName);

// 12.Declare a constant PI = 3.14 and print it.

const PI = 3.14 ;
console.log(PI);

// 13. Create a variable, update it, and print again.


// 14.Print typeof null.
console.log(typeof null);


// 15.Store "25" in a variable and print its type.

var num = "25";
console.log(typeof number)

// 16.Create a boolean and print its type.

var user = true;
console.log(typeof user);

// 17.Create a string, number, and boolean. Print all together.

var string = "Kanna";
var number = 22;
var boolean = false;
console.log(string, number, boolean);

// 18.Declare a variable without value and print its type.

var value
console.log(typeof value);


// 19.Create a variable with undefined and print its type.

var data = undefined;
console.log(typeof data);

// 20.Create an array using const.  - Print it  - Try reassigning (observe error)  - Push a new value and print updated array.

const array = [10, 20, 30, 40, 50, 60, 70]
console.log(array);




// Loops ---------------------------------------------------------------------------------------------

// 21.Print numbers from 1 to 50 using for.

for( i=0; i<=50; i++){
    console.log(i);
}

// 22.Using while, calculate sum from 1 to 10

let j = 1
let sum = 0

while(j <= 10){
    sum = sum + j
    j++
}
console.log('Sum of 1 to 10 = ', sum)

// 23.Use for...of to print each character of "JavaScript".

var word = "JavaScript";

for (var char of word) {
    console.log(char);
}


// 24.Print odd numbers from 1–20 using continue.

for (let odd = 1; odd <= 20; odd++) {
    if (odd % 2 === 0) {
        continue;
    }
    console.log("Odd number", odd);
}

// 25.Use do...while to print 5 to 1

let d = 5;

do {
    console.log(d);
    d--;
} while (d >= 1);


// 26.Calculate factorial of 5

var num = 5
var factorial = 1

for(f=1; f<=num; f++){
    factorial = factorial * f
}
console.log('Factorial of 5 is ', factorial);

// 29.Print numbers from 1–100 divisible by 5 using while.

for(let div = 1; div <= 100; div++){
    if(div % 5 === 0){
        console.log( div + '- Divisible by 5');
    }
}

// 30. Create object {name, age} and print keys using for...in.






// If–Else Conditionals -------------------------------------------------------------------------------------

// 31.Store a number and check positive or negative.

var numPn = -5

if (numPn > 0) {
    console.log(numPn + "Number is Positive");
}
else if(numPn < 0) {
    console.log(numPn + "Number is Negative");
}


// 32.Print Adult if age ≥18 else Minor.

var age = 15;
if(age >= 18){
    console.log("Adult")
}else{
    console.log("Minor")
}


// 33.Check even or odd.

// var n = Number(prompt('Enter a number'));
var n = 15
if(n % 2 === 0){
    console.log('Even number', n);
}else if( n % 2 !== 0){
    console.log('Odd number', n);
}

// 34.Find greater between two numbers.

var btn1 = 55;
var btn2 = 50;

if(btn1 > btn2){
    console.log(btn1 + 'is greater than', btn2);
}else{
    console.log(btn1 + 'is smaller than', btn2);
}


// 35.Score grading: ≥90 Excellent ≥70 Good Else Needs Improvement

var grade = 50;
if(grade >= 90){
    console.log('Excellent');
}else if( grade >= 70){
    console.log('Good');
}else{
    console.log('Needs Improvement');
}


// 36.Check leap year.

// let year = Number(prompt("Enter a year:"));
let year = 1988

if (year % 4 === 0 ) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// 37.Check vowel or consonant.

// var vowels = prompt("Enter a alphabet:");
var vowels = a;
if ( vowels == 'a' || 
     vowels == 'e' ||
     vowels == 'i' ||
     vowels == 'o' ||
     vowels == 'u' ) {

    console.log(vowels + 'is vowel');
}
 else {
    console.log(vowels + 'is consonants');
}


// 38.Find largest of three numbers.

var n1 = 50;
var n2 = 55;
var n3 = 60;

if (n1 >= n2 && n1 >= n3) {
    console.log(n1 + " is the largest");
} 
else if (n2 >= n1 && n2 >= n3) {
    console.log(n2 + " is the largest");
} 
else {
    console.log(n3 + " is the largest");
}


// 39. Password validation (admin123).

var correctPassword = "admin123";

var userInput = "admin";

if (userInput === correctPassword) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}




// 40. Check divisibility by 3 and 5.

var num4 = 154;
if(num4 % 3 == 0 && num4 % 5 == 0){
    console.log(num4 + ' is divisibility by 3 and 5')
}else{
    console.log(num4 + ' is not divisible by 3 and 5')
}

// More Loop Basics ---------------------------------------------------------------------------------------

// 41. Sum from 1 to 100.

var s = 1
var Sum = 0

while(s <= 100){
    Sum = Sum + s
    s++
}
console.log('Sum of 1 to 100 = ', Sum)


// Print table of 5.

let table = 5;
console.log('Multiplication Table of ' + table);

for (let i = 1; i <= 10; i++) {
  var result = table * i;
  console.log(table + '*' +  i + '=' + result);
}



// Count even numbers between 1–50.
console.log('Count even numbers between 1–50.')

for(var e = 0; e <= 50; e++){
    if(e % 2 == 0){

        console.log(e)
    }
}


//  Print 10 to 1
console.log(' Print 10 to 1')

for(var p = 10; p >= 0; p--){
    console.log(p)
}


// Sum of even numbers from 1–20

console.log('Sum of even numbers from 1–20')

let sumev = 0

for(var even = 1; even <= 20; even++){
    if(even % 2 == 0){
        sumev += even;
    }
}

console.log(sumev)


// Print squares from 1–10.

console.log('Print squares from 1-10.')

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}


// Count characters in "JavaScript".

var jsl = 'JavaScript'
console.log('Count characters in JavaScript - ' + jsl.length)


// Find largest in [3,7,2,9,5]

var numbers = [3, 7, 2, 9, 5];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log('Largest number from [3, 7, 2, 9, 5] is ' + largest);


// Print pattern:
var star = ''

for( let j = 1 ; j <=5; j++){
     star += '*';
     console.log(star)
}
    

// Find sum of array: [10, 20, 30, 40] 

var numbers = [10, 20, 30, 40];
var arraySum = 0;

for (let i = 0; i < numbers.length; i++) {
    arraySum += numbers[i];
}

console.log(arraySum);
