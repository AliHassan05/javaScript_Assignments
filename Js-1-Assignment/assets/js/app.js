// Exercise No 1

// 1. Write a script to greet your website visitor using JS alert box.
// 2. Write a script to display following message on your web.
// var test1 = "Error! Please enter a valid password.";
// alert(test1);

// 3. Write a script to display following message on your webpage: (Hint : Use line break)
// var text = "Welcome to JS Land...\rHappy Coding!";
// alert(text);

// 4. Write a script to display following messages in sequence:
// var check1 = "Welcome to JS Land...";
// alert(check1);

// var check2 = "Prevent this page from creating additional dialogs";
// alert(check2);

// 5. Generate the following message through browser’s developer console:

// Exercise No 2

// 1. Declare a variable called username.
// var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Ali Hassan";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var message = "Hello World";
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var studentName = "Jhone Doe";
// alert(studentName);

// var studentAge = "15 Years Old";
// alert(studentAge);

// var studentCourse = "Certified Mobile Application Development";
// alert(studentCourse);

// 5. Write a script to display the following alert using one JS variable:

// var FastFood = "PIzza\rPIzz\rPIz\rPI\rP";
// alert(FastFood);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var email = "My Email Address is";
// alert(email + " example@example.com");

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book = "A smarter\rway to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS
// document.write("<p>Yah! I can write HTML content through JavaScript</p>");

// 9. Store following string in a variable and show in alert and
// browser through JS

// var show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(show);
// document.write("<p>▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬</p>");

// Exercise No 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var studentAge = "I am 15 Years Old";
// alert(studentAge);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// let visitCount = localStorage.getItem("visitCount");
// if (!visitCount) {
//   visitCount = 1;
// } else {
//   visitCount = parseInt(visitCount) + 1;
// }
// localStorage.setItem("visitCount", visitCount);
// alert("You have visited this site " + visitCount + " times.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// var birthYear = 1990;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data Type Of My Declared Variable is " + typeof birthYear);

// 4. A visitor visits an online clothing store www.xyzClothing.com. Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// let visitorName = "John Doe";
// let productTitle = "T-shirt";
// let quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) " + " on XYZ Clothing store");

// Exercise No 4

// 1. Declare 3 variables in one statement.
// let name, age, batch;

// 2. Declare 5 legal & 5 illegal variable names.

// Five legal variable names in JavaScript:

// var myVariable;
// var userName;
// var counter;
// var _value;
// var $result;

// Five illegal variable names in JavaScript:

// var 2myVar                  //(Cannot start with a number)
// var user-name               //(Cannot contain hyphens)
// var var                     //(Reserved keyword)
// var !myVar                  //(Cannot contain special characters except underscore)
// var my Var                  //(Cannot contain spaces)

// document.write("<h3>Rules for naming JS variables</h3>");

// document.write(
//   "<p>Variable names can only contain, numbers, $ and _. For example $my_1stVariable.</p>"
// );
// document.write(
//   "<p>Variables must begin with a Letter, $ or _ . For example : $name, _name or name.</p>"
// );
// document.write("<p>Variable names are case Sensitive.</p>");

// document.write("<p>Variable names should not be JS Keywords.</p>");
