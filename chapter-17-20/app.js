// app.js

// =============================
// Chapter 17-20: Arrays and Loops
// =============================

// 1. Declare and initialize an empty multidimensional array (array of arrays)
let multiArray1 = [[], [], []];
console.log("Q1: Empty multidimensional array:", multiArray1);

// 2. Declare and initialize a multidimensional array representing a matrix
let multiArray2 = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log("Q2: Matrix:");
multiArray2.forEach(row => console.log(row.join(" ")));

// 3. Print numeric counting from 1 to 10
console.log("Q3: Counting from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Multiplication table
let tableNumber = 5; // example input
let tableLength = 10; // example input
console.log(`Q4: Multiplication table of ${tableNumber}`);
for (let i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 5. Print items of array using for loop
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Q5: Fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate series
console.log("Q6: Series");
// a. Counting
console.log("Counting:", Array.from({ length: 15 }, (_, i) => i + 1).join(", "));
// b. Reverse counting
console.log("Reverse Counting:", Array.from({ length: 10 }, (_, i) => 10 - i).join(", "));
// c. Even
console.log("Even:", Array.from({ length: 11 }, (_, i) => i * 2).join(", "));
// d. Odd
console.log("Odd:", Array.from({ length: 10 }, (_, i) => i * 2 + 1).join(", "));
// e. Series (k)
console.log("Series:", Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k").join(", "));

// 7. Search in array
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = "cookie"; // example input
let foundIndex = bakery.indexOf(userInput);
if (foundIndex !== -1) {
  console.log(`Q7: ${userInput} is available at index ${foundIndex} in our bakery.`);
} else {
  console.log(`Q7: We are sorry. ${userInput} is not available in our bakery.`);
}

// 8. Largest number in array
let numbers = [24, 53, 78, 91, 12];
let largest = Math.max(...numbers);
console.log("Q8: Largest number is", largest);

// 9. Smallest number in array
let smallest = Math.min(...numbers);
console.log("Q9: Smallest number is", smallest);

// 10. Multiples of 5 ranging 1 to 100
console.log("Q10: Multiples of 5 ranging 1 to 100");
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
