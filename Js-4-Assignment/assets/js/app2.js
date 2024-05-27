// Chapter No 14 --- 14

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentNames = {};

// 3. Declare and initialize a strings array.
// var stringArray = ["Ali", "Ahmad", "Hammad", "Zeeshan", "Umer", "Rehman"];

// 4. Declare and initialize a numbers array.
// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 5. Declare and initialize a boolean array.
// var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
// var mixArray = [true, false, true, false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "Phd"];

// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write(`1) ${qualifications[0]} <br>`);
// document.write(`1) ${qualifications[1]} <br>`);
// document.write(`2) ${qualifications[2]} <br>`);
// document.write(`3) ${qualifications[3]} <br>`);
// document.write(`4) ${qualifications[4]} <br>`);
// document.write(`5) ${qualifications[5]} <br>`);
// document.write(`6) ${qualifications[6]} <br>`);
// document.write(`7) ${qualifications[7]} <br>`);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentNames = ["Michale", "John", "Tony"];
// var score = [320, 230, 480];
// var totalMarks = 500;

// document.write(
//   "Score of " +
//     studentNames[0] +
//     " is " +
//     score[0] +
//     ". " +
//     "Percentage : " +
//     (score[0] / totalMarks) * 100 +
//     "%" +
//     "<br>"
// );
// document.write(
//   "Score of " +
//     studentNames[1] +
//     " is " +
//     score[1] +
//     ". " +
//     "Percentage : " +
//     (score[1] / totalMarks) * 100 +
//     "%" +
//     "<br>"
// );
// document.write(
//   "Score of " +
//     studentNames[2] +
//     " is " +
//     score[2] +
//     ". " +
//     "Percentage : " +
//     (score[2] / totalMarks) * 100 +
//     "%" +
//     "<br>"
// );

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
// document.write(colors + "<br>" + "<br>");

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// var newColor = prompt("Add To The beginning : ");
// colors.unshift(newColor);
// document.write(colors + "<br>" + "<br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// var addEnd = prompt("Add The End Of The Array : ");
// colors.push(addEnd);
// document.write(colors + "<br>" + "<br>");

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// var newColor = prompt("Add To More Color At The beginning : ");
// colors.unshift(newColor);
// document.write(colors + "<br>" + "<br>");

// d. Delete the first color in the array. Display the updated
// array in your browser.
// colors.shift();
// document.write(colors + "<br>" + "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.
// colors.pop();
// document.write(colors + "<br>" + "<br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var index = parseInt(prompt("Enter the index to add the color:"));
// var newColor = prompt("Enter the color to add:");

// colors.splice(index, 0, newColor);
// document.write(colors);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var index = parseInt(prompt("Enter the index to start deleting colors from:"));
// var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));

// colors.splice(index, deleteCount);
// document.write(colors);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentScore = [320, 230, 480, 120];
// document.write(`Score Of Students : ${studentScore} <br><br>`);

// studentScore.sort();
// document.write(`Ordered Score Of Students : ${studentScore}`);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// document.write(`Cities List :<br>`);
// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(`${cityNames}<br><br>`);

// var selectedCities = [];

// selectedCities = cityNames.slice(2, 4);
// document.write(`${selectedCities}`);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// result = arr.join(" ");
// document.write(`${result}`);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Create a new FIFO array
// var fifoArray = [];

// // Add values to the FIFO array
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// document.write(fifoArray);
// // // Remove and display values from the FIFO array
// document.write(fifoArray.shift()); // Output: Value 1
// document.write(fifoArray.shift()); // Output: Value 2
// document.write(fifoArray.shift()); // Output: Value 3
// document.write(fifoArray.shift()); // Output: undefined, as the FIFO array is now empty

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write("<option>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");
