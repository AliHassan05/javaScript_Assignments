// Q1. Write a program that takes an array of numbers as input. Double each even number in the
// array and remove all odd numbers. Return the modified array.

// var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var modifiedArray = [];

// for (var i = 0; i < inputArray.length; i++) {
//   if (inputArray[i] % 2 === 0) {
//     modifiedArray.push(inputArray[i] * 2);
//   }
// }
// console.log(modifiedArray);

// Q2.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

// var capitalvarters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "1234567890";
// var password = prompt("Password");

// var minLength = false;
// var capitalvarterHe = false;
// var numberHe = false;

// if (password.length >= 8) minLength = true;
// for (var i = 0; i < password.length; i++) {
//   console.log(password[i]);
//   if (capitalvarters.indexOf(password[i]) !== -1) {
//     capitalvarterHe = true;
//   }
//   if (numbers.indexOf(password[i]) !== -1) {
//     numberHe = true;
//   }
// }

// if (minLength && capitalvarterHe && numberHe) {
//   alert("Password is ok");
// } else {
//   alert("Password is not ok");
// }

// Q3.Write a program that takes two arrays of numbers as input and returns a new array containing only
// the elements that are present in both arrays. Use nested for loops to compare each element
// of the first array with each element of the second array.
// Input arrays
// var array1 = [1, 2, 3, 4, 5];
// var array2 = [3, 4, 5, 6, 7];
// var commonElements = [];

// for (var i = 0; i < array1.length; i++) {
//   for (var j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       commonElements.push(array1[i]);
//       break;
//     }
//   }
// }
// console.log("Common elements:", commonElements);

// Q4.Write a program that takes a number as input and checks whether it is a prime number or not.
// Take user input
// var number = parseInt(prompt("Enter a number: "));
// if (number < 2) {
//   console.log(number + " is not a prime number.");
// } else {
//   var isPrime = true;
//   for (var i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(number + " is a prime number.");
//   } else {
//     console.log(number + " is not a prime number.");
//   }
// }

// Q5.Write a program that takes a nested array as input and flattens it into a single array. For example,
// if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].
// Input nested array
// var nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// var flattenedArray = [];
// for (var i = 0; i < nestedArray.length; i++) {
//   for (var j = 0; j < nestedArray[i].length; j++) {
//     flattenedArray.push(nestedArray[i][j]);
//   }
// }
// console.log(flattenedArray);
