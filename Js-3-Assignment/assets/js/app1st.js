// Exercise No 9 -11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var userCity = prompt("Enter Your City Please");

// if (userCity == "karachi") {
//   document.write("Welcome to the city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your Gender Here : ");
// if (gender === "male") {
//   document.write("Good Morning Sir");
// } else if (gender === "female") {
//   document.write("Good Morning Ma’am");
// } else {
//   document.write("Good Morning Butt First Identify Your Gender Please");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt(
//   "Enter the color of the traffic signal (red, yellow, green) : "
// );
// if (color === "red") {
//   document.write(`Must Stop`);
// } else if (color === "yellow") {
//   document.write(`Ready To Move`);
// } else if (color === "green") {
//   document.write(`Move Now`);
// } else {
//   document.write(`nvalid color entered.`);
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var checkFuel = +prompt("Check Your Car Fuel :");
// if (checkFuel > 0.25) {
//   console.log(`No Need To Refill The Car`);
// } else if (checkFuel < 0.25) {
//   console.log(`You Need To Refill Your Car Fuel`);
// } else {
//   console.log(`Invalid Data Please Correct It`);
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// 1
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// 2
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } else {
//   alert("given condition for variable b is false");
// }

// 3
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// } else {
//   alert("condition 1 is false");
// }

// if (c === 13) {
//   alert("condition 2 is true");
// }

// if (++c < 14) {
//   alert("condition 3 is true");
// }

// if (c === 14) {
//   alert("condition 4 is true");
// }

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e. if (true){
//     alert("True");
// }
//     if (false){
//     alert("False");
// }

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// var english = +prompt("Enter marks obtained in english :");
// var urdu = +prompt("Enter marks obtained in urdu :");
// var math = +prompt("Enter marks obtained in math :");
// var totalMarks = +prompt("Enter total marks :");

// var obtainMarks = english + urdu + math;

// var percentage = (obtainMarks / totalMarks) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write(`<h1>Marks Sheet</h1>`);
// document.write(`Total Marks : ${totalMarks}<br>`);
// document.write(`Marks Obtained : ${obtainMarks}<br>`);
// document.write(`Percentage : ${percentage}%<br>`);
// document.write(`Grade : ${grade}<br>`);

// if (grade == "A+") {
//   document.write(`Remarks : Your are Excellent`);
// } else if (grade == "A") {
//   document.write(`Remarks : Your are Good`);
// } else if (grade == "B") {
//   document.write(`Remarks : Great Job`);
// } else if (grade == "C") {
//   document.write(`Remarks : You Need To Impeove`);
// } else if (grade == "D") {
//   document.write(`Remarks : Bad Results`);
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close

// let secretNumber = 6;
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//   alert("Close Enough Try Again");
// } else if (userGuess > 10 || userGuess < 1) {
//   alert("Sorry Only Enter A Value More Then 0 or Less Then 10");
// } else {
//   alert("Sorry Try Again");
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var number = 3;
// var givenNumber = parseInt(prompt("Check Your Number if Divisible"));

// if (givenNumber % number === 0) {
//   console.log("Given Number is Divisible by 3");
// } else {
//   console.log("Given Number is Not Divisible by 3");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var givenNumber = parseInt(prompt("Check Your Number if Divisible"));

// if (givenNumber % 2 === 0) {
//   console.log("Given Input Is An Even Number");
// } else {
//   console.log("Given Input Is An Odd Number");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var checkTemp = parseFloat(prompt("Check Temperature"));

// if (checkTemp > 40) {
//   console.log("It is too hot outside.");
// } else if (checkTemp > 30) {
//   console.log("The Weather today is Normal.");
// } else if (checkTemp > 20) {
//   console.log("Today’s Weather is cool.");
// } else if (checkTemp > 10) {
//   console.log("OMG! Today’s weather is so Cool.");
// } else {
//   console.log("InValid Data");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var firstNumber = parseFloat(prompt("Enter first number:"));
// var secondNumber = parseFloat(prompt("Enter first number:"));
// var operationPerform = prompt(
//   "Enter Operations You Want To Perfomed : (+, -, *, /, %) "
// );
// var result;

// if (operationPerform === "+") {
//   result = firstNumber + secondNumber;
// } else if (operationPerform === "-") {
//   result = firstNumber - secondNumber;
// } else if (operationPerform === "*") {
//   result = firstNumber * secondNumber;
// } else if (operationPerform === "/") {
//   result = firstNumber / secondNumber;
// } else if (operationPerform === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   console.log("Please Enter A Valid Number Or Operation You Want To Perform");
// }
// console.log(`Result : ${result}`);
