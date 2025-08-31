// ==========================
// Assignment #26-30
// MATH METHODS (JavaScript)
// ==========================


// ---------- Q1 ----------
console.log("Q1: Positive Integer Math Methods");
let num1 = +prompt("Enter a positive integer:");
console.log("Number: " + num1);
console.log("Round off value: " + Math.round(num1));
console.log("Floor value: " + Math.floor(num1));
console.log("Ceil value: " + Math.ceil(num1));
console.log("----------------------");


// ---------- Q2 ----------
console.log("Q2: Negative Floating Point Math Methods");
let num2 = +prompt("Enter a negative floating point number:");
console.log("Number: " + num2);
console.log("Round off value: " + Math.round(num2));
console.log("Floor value: " + Math.floor(num2));
console.log("Ceil value: " + Math.ceil(num2));
console.log("----------------------");


// ---------- Q3 ----------
console.log("Q3: Absolute Value");
let num3 = +prompt("Enter a number to find absolute value:");
console.log("Absolute value: " + Math.abs(num3));
console.log("----------------------");


// ---------- Q4 ----------
console.log("Q4: Dice Simulation");
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Random dice value: " + dice);
console.log("----------------------");


// ---------- Q5 ----------
console.log("Q5: Coin Toss Simulation");
let toss = Math.floor(Math.random() * 2) + 1;
if (toss === 1) {
    console.log("Random coin value: Heads");
} else {
    console.log("Random coin value: Tails");
}
console.log("----------------------");


// ---------- Q6 ----------
console.log("Q6: Random Number (1–100)");
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNum);
console.log("----------------------");


// ---------- Q7 ----------
console.log("Q7: User Weight Parsing");
let weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
let weight = parseFloat(weightInput);
console.log("The weight of user is " + weight + " kilograms");
console.log("----------------------");


// ---------- Q8 ----------
console.log("Q8: Secret Number Game");
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess a number between 1 and 10:");
if (userGuess === secretNum) {
    console.log("Congratulations! You guessed the secret number.");
} else {
    console.log("Try again! The secret number was " + secretNum);
}
console.log("----------------------");
