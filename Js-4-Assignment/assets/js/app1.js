// Chapter No 12 --- 13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var input = prompt("Enter a character (number or string):");
// var charCode = input.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//   document.write("The input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//   document.write("The input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//   document.write("The input is a lowercase letter.");
// } else {
//   document.write("The input is not a number or letter.");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integerOne = parseFloat(prompt("Enter First Integers"));
// var integerSecond = parseFloat(prompt("Enter Second Integers"));

// if (integerOne === integerSecond) {
//   console.log("Both Integers Are Equal");
// } else if (integerOne > integerSecond) {
//   console.log("Integers One Is Large");
// } else if (integerOne < integerSecond) {
//   console.log("Integers Second Is Large");
// } else {
//   console.log("Invalid Value");
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var number = parseFloat(prompt("Check The Number is Positive Or Negtive"));

// if (number === 0) {
//   console.log("The Number Is 0");
// } else if (number > 0) {
//   console.log("The Number Is Positive");
// } else if (number < 0) {
//   console.log("The Number Is Negative");
// } else {
//   console.log("InValid Number");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var input = prompt("Check Character If It Is A Vowel Or Not");

// if (input.length === 1) {
//   var char = input.toLowerCase();
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     console.log("The character is a vowel.");
//   } else {
//     console.log("The character is not a vowel.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = "ali123";
// var correctPassword = prompt("Enter Your Password Here : ");

// if (!correctPassword) {
//   console.log("Please Enter Your Password First");
// } else if (correctPassword === password) {
//   console.log(
//     "Correct! The password you entered matches the original password"
//   );
// } else {
//   console.log("Incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.write(`Hello : ${greeting}`);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):");
// // Convert the input to a number
// time = parseInt(time);

// // Check if the input is a valid number
// if (!isNaN(time)) {
//   // Convert the time to 12-hour format
//   if (time >= 0 && time < 1200) {
//     document.write(
//       "The time is " +
//         (time == 0 ? "12am" : (time < 100 ? "0" + time : time) + "am")
//     );
//   } else if (time >= 1200 && time < 2400) {
//     document.write(
//       "The time is " +
//         (time == 1200
//           ? "12pm"
//           : (time - 1200 < 100 ? "0" + (time - 1200) : time - 1200) + "pm")
//     );
//   } else {
//     document.write("Invalid time. Please enter a time between 0000 and 2359.");
//   }
// } else {
//   document.write("Invalid input. Please enter a valid number.");
// }
