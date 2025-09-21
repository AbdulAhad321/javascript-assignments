// Assignment #38-44
// FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS

// 1. Power function
function power(a, b) {
  return Math.pow(a, b);
}
console.log("1) Power(2,3):", power(2, 3));

// 2. Leap year check
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("2) Leap Year 2024:", isLeapYear(2024));

// 3. Area of triangle using 2 functions
function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function areaOfTriangle(a, b, c) {
  let s = semiPerimeter(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log("3) Area of Triangle(3,4,5):", areaOfTriangle(3, 4, 5));

// 4. Marks average and percentage
function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction(m1, m2, m3) {
  console.log("4) Average:", average(m1, m2, m3));
  console.log("   Percentage:", percentage(m1, m2, m3).toFixed(2) + "%");
}
mainFunction(80, 90, 100);

// 5. Custom indexOf (for single character)
function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}
console.log("5) customIndexOf('hello','e'):", customIndexOf("hello", "e"));

// 6. Delete all vowels from a sentence
function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, "");
}
console.log("6) Remove vowels:", removeVowels("Hello World!"));

// 7. Count successive vowels with switch
function countSuccessiveVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length - 1; i++) {
    let pair = text[i] + text[i + 1];
    switch (pair.toLowerCase()) {
      case "aa":
      case "ae":
      case "ai":
      case "ao":
      case "au":
      case "ea":
      case "ee":
      case "ei":
      case "eo":
      case "eu":
      case "ia":
      case "ie":
      case "ii":
      case "io":
      case "iu":
      case "oa":
      case "oe":
      case "oi":
      case "oo":
      case "ou":
      case "ua":
      case "ue":
      case "ui":
      case "uo":
      case "uu":
        count++;
        break;
    }
  }
  return count;
}
console.log("7) Successive vowels:", countSuccessiveVowels("Pleases read this application and give me gratuity"));

// 8. Distance conversion
function toMeters(km) {
  return km * 1000;
}
function toFeet(km) {
  return km * 3280.84;
}
function toInches(km) {
  return km * 39370.1;
}
function toCentimeters(km) {
  return km * 100000;
}
let distKm = 5;
console.log("8) Distance Conversions for", distKm, "km");
console.log("   Meters:", toMeters(distKm));
console.log("   Feet:", toFeet(distKm));
console.log("   Inches:", toInches(distKm));
console.log("   Centimeters:", toCentimeters(distKm));

// 9. Overtime pay
function overtimePay(hoursWorked) {
  if (hoursWorked > 40) {
    return (hoursWorked - 40) * 12;
  } else {
    return 0;
  }
}
console.log("9) Overtime pay (45 hrs):", overtimePay(45));

// 10. Currency notes
function currencyNotes(amount) {
  let hundreds = Math.floor(amount / 100);
  let remainder = amount % 100;

  let fifties = Math.floor(remainder / 50);
  remainder %= 50;

  let tens = Math.floor(remainder / 10);

  return { hundreds, fifties, tens };
}
console.log("10) Currency notes for Rs. 880:", currencyNotes(880));
