// Chapter No 5

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var a = 3;
// var b = 5;
// var sum = a + b;
// document.write("Sum of 3 and 5 is = " + sum);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// subtraction
// var a = 5;
// var b = 3;
// var sub = a - b;
// document.write("Subtraction of 5 and 3 is = " + sub);

// multiplication
// var a = 5;
// var b = 3;
// var mul = a * b;
// document.write("Multiplication of 5 and 3 is = " + mul);

// division
// var a = 5;
// var b = 3;
// var div = a / b;
// document.write("Division of 5 and 3 is = " + div);

// modulus
// var a = 5;
// var b = 3;
// var mod = a % b;
// document.write("Modulus of 5 and 3 is = " + mod);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// Declare a variable
// var value;

// Show the value of the variable after declaration
// document.write(
//   "Value after variable declaration is " + value + "<br>" + "<br>"
// );

// Initialize the variable with some number
// value = 5;

// Show the initial value of the variable
// document.write("Initial Value : " + value + "<br>" + "<br>");

// Increment the variable
// value++;

// Show the value of the variable after increment
// document.write("Value after increment is : " + value + "<br>" + "<br>");

// Add 7 to the variable
// value += 7;

// Show the value of the variable after addition
// document.write("Value after addition is : " + value + "<br>" + "<br>");

// Decrement the variable
// value--;

// Show the value of the variable after decrement
// document.write("Value after decrement is : " + value + "<br>" + "<br>");

// Show the remainder after dividing the variable's value by 3
// var remainder = value % 3;

// Output the remainder
// document.write("The remainder is : " + remainder + "<br>" + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate
// the cost of buying 5 tickets to a movie. Example output:

// var CostOfOneTicket = 600;
// var costOfBuying = 5;
// totalPrice = CostOfOneTicket * costOfBuying;
// document.write(
//   "Total cost to buy 5 tickets to a movie is " +
//     totalPrice +
//     "PKR" +
//     "<br>" +
//     "<br>"
// );

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var enter_number = prompt("Enter Your Table Number");
// var print = parseInt(enter_number);
// document.write(`Table Of : ${print}<br>`);
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

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
// °C = ( °F - 32 ) × 9/5
// °F = ( °C × 9/5 ) + 32

// Celsius to Fahrenheit
// var celsius = 25;
// var fahrenheit = (celsius * 9) / 5 + 32;
// document.write(`${celsius}°C is ${fahrenheit}°F <br>`);

// Fahrenheit to Celsius
// var fahrenheit2 = 70;
// var celsius2 = ((fahrenheit2 - 32) * 5) / 9;
// document.write(`${fahrenheit2}°F is ${celsius2}°C <br> <br> <br>`);

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// Price of item 1 is 650
// Quantitiy of item 1 is 3
// Price of item 2 is 100
// Quantitiy of item 2 is 7
// Shipping Charges 100
// Total cost of your order is 2750

// document.write(`<h1>Shopping Cart</h1>`);
// var price_item1 = 650;
// document.write(`Price of item 1 is ${price_item1}<br> `);
// var quantity_item1 = 3;
// document.write(`Quantitiy of item 1 is ${quantity_item1}<br>`);
// var price_item2 = 100;
// document.write(`Price of item 2 is ${price_item2}<br>`);
// var quantity_item2 = 7;
// document.write(`Quantitiy of item 2 is ${quantity_item2}<br>`);
// var shipping_charges = 100;
// document.write(`Shipping Charges ${shipping_charges}<br>`);

// document.write(`<h2>Receipt</h2>`);
// var total_bill_item1 = price_item1 * quantity_item1;
// var total_bill_item2 = price_item2 * quantity_item2;
// var over_all_bill = total_bill_item1 + total_bill_item2 + shipping_charges;
// document.write(`Total cost of your order is : ${over_all_bill}`);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show
// the result in your browser.

// Total Marks : 980
// Marks Obtained : 804
// Percentage = 82.0408163265306%

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write(`Total Marks is : ${totalMarks}<br>`);
// document.write(`Marks Obtained is : ${marksObtained}<br>`);
// document.write(`Total Marks Percentage is : ${percentage}%`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the
// total currency to Pakistani Rupees.Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Total Curreny in PKR : 1748

// var USD = 10;
// var SAR = 25;
// var exchangeRateUSD = 104.8;
// var exchangeRateSAR = 28;
// var totalPKR = USD * exchangeRateUSD + SAR * exchangeRateSAR;

// document.write(`<h1>Currency in PKR</h1>`);
// document.write(`Total Curreny in PKR : ${totalPKR}`);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var test = 4;
// var add = 5;
// var multiply = 10;
// var divide = 2;
// var output = ((test + add) * 10) / 2;
// document.write(output);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// var currentYear = 2024;
// var birthYear = 2000;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write(`<h1>Age Calculator</h1>`);
// document.write(`Current Year is : ${currentYear}<br>`);
// document.write(`Birth Year is : ${birthYear}<br>`);
// document.write(`Your Age is : ${age1} - ${age2}<br>`);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// Output the results to the screen
// document.write("Radius of a circle : " + radius + "<br>");
// document.write("The circumference is : " + circumference.toFixed(1) + "<br>");
// document.write("The area is : " + area.toFixed(1));

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maximumAge = 65;
// var estimatedAmountPerDay = 3;
// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var snacksRequired = daysRemaining * estimatedAmountPerDay;

// document.write(`<h1>The Lifetime Supply Calculator</h1>`);
// document.write("Favorite Snack: " + favoriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Maximum Age: " + maximumAge + "<br>");
// document.write("Estimated Amount Per Day: " + estimatedAmountPerDay + "<br>");
// document.write(
//   "You will need " +
//     snacksRequired +
//     " " +
//     favoriteSnack +
//     " to last you until the ripe old age of " +
//     maximumAge
// );
