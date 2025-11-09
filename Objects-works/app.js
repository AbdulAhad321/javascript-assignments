// ================================
// 1️⃣ Calculate total price of each item and all items
// ================================
var itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 }
];

let totalPriceAll = 0;

console.log("----- Question 1: Total Price of Each Item -----");
itemsArray.forEach(item => {
  let total = item.price * item.quantity;
  console.log(`${item.name} total price: ${total}`);
  totalPriceAll += total;
});
console.log(`Total price of all items: ${totalPriceAll}\n`);


// ================================
// 2️⃣ Check if properties exist in object
// ================================
let user = {
  name: "Abdul",
  email: "abdul@example.com",
  password: "123456",
  age: 21,
  gender: "Male",
  city: "Karachi",
  country: "Pakistan"
};

console.log("----- Question 2: Property Checking -----");
console.log("age" in user);         // true
console.log("country" in user);     // true
console.log("firstName" in user);   // false
console.log("lastName" in user);    // false
console.log("\n");


// ================================
// 3️⃣ Constructor function and multiple records
// ================================
function Student(name, age, gender, course) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.course = course;
}

let student1 = new Student("Ali", 20, "Male", "BSCS");
let student2 = new Student("Ayesha", 22, "Female", "BBA");
let student3 = new Student("Zain", 19, "Male", "BSIT");

console.log("----- Question 3: Constructor Function Records -----");
console.log(student1);
console.log(student2);
console.log(student3);
console.log("\n");


// ================================
// 4️⃣ Population record constructor (Bonus with localStorage simulation)
// ================================
function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

// Example entries
let person1 = new Person("Sara", "Female", "Karachi", "Masters", "Teacher");
let person2 = new Person("Ahmed", "Male", "Lahore", "Bachelors", "Engineer");
let person3 = new Person("Bilal", "Male", "Islamabad", "Intermediate", "Student");

// Store in simulated localStorage
let localStorage = {
  data: {},
  setItem: function (key, value) { this.data[key] = value; },
  getItem: function (key) { return this.data[key]; }
};

let people = [person1, person2, person3];
localStorage.setItem("peopleData", JSON.stringify(people));

// Retrieve
let storedPeople = JSON.parse(localStorage.getItem("peopleData"));
console.log("----- Question 4: Population Records (localStorage) -----");
console.log(storedPeople);
