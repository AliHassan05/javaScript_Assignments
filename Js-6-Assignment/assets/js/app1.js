// Practice Solve the following questions

// • Write a loop to print numbers from 1 to 10.
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// • Write a loop to print even numbers from 1 to 20.
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// • Write a loop to print odd numbers from 1 to 15.
// for (var i = 0; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// • Write a loop to calculate and print the factorial of a number (let's say 5).
// var result = 1;
// result *= 5;
// result *= 4;
// result *= 3;
// result *= 2;
// result *= 1;
// document.write("The factorial of 5 is: " + result);

// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.
// var tableNum = 7;
// document.write("<h2>Table Of 7</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(`${tableNum} * ${i} = ${tableNum * i} <br>`);
// }

// • Write a loop to print the Fibonacci series up to the 10th term.
// (The Fibonacci sequence is a type series where each number is the sum of the two that precede it.
// It starts from 0 and 1 usually. The Fibonacci sequence is
// given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)

// let n = 10;
// let a = 0,
//   b = 1,
//   temp;
// document.write(a + "<br>");
// document.write(b + "<br>");
// for (let i = 2; i < n; i++) {
//   temp = a + b;
//   a = b;
//   b = temp;
//   document.write(temp + "<br>");
// }

// • Write a loop to find and print the sum of digits of a number (let's say 123).

// let number = 123;
// let sum = 0;
// let numberString = number.toString();

// for (let i = 0; i < numberString.length; i++) {
//     sum += parseInt(numberString[i]);
// }
// document.write("The sum of digits is: " + sum);

// • Write a loop to print the reverse of a string (let's say "hello").
// var str = "hello";
// var reversed = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// document.write("The reverse of the string is: " + reversed);

// • Write a loop to print the square of numbers from 1 to 10.
// for (var i = 1; i <= 10; i++) {
//   var square = i * i;
//   console.log(square);
// }

// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).

// var num = [3, 7, 2, 9, 5];
// var smallest = Number.MAX_SAFE_INTEGER;

// for (var i = 0; i <= num.length; i++) {
//   if (num[i] < smallest) {
//     smallest = num[i];
//   }
// }
// console.log(smallest);
