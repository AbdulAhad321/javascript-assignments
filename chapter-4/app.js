// 1. Declare 3 variables in one statement
let a = 1, b = 2, c = 3;

// 2. Declare 5 legal & 5 illegal variable names

// Legal variable names
let myName;
let _age;
let $salary;
let user123;
let camelCaseExample;

// Illegal variable names (These lines are commented because they'll cause errors if executed)
// let 123user;        // Cannot start with a number
// let my-name;        // Hyphen is not allowed
// let var;            // Reserved word
// let user name;      // Space is not allowed
// let @email;         // Special character @ is not allowed

// 3. Display in browser

document.write("<h1>Rules for naming JS variables</h1>");

// a) Heading already displayed above

// b) Allowed characters
document.write("<p>Variable names can only contain letters, numbers, dollar signs ($), and underscores (_).</p>");
document.write("<p>For example: <b>$my_1stVariable</b></p>");

// c) Starting characters
document.write("<p>Variables must begin with a letter, underscore (_) or dollar sign ($).</p>");
document.write("<p>For example: <b>$name</b>, <b>_name</b> or <b>name</b></p>");

// d) Case sensitivity
document.write("<p>Variable names are case sensitive.</p>");

// e) Reserved words
document.write("<p>Variable names should not be JS keywords.</p>");
