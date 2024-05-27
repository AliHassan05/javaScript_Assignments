// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Your First Name : ");
// var lastName = prompt("Enter Your Last Name : ");
// var fullName = firstName + " " + lastName;
// console.log(`Hello ${fullName} Sir.`);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

// var favPhone = prompt("Enter Your Favorite Cell Phone Model : ");
// console.log(
//   `My Favorite Phone is : ${favPhone} Length Of String : ${favPhone.length}`
// );

// 3. Write a program to find the index of letter "n" in the word
// "Pakistani" and display the result in your browser .

// var checkIndex = "Pakistan";
// for (var i = 0; i < checkIndex.length; i++) {
//   if (checkIndex[i] === "n") {
//     console.log(checkIndex);
//     console.log("Index Of 'n' : " + i);
//   }
// }

// 2nd Method To Do This Operation.
// var nationality = "pakistani";
// var indexnum = nationality.indexOf("n");
// console.log(indexnum);

// 4. Write a program to find the last index of letter "l" in the
// word "Hello World" and display the result in your browser.

// var testIndex = "Hello World";
// var findIndex = testIndex.lastIndexOf("l");
// console.log(`Last Index Of 'l' : ${findIndex}`);

// 5. Write a program to find the character at 3rd index in the
// word "Pakistani" and display the result in your browser.

// var character = "Pakistani";
// var checkIndexCharacter = character[3];
// console.log(`character at index 3 : ${checkIndexCharacter}`);

// var index = "Pakistani";
// var letter = index.charAt(3);
// document.write(`character at index 3 :  ${letter}`);

// 6. Repeat Q1 using string concat() method.

// 7. Write a program to replace the "Hyder" to "Islam" in the
// word "Hyderabad" and display the result in your browser.

// var city = "Hyderabad";
// var replace = city.slice(5);
// console.log(`City Name : ${city}`);
// console.log(`After Replace :   Islam${replace}`);

// 8. Write a program to replace all occurrences of "and" in the
// string with "&" and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and
// football together.";

// var para =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var replaceWord = para.replaceAll("and", "&");
// console.log(replaceWord);

// let massage =
//   "Ali and Sami are best friends. They play cricket and football together;";
// let arr = massage.split(" ");
// let modifyword = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "and") {
//     modifyword.push("&");
//   } else {
//     modifyword.push(arr[i]);
//   }
// }
// let replace = modifyword.join(" ");
// document.write(replace);

// 9. Write a program that converts a string "472" to a number
// 472. Display the values & types in your browser.

// var check = "472";
// var number = +check;

// console.log(`Value :  ${check}`);
// console.log(`Type : ${typeof(check)}`);
// console.log(`Value :  ${number}`);
// console.log(`Type : ${typeof(number)}`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter Any Word Which You Want To See in Uper Case : ");
// var changeWord = userInput.toUpperCase();

// console.log(userInput);
// console.log(changeWord);

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var takeInput = prompt("Enter Any Word Which You Want To See in Uper Case : ");
// var changeCase = takeInput[0].toUpperCase() + takeInput.slice(1);

// console.log("User Input : " + takeInput);
// console.log("Title Case : " + changeCase);

// 12. Write a program that converts the variable num to string. var num = 35.36;
// Remove the dot to display "3536" display in your browser.

// var num = 35.36;
// var convert = num.toString();
// var stringdot = convert.replace(".", "");

// console.log(num + " " + typeof num);
// console.log(convert + " " + typeof convert);
// console.log(stringdot + " " + typeof stringdot);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@, ., !].

// 14. You have an array A = [cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an array.
// After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Find Your Items Here : ");
// var isavailable = false;

// for (var i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i].toLowerCase() === search.toLowerCase()) {
//     isavailable = true;
//   }
// }
// if (isavailable) {
//   alert("its available");
// } else {
//   alert("its not available");
// }

// 15. Write a program to take password as an input from user.
// The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var convertString = university.split(" ");
// console.log(university);
// console.log(convertString);

// 17. Write a program to display the last character of a user
// input.

// var userInput = prompt("Enter Your Word");
// var lastChara = userInput.charAt(userInput.length - 1);
// console.log(userInput);
// console.log(lastChara);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var sentence = "The quick brown fox jumps over the lazy dog";
// var arr = sentence.split(" ");
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase() === "the") {
//     count++;
//   }
// }

// console.log("Text : The quick brown fox jumps over the lazy dog");
// console.log(`There are ${count} Occurrences of word 'the'`);
