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


//chapter 13-16

// 1. Declare an empty array using JS literal notation
let studentNamesLiteral = [];
console.log("Empty array (literal):", studentNamesLiteral);

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();
console.log("Empty array (object):", studentNamesObject);

// 3. Declare and initialize a strings array
let stringsArray = ["Ali", "Ahmed", "Sara"];
console.log("Strings array:", stringsArray);

// 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40];
console.log("Numbers array:", numbersArray);

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];
console.log("Boolean array:", booleanArray);

// 6. Declare and initialize a mixed array
let mixedArray = ["Hello", 123, true, null];
console.log("Mixed array:", mixedArray);

// 7. Qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualifications in Pakistan:");
for (let i = 0; i < qualifications.length; i++) {
    console.log((i+1) + ") " + qualifications[i]);
}

// 8. Student scores & percentages
let studentNames = ["Michael", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
}

// 9. Colors array operations
let colors = ["Red", "Green", "Blue"];
console.log("Initial colors:", colors);

// a. Add to beginning
colors.unshift("Yellow");
console.log("After adding Yellow at beginning:", colors);

// b. Add to end
colors.push("Black");
console.log("After adding Black at end:", colors);

// c. Add two more to beginning
colors.unshift("Orange", "Purple");
console.log("After adding two at beginning:", colors);

// d. Delete first color
colors.shift();
console.log("After deleting first color:", colors);

// e. Delete last color
colors.pop();
console.log("After deleting last color:", colors);

// f. Add color at user-defined index
let indexToAdd = 2;
let colorToAdd = "Pink";
colors.splice(indexToAdd, 0, colorToAdd);
console.log("After adding Pink at index 2:", colors);

// g. Delete colors from user-defined index
let indexToDelete = 1;
let numOfColorsToDelete = 2;
colors.splice(indexToDelete, numOfColorsToDelete);
console.log("After deleting 2 colors from index 1:", colors);

// 10. Sort student scores
let scores = [320, 230, 480, 120];
console.log("Scores of Students:", scores);
scores.sort((a, b) => a - b);
console.log("Ordered Scores of Students:", scores);

// 11. Copy selected cities
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
console.log("Cities list:", cities);
console.log("Selected cities list:", selectedCities);

// 12. Join array into string
let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(" ");
console.log("Array:", arr);
console.log("String:", singleString);

// 13. FIFO (First In First Out)
let fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

console.log("FIFO Array:");
while(fifoArray.length > 0) {
    console.log(fifoArray.shift());
}
