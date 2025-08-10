// Assignment-6-9
// =========================
// 1. Arithmetic Increment Demo
// =========================
console.log("Task 1");
var a = 10;
console.log("The value of a is: " + a);
console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a);
console.log("------------------------------");

// =========================
// 2. Pre/Post Increment Example
// =========================
console.log("Task 2");
var a2 = 2, b2 = 1;
console.log("Initial values: a = " + a2 + ", b = " + b2);

var step1 = --a2; // a2 = 1
console.log("--a: " + step1);

a2 = 2; b2 = 1;
var step2 = --a2 - --b2; // a2=1, b2=0 → 1 - 0 = 1
console.log("--a - --b: " + step2);

a2 = 2; b2 = 1;
var step3 = --a2 - --b2 + ++b2; // 1 - 0 + 1 = 2
console.log("--a - --b + ++b: " + step3);

a2 = 2; b2 = 1;
var result = --a2 - --b2 + ++b2 + b2--; 
// a2=1, b2=0 → 1 - 0 + 1 + 1 = 3
console.log("--a - --b + ++b + b--: " + result);
console.log("Final Values => a: " + a2 + ", b: " + b2 + ", result: " + result);
console.log("------------------------------");

// =========================
// 3. Greet User by Name
// =========================
console.log("Task 3");
var userName = prompt("Enter your name:");
console.log("Hello, " + userName + "! Welcome!");
console.log("------------------------------");

// =========================
// 5. Multiplication Table
// =========================
console.log("Task 5");
var tableNum = prompt("Enter a number for multiplication table:", "5");
if (tableNum === "" || tableNum === null) {
    tableNum = 5;
}
console.log("Multiplication Table of " + tableNum);
for (var i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}
console.log("------------------------------");

// =========================
// 6. Subject Marks & Percentage
// =========================
console.log("Task 6");
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarksEach = 100;

var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

var totalObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksEach * 3;
var percentage = (totalObtained / totalMarks) * 100;

console.log("Subject\t\tTotal Marks\tObtained Marks");
console.log(sub1 + "\t" + totalMarksEach + "\t\t" + marks1);
console.log(sub2 + "\t" + totalMarksEach + "\t\t" + marks2);
console.log(sub3 + "\t" + totalMarksEach + "\t\t" + marks3);

console.log("Total Obtained Marks: " + totalObtained);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");

// ==========================
// Assignment # 9-11 Solutions
// ==========================

// 1. City name check
var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    console.log("Welcome to city of lights");
}

// 2. Gender greeting
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma’am");
}

// 3. Traffic signal message
var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
if (signalColor.toLowerCase() === "red") {
    console.log("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    console.log("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    console.log("Move now");
}

// 4. Fuel check
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
}

// 5. Script conditions
// a
var a = 4;
if (++a === 5) {
    console.log("given condition for variable a is true");
}
// b
var b = 82;
if (b++ === 83) {
    console.log("given condition for variable b is true");
}
// c
var c = 12;
if (c++ === 13) {
    console.log("condition 1 is true");
}
if (c === 13) {
    console.log("condition 2 is true");
}
if (++c < 14) {
    console.log("condition 3 is true");
}
if (c === 14) {
    console.log("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");
}
// e
if (true) {
    console.log("True");
}
if (false) {
    console.log("False");
}
// f
if ("car" < "cat") {
    console.log("car is smaller than cat");
}

// 6. Marks & grade calculation
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");
var totalMarksEach = 100;

var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

var totalObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksEach * 3;
var percentage = (totalObtained / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + totalObtained);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);

// 7. Guess game
var secretNum = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess the secret number (1-10):");
if (guess === secretNum) {
    console.log("Bingo! Correct answer");
} else if (guess + 1 === secretNum) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Wrong guess! The secret number was " + secretNum);
}

// 8. Divisible by 3 check
var num3 = +prompt("Enter a number to check divisibility by 3:");
if (num3 % 3 === 0) {
    console.log(num3 + " is divisible by 3");
} else {
    console.log(num3 + " is not divisible by 3");
}

// 9. Even or odd check
var numEO = +prompt("Enter a number to check even/odd:");
if (numEO % 2 === 0) {
    console.log(numEO + " is even");
} else {
    console.log(numEO + " is odd");
}

// 10. Temperature check
var temp = +prompt("Enter temperature:");
if (temp > 40) {
    console.log("It is too hot outside.");
} else if (temp > 30) {
    console.log("The Weather today is Normal.");
} else if (temp > 20) {
    console.log("Today’s Weather is cool.");
} else if (temp > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}

// 11. Simple calculator
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %):");
var calcResult;

if (op === "+") {
    calcResult = num1 + num2;
} else if (op === "-") {
    calcResult = num1 - num2;
} else if (op === "*") {
    calcResult = num1 * num2;
} else if (op === "/") {
    calcResult = num1 / num2;
} else if (op === "%") {
    calcResult = num1 % num2;
} else {
    calcResult = "Invalid operation";
}
console.log("Result: " + calcResult);

