// Chapter No 17 ------> 20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var multiDimArray = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.
// var numericNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numericNum.length; i++) {
//   console.log(numericNum[i]);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = parseInt(
//   prompt("Enter the number for the multiplication table : ")
// );
// var tableLength = parseInt(
//   prompt("Enter the length of the multiplication table : ")
// );

// document.write(`<h2>Multiplication Table of ${tableNumber}</h2>`);
// for (let i = 1; i <= tableLength; i++) {
//   document.write(`${tableNumber} * ${i} = ${tableNumber * i} <br>`);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`${fruits[i]} <br>`);
// }
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// 6. Generate the following series in your browser See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write(`<h3>counting</h3>`);

// for (var i = 0; i < counting.length; i++) {
//   document.write(`${counting[i]},`);
// }

// var reverseCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(`<h3>Reverse Counting</h3>`);

// for (var i = reverseCounting.length - 1; i >= 0; i--) {
//   document.write(`${reverseCounting[i]},`);
// }

// var evenNum = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// document.write(`<h3>Even Number</h3>`);

// for (var i = 0; i < evenNum.length; i++) {
//   if (evenNum[i] % 2 === 0) {
//     document.write(`${evenNum[i]},`);
//   }
// }

// var oddNum = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// document.write(`<h3>Odd Number</h3>`);
// for (var i = 0; i < oddNum.length; i++) {
//   if (oddNum[i] % 2 != 0) {
//     document.write(`${oddNum[i]},`);
//   }
// }

// document.write(`<h3>Series</h3>`);
// for (let i = 1; i <= 10; i++) {
//   var num = i * 2;
//   document.write(`${num}k,`);
// }

// 7. You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Check The Item Is Exsist Or Not : ");
// var isfound = false;

// for (var i = 0; i < item.length; i++) {
//   if (userInput === item[i]) {
//     console.log(`Item Found ${userInput}`);
//     isfound = true;
//     break;
//   }
// }
// if (isfound === false) {
//   console.log(`Not Found`);
// }
// console.log(item[i]);

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var number = [24, 53, 78, 91, 12];
// var largestNum = 0;

// for (var i = 0; i < number.length; i++) {
//   if (number[i] > largestNum) {
//     largestNum = number[i];
//   }
// }
// document.write(largestNum + ": is a Largest Number");

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var number = [24, 53, 78, 91, 12];
// var smallestNum = Number.MAX_SAFE_INTEGER;
// for (var i = 0; i < number.length; i++) {
//   if (number[i] < smallestNum) {
//     smallestNum = number[i];
//   }
// }
// document.write(smallestNum + ": Is The Smallest Number");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
