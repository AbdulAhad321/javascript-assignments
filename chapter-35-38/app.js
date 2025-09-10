// Chapters 35–38 | JavaScript Assignment

// 1. Display current date & time
function showDateTime() {
    console.log(new Date());
}

// 2. Greet user with full name
function greetUser(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName + "!");
}

// 3. Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// 4. Calculator
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return "Invalid operator";
    }
}

// 5. Square of a number
function square(num) {
    return num * num;
}

// 6. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 7. Display counting
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

// 8. Hypotenuse (nested function)
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

// 9. Area of rectangle
function rectangleArea(width, height) {
    return width * height;
}

// 10. Palindrome check
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

// 11. Capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
}

// 12. Find longest word
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// 13. Count occurrences of letter
function countOccurrences(str, letter) {
    return str.split(letter).length - 1;
}

// 14. Circle calculations
function calcCircumference(radius) {
    console.log("The circumference is " + (2 * Math.PI * radius));
}
function calcArea(radius) {
    console.log("The area is " + (Math.PI * radius * radius));
}

// ----------------------
// Example Calls
// ----------------------
showDateTime();
greetUser("Abdul", "Ahad");
console.log("Sum:", addNumbers(5, 7));
console.log("Calculator:", calculator(10, 5, '*'));
console.log("Square:", square(6));
console.log("Factorial:", factorial(5));
displayCounting(1, 5);
console.log("Hypotenuse:", calculateHypotenuse(3, 4));
console.log("Rectangle Area:", rectangleArea(5, 10));
console.log("Palindrome?", isPalindrome("madam"));
console.log("Capitalize:", capitalizeWords("the quick brown fox"));
console.log("Longest Word:", findLongestWord("Web Development Tutorial"));
console.log("Occurrences:", countOccurrences("JSResourceS.com", "o"));
calcCircumference(5);
calcArea(5);
