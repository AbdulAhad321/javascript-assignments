// ==========================
// JavaScript Assignment 11-16
// ==========================

// 1. Character type check
var char = prompt("Enter a character (number or letter):");
if (char.length === 1) {
    var ascii = char.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        console.log("The input is a number.");
    } else if (ascii >= 65 && ascii <= 90) {
        console.log("The input is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        console.log("The input is a lowercase letter.");
    } else {
        console.log("The input is neither a letter nor a number.");
    }
} else {
    console.log("Please enter only one character.");
}

// 2. Compare two integers
var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");
if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}

// 3. Positive, negative, or zero
var numCheck = +prompt("Enter a number:");
if (numCheck > 0) {
    console.log("The number is positive.");
} else if (numCheck < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4. Vowel check
var letter = prompt("Enter a single letter:");
if (letter.length === 1) {
    var vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(letter.toLowerCase())) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Please enter only one character.");
}

// 5. Password validation
var correctPassword = "12345";
var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    console.log("Correct. The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// 6. Fix if/else statement
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// 7. Time-based greeting (24-hour format)
var time = +prompt("Enter time in 24-hour format (e.g., 1900):");
if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid time entered.");
}
