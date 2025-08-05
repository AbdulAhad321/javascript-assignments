// ===============================
// Assignment #6 - JavaScript
// Math Expressions + Alerts
// ===============================

// 1. Arithmetic to display result
let num = 10;
console.log("Initial value:", num);

num++;
console.log("Value after increment is:", num);

num += 7;
console.log("Value after addition is:", num);

num--;
console.log("Value after decrement is:", num);

let remainder = num % 3;
console.log("The remainder is:", remainder);

// -------------------------------

// 2. Output of a, b & result
let a = 2, b = 1;
let result = --a - --b + ++b + b--;

console.log("a =", a); // After all operations
console.log("b =", b); // After all operations
console.log("result =", result);

// Stage explanation:
a = 2; b = 1;
// --a;  a becomes 1
// --a - --b;  1 - 0 = 1
// --a - --b + ++b;  1 - 0 + 1 = 2
// --a - --b + ++b + b--;  1 - 0 + 1 + 1 = 3 (then b becomes 0)

// -------------------------------

// 3. Take name & greet user
let userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome!");

// -------------------------------

// 5. Multiplication table with default 5
let tableNum = +prompt("Enter a number for multiplication table:", 5);
console.log("Multiplication Table of", tableNum);
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// -------------------------------

// 6. Subjects, marks, and percentage
let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter second subject name:");
let subject3 = prompt("Enter third subject name:");
let totalMarks = 100;

let marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
let marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
let marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

let obtainedTotal = marks1 + marks2 + marks3;
let percentage = (obtainedTotal / (totalMarks * 3)) * 100;

document.write("<h2>Result</h2>");
document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + obtainedTotal + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
