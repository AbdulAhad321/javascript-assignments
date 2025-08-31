// app.js

// =============================
// Chapter 21-25: String Methods
// =============================

// 1. Merge first and last name
let firstName = "Ali"; // example input
let lastName = "Khan"; // example input
let fullName = firstName + " " + lastName;
console.log("Q1: Hello, " + fullName + "!");

// 2. Favorite mobile phone model length
let mobileModel = "Samsung Galaxy S21";
console.log("Q2: My favorite phone is: " + mobileModel);
console.log("Length of string: " + mobileModel.length);

// 3. Index of letter 'n' in Pakistani
let word1 = "Pakistani";
console.log("Q3: Index of 'n' in Pakistani:", word1.indexOf("n"));

// 4. Last index of 'l' in Hello World
let word2 = "Hello World";
console.log("Q4: Last index of 'l':", word2.lastIndexOf("l"));

// 5. Character at 3rd index in Pakistani
console.log("Q5: Character at 3rd index in Pakistani:", word1.charAt(3));

// 6. Repeat Q1 using concat
let fullNameConcat = firstName.concat(" ", lastName);
console.log("Q6: Hello, " + fullNameConcat + "!");

// 7. Replace Hyder with Islam in Hyderabad
let city = "Hyderabad";
console.log("Q7:", city.replace("Hyder", "Islam"));

// 8. Replace all 'and' with '&'
let message = "Ali and Sami are best friends. They play cricket and football together.";
console.log("Q8:", message.replace(/and/g, "&"));

// 9. Convert string "472" to number
let strNum = "472";
let num = Number(strNum);
console.log("Q9: Value: " + num + ", Type: " + typeof num);

// 10. Convert input to uppercase
let input1 = "javascript";
console.log("Q10: Uppercase:", input1.toUpperCase());

// 11. Convert input to title case
let input2 = "javascript is fun";
let titleCase = input2.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Q11: Title case:", titleCase);

// 12. Convert num to string and remove dot
let num2 = 35.36;
let strWithoutDot = num2.toString().replace(".", "");
console.log("Q12:", strWithoutDot);

// 13. Validate username
let username = "Ali!";
if (/[!@.,]/.test(username)) {
  console.log("Q13: Please enter a valid username.");
} else {
  console.log("Q13: Username is valid.");
}

// 14. Search in array (case insensitive)
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = "COOKIE";
let found = bakery.some(item => item.toLowerCase() === searchItem.toLowerCase());
if (found) {
  console.log(`Q14: ${searchItem} is available in our bakery.`);
} else {
  console.log(`Q14: ${searchItem} is not available in our bakery.`);
}

// 15. Password validation
let password = "abc123";
if (password.length < 6) {
  console.log("Q15: Password must be at least 6 characters long.");
} else if (!isNaN(password.charAt(0))) {
  console.log("Q15: Password cannot start with a number.");
} else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
  console.log("Q15: Password must contain alphabets and numbers.");
} else {
  console.log("Q15: Password is valid.");
}

// 16. Convert string to array using split
let university = "University of Karachi";
let uniArray = university.split(" ");
console.log("Q16:", uniArray);

// 17. Display last character of user input
let userWord = "JavaScript";
console.log("Q17: Last character:", userWord.charAt(userWord.length - 1));

// 18. Count occurrences of word 'the'
let text = "The quick brown fox jumps over the lazy dog";
let count = text.toLowerCase().split("the").length - 1;
console.log("Q18: Occurrences of 'the':", count);
