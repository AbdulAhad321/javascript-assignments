// =============================
// Chapters 31–34 | Date Methods
// =============================

// Q1
console.log("Q1:");
let currentDate = new Date();
console.log("Current Date & Time: " + currentDate);

// Q2
console.log("\nQ2:");
let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
console.log("Current Month: " + months[currentDate.getMonth()]);

// Q3
console.log("\nQ3:");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("Today is: " + days[currentDate.getDay()]);

// Q4
console.log("\nQ4:");
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    console.log("It's Fun day");
} else {
    console.log("It's a Working day");
}

// Q5
console.log("\nQ5:");
let date = currentDate.getDate();
if (date < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// Q6
console.log("\nQ6:");
let minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));
console.log("Minutes since midnight Jan 1, 1970: " + minutesSince1970);

// Q7
console.log("\nQ7:");
let hours = currentDate.getHours();
if (hours < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}

// Q8
console.log("\nQ8:");
let laterDate = new Date(2020, 11, 31);
console.log("Later Date: " + laterDate);

// Q9
console.log("\nQ9:");
let ramadanStart = new Date(2015, 5, 18); // June 18, 2015
let diff = currentDate.getTime() - ramadanStart.getTime();
let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(daysPassed + " days have passed since 1st Ramadan, 2015");

// Q10
console.log("\nQ10:");
let referenceDate = new Date();
let beginning2015 = new Date(2015, 0, 1);
let secondsElapsed = Math.floor((referenceDate.getTime() - beginning2015.getTime()) / 1000);
console.log("Seconds elapsed since beginning of 2015: " + secondsElapsed);

// Q11
console.log("\nQ11:");
let current = new Date();
current.setHours(current.getHours() + 1);
console.log("Date Object after adding 1 hour: " + current);

// Q12
console.log("\nQ12:");
let hundredYearsBack = new Date();
hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
console.log("100 years back: " + hundredYearsBack);

// Q13
console.log("\nQ13:");
// For demo, using a fixed age = 25
let age = 25;
let birthYear = currentDate.getFullYear() - age;
console.log("Your age is " + age);
console.log("Your birth year is " + birthYear);

// Q14
console.log("\nQ14:");
let customerName = "Abdul Ahad";
let currentMonth = months[currentDate.getMonth()];
let units = 350;
let chargesPerUnit = 12.50;
let netAmount = (units * chargesPerUnit).toFixed(2);
let lateSurcharge = 200.00;
let grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);

console.log("Customer Name: " + customerName);
console.log("Month: " + currentMonth);
console.log("Number of units: " + units);
console.log("Charges per unit: " + chargesPerUnit);
console.log("Net Amount Payable (within Due Date): " + netAmount);
console.log("Late Payment Surcharge: " + lateSurcharge);
console.log("Gross Amount Payable (after Due Date): " + grossAmount);
