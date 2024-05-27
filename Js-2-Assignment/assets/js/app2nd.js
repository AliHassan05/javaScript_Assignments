// Chapter 6 To 9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:

// var a = 10;

// document.write(`<h3>Result</h3>`);
// document.write(`The Value of a is : ${a}<br>`);
// document.write(`....................................................<br><br>`);

// document.write(`The Value of ++a is : ${++a}<br>`);
// document.write(`Now The Value of a is : ${a}<br><br><br>`);

// document.write(`The Value of a++ is : ${a++}<br>`);
// document.write(`The Value of a is : ${a}<br><br>`);

// document.write(`The Value of --a is : ${--a}<br>`);
// document.write(`The Value of a is : ${a}<br><br>`);

// document.write(`The Value of a-- is : ${a--}<br>`);
// document.write(`The Value of a is : ${a}<br><br>`);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;

// // a;
// document.write(`a is = ${a}<br>`);
// // b;
// document.write(`b is = ${b}<br><br>`);

// // --a;
// document.write(`--a is = ${--a}<br><br>`);

// // --a - --b;
// document.write(`--a - --b = ${--a} - ${--b}<br><br>`);

// // --a - --b + ++b;
// document.write(`--a - --b + ++b = ${--a} - ${--b} + ${++b}<br><br>`);

// // --a - --b + ++b + b--;
// document.write(
//   `--a - --b + ++b + b-- = ${--a} - ${--b} + ${++b} + ${b--}<br><br>`
// );

// var result = --a - --b + ++b + b--;
// document.write(`${result}`);

// 3. Write a program that takes input a name from user & greet the user.
// var mrName = prompt("Enter Your Name Please...");
// document.write(`Hello ${mrName}.<br>`);
// document.write(`Welcome To Our Site Mr.${mrName}.<br>`);

// 4. Write a program to take input a number from user & display it’s multiplication
// table on your browser. If user does not enter a new number, multiplication table
// of 5 should be displayed by default.

// var number =
//   prompt("Please Enter A Number which You Want to Create A Table") || 5;
// var print = parseInt(number);

// document.write(`${print} x 1 = ${print * 1}<br>`);
// document.write(`${print} x 2 = ${print * 2}<br>`);
// document.write(`${print} x 3 = ${print * 3}<br>`);
// document.write(`${print} x 4 = ${print * 4}<br>`);
// document.write(`${print} x 5 = ${print * 5}<br>`);
// document.write(`${print} x 6 = ${print * 6}<br>`);
// document.write(`${print} x 7 = ${print * 7}<br>`);
// document.write(`${print} x 8 = ${print * 8}<br>`);
// document.write(`${print} x 9 = ${print * 9}<br>`);
// document.write(`${print} x 10 = ${print * 10}<br>`);

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


let subject1 = prompt("Enter the name of first subject:");
let subject2 = prompt("Enter the name of second subject:");
let subject3 = prompt("Enter the name of third subject:");
let totalMarks = 100;
let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
