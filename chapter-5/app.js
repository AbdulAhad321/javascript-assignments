// 1. Addition
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
document.write("<h3>1. Sum of " + num1 + " and " + num2 + " is " + sum + "</h3>");

// 2. Subtraction, Multiplication, Division, Modulus
document.write("<h3>2.</h3>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br>");

// 3. Math Expressions
document.write("<h3>3. Math Expression</h3>");
let value;
document.write("Value after variable declaration is: " + value + "<br>");
value = 5;
document.write("Initial value: " + value + "<br>");
value++;
document.write("Value after increment is: " + value + "<br>");
value += 7;
document.write("Value after addition is: " + value + "<br>");
value--;
document.write("Value after decrement is: " + value + "<br>");
document.write("The remainder is: " + (value % 3) + "<br>");

// 4. Movie ticket
document.write("<h3>4. Movie Ticket Cost</h3>");
let ticketPrice = 600;
document.write("Total cost to buy 5 tickets is " + (ticketPrice * 5) + " PKR<br>");

// 5. Multiplication table
document.write("<h3>5. Multiplication Table</h3>");
let table = 4;
for (let i = 1; i <= 10; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
}

// 6. Temperature converter
document.write("<h3>6. Temperature Converter</h3>");
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

// 7. Shopping cart
document.write("<h3>7. Shopping Cart</h3>");
let item1 = 650;
let item2 = 100;
let qty1 = 3;
let qty2 = 7;
let shipping = 100;
let total = (item1 * qty1) + (item2 * qty2) + shipping;
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shipping + "<br>");
document.write("Total cost of your order is " + total + "<br>");

// 8. Percentage
document.write("<h3>8. Marks Sheet</h3>");
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

// 9. Currency in PKR
document.write("<h3>9. Currency in PKR</h3>");
let usd = 10;
let riyal = 25;
let totalPKR = (usd * 104.80) + (riyal * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br>");

// 10. Arithmetic Sequence
document.write("<h3>10. Arithmetic Sequence</h3>");
let num = 5;
let result = ((num + 5) * 10) / 2;
document.write("Result is: " + result + "<br>");

// 11. Age Calculator
document.write("<h3>11. Age Calculator</h3>");
let currentYear = 2025;
let birthYear = 2003;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old<br>");

// 12. Geometrizer
document.write("<h3>12. The Geometrizer</h3>");
let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write("Radius: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");

// 13. Lifetime Supply Calculator
document.write("<h3>13. Lifetime Supply Calculator</h3>");
let snack = "Lays";
let currentAge = 21;
let maxAge = 80;
let perDay = 2;
let totalNeeded = (maxAge - currentAge) * 365 * perDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");
